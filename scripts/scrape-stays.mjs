// Abre cada Airbnb/hotel da seção "Onde ficar" e lê capacidade + preço/noite,
// devolvendo um array Stay[] pronto pra colar em src/components/Tips.tsx
// (NEARBY_STAYS / TOSSA_STAYS).
//
// POR QUE ESTE SCRIPT EXISTE
// Airbnb e Booking bloqueiam scraping simples (403) e a política de rede de
// algumas sessões do Claude Code na web bloqueia a saída pra internet. Rode-o
// numa sessão/ambiente com acesso à web liberado.
//
// COMO RODAR
//   npm install playwright-core        # se ainda não estiver instalado
//   node scripts/scrape-stays.mjs
//
// O script respeita HTTPS_PROXY automaticamente (usa o proxy da sessão se houver).
// Usa o Chromium pré-instalado em /opt/pw-browsers quando disponível.
//
// REGRA DE PREÇO (definida pela Bele) — preço/noite:
//   até 700  -> $        700–1200 -> $$        acima de 1200 -> $$$
// Obs.: a moeda exibida depende da conta/região do Airbnb (R$, US$ ou €).
// O script mostra a moeda junto; confira antes de aplicar a faixa.

import { chromium } from 'playwright-core';
import fs from 'node:fs';

// Janela do casamento — força o Airbnb a mostrar um preço/noite.
const CHECK_IN = '2026-06-30';
const CHECK_OUT = '2026-07-02';

const TIER_LOW = 700;   // até 700  -> $
const TIER_MID = 1200;  // 700–1200 -> $$   / acima -> $$$

function tierFor(price) {
  if (price == null) return undefined;
  if (price <= TIER_LOW) return '$';
  if (price <= TIER_MID) return '$$';
  return '$$$';
}

