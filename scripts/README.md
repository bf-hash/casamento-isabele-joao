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

## Regra de preço (preço/noite)

| Faixa            | Marcador |
| ---------------- | -------- |
| até 700          | `$`      |
| 700 – 1200       | `$$`     |
| acima de 1200    | `$$$`    |

A moeda exibida depende da conta/região do Airbnb (R$, US$ ou €); o script
mostra a moeda no comentário — confira antes de aplicar a faixa.
