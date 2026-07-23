# scripts/scrape-stays.mjs

Lê capacidade (máx. de pessoas) e preço/noite de cada Airbnb/hotel da seção
**Onde ficar** e imprime um `Stay[]` pronto pra colar em
`src/components/Tips.tsx` (`NEARBY_STAYS` / `TOSSA_STAYS`).

## Por que não dá pra rodar em qualquer sessão

Airbnb e Booking bloqueiam scraping simples (403), e a política de rede de
algumas sessões do Claude Code na web **bloqueia a saída pra internet**. Rode
numa sessão/ambiente cuja política de rede permita acesso à web.

## Como rodar

```bash
npm install playwright-core     # se ainda não estiver instalado
node scripts/scrape-stays.mjs
```

Saída (exemplo):

```
// ===== NEARBY_STAYS =====
  { name: "Vila de luxo", url: "https://www.airbnb.com.br/rooms/53821739", guests: 11, tier: "$$$", },  // €1450/noite, 5 quartos
  ...
```

Copie os campos `guests` / `tier` para os objetos correspondentes em
`Tips.tsx`.

## Regra de preço (em R$, POR QUARTO = preço/noite ÷ nº de quartos)

| Faixa por quarto      | Marcador |
| --------------------- | -------- |
| até R$ 700            | `$`      |
| R$ 700 – 1200         | `$$`     |
| acima de R$ 1200      | `$$$`    |

O Airbnb `.br` com locale pt-BR já exibe em R$; o script mostra a moeda e o
cálculo por quarto no comentário — confira que veio R$ antes de aplicar a
faixa. Sem nº de quartos, o `tier` fica em branco (preencha manualmente).