// Mesma lista da UI (Tips.tsx). Mantenha em sincronia.
const NEARBY = [
  { name: 'Hotel Casa Coco', url: 'https://maps.app.goo.gl/RbbxR2FxtyStiCxr8' },
  { name: 'Albamar Apartaments', url: 'https://www.booking.com/hotel/es/albamar-apartaments.html' },
  { name: 'Can Terrats', url: 'https://www.booking.com/hotel/es/can-terrats.pt-br.html' },
  { name: 'Vila de luxo', url: 'https://www.airbnb.com.br/rooms/53821739' },
  { name: 'Casa de praia', url: 'https://www.airbnb.com.br/rooms/1062064961646738690' },
  { name: 'Villa Sta. Cristina', url: 'https://www.airbnb.com.br/rooms/25061452' },
  { name: 'Apartamento moderno', url: 'https://www.airbnb.com.br/rooms/1709659091895782539' },
  { name: 'Apartamento com terraço', url: 'https://www.airbnb.com.br/rooms/1708048142195235015' },
  { name: 'Apto Sta. Cristina', url: 'https://www.airbnb.com.br/rooms/11331129' },
  { name: 'Villa los Robles', url: 'https://www.roblesvillage.com' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/24515640' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/18651803' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/7690343' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/931962814468481823' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/32839203' },
  { name: 'Airbnb na região', url: 'https://www.airbnb.com.br/rooms/1713699011626743053' },
];

const TOSSA = [
  { name: 'Airbnb em Tossa de Mar', url: 'https://www.airbnb.com.br/rooms/1451077485558202124' },
  { name: 'Airbnb em Tossa de Mar', url: 'https://www.airbnb.com.br/rooms/47589152' },
  { name: 'Airbnb em Tossa de Mar', url: 'https://www.airbnb.com.br/rooms/19564762' },
  { name: 'Airbnb em Tossa de Mar', url: 'https://www.airbnb.com.br/rooms/726143062595865225' },
];

function findChromeExe() {
  const guesses = [
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  ].filter(Boolean);
  for (const g of guesses) { try { if (fs.existsSync(g)) return g; } catch {} }
  // pega a primeira pasta chromium-* em /opt/pw-browsers
  try {
    const base = '/opt/pw-browsers';
    const dir = fs.readdirSync(base).find((d) => d.startsWith('chromium-'));
    if (dir) {
      const p = `${base}/${dir}/chrome-linux/chrome`;
      if (fs.existsSync(p)) return p;
    }
  } catch {}
  return undefined; // deixa o playwright-core resolver o próprio download
}

function parseAmount(str) {
  // "R$ 2.345", "US$ 1,234.50", "€1.234" -> número
  const m = str.match(/(R\$|US\$|USD|EUR|€|\$)\s?([\d.,]+)/);
  if (!m) return null;
  const cur = m[1];
  let n = m[2];
  // normaliza separadores: remove separador de milhar, usa ponto decimal
  if (n.includes('.') && n.includes(',')) {
    n = n.lastIndexOf(',') > n.lastIndexOf('.') ? n.replace(/\./g, '').replace(',', '.') : n.replace(/,/g, '');
  } else if (n.includes(',')) {
    n = n.replace(/\./g, '').replace(',', '.');
  }
  const val = parseFloat(n);
  return Number.isFinite(val) ? { currency: cur, value: Math.round(val) } : null;
}

async function scrapeOne(ctx, item) {
  const out = { ...item };
  let url = item.url;
  const isAirbnb = url.includes('airbnb') && url.includes('/rooms/');
  if (isAirbnb) {
    url += (url.includes('?') ? '&' : '?') + `check_in=${CHECK_IN}&check_out=${CHECK_OUT}&adults=6`;
  }
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);
    const body = await page.evaluate(() => document.body.innerText).catch(() => '');

    const cap = body.match(/(\d+)\s*(h[óo]spedes|guests)/i);
    if (cap) out.guests = parseInt(cap[1], 10);
    const bed = body.match(/(\d+)\s*(quartos|bedrooms)/i);
    if (bed) out.bedrooms = parseInt(bed[1], 10);

    // preço/noite: procura padrões "X por noite / night / noche"
    let priceStr = null;
    const perNight = body.match(/(R\$|US\$|USD|EUR|€|\$)\s?[\d.,]+\s*(por noite|\/ noite|night|noche)/i);
    if (perNight) priceStr = perNight[0];
    if (!priceStr) {
      const any = body.match(/(R\$|US\$|USD|EUR|€|\$)\s?[\d.,]{3,}/);
      if (any) priceStr = any[0];
    }
    if (priceStr) {
      const parsed = parseAmount(priceStr);
      if (parsed) {
        out.price = parsed.value;
        out.currency = parsed.currency;
        out.tier = tierFor(parsed.value);
      }
    }
    out.ok = true;
  } catch (e) {
    out.ok = false;
    out.error = String(e).slice(0, 160);
  } finally {
    await page.close();
  }
  return out;
}

(async () => {
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const browser = await chromium.launch({
    executablePath: findChromeExe(),
    proxy: proxy ? { server: proxy } : undefined,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'],
  });
  const ctx = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    locale: 'pt-BR',
    viewport: { width: 1280, height: 900 },
  });

  const groups = { NEARBY_STAYS: NEARBY, TOSSA_STAYS: TOSSA };
  for (const [label, items] of Object.entries(groups)) {
    console.log(`\n// ===== ${label} =====`);
    for (const item of items) {
      const r = await scrapeOne(ctx, item);
      const guests = r.guests ? `guests: ${r.guests}, ` : '';
      const tier = r.tier ? `tier: "${r.tier}", ` : '';
      const priceNote = r.price ? `  // ${r.currency}${r.price}/noite${r.bedrooms ? `, ${r.bedrooms} quartos` : ''}` : r.ok ? '  // preço não encontrado' : `  // ERRO: ${r.error}`;
      console.log(`  { name: ${JSON.stringify(r.name)}, url: ${JSON.stringify(r.url)}, ${guests}${tier}},${priceNote}`);
    }
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
