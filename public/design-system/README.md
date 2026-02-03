# Design System — Isabele & João

**Costa Brava Wedding Mood Board — Verão Mediterrâneo | Natural & Orgânico**

## Inspiração

- **Mood:** Mediterrâneo autêntico • Natural & orgânico • Romântico • Quente & vibrante • Garden party • Descontraído elegante • Sunset vibes • Flora local • Cores saturadas • Aromático • Costa Brava
- **Direção:** Base mediterrânea com acentos de rosa, coral e lavanda. Tons quentes (amarelos, laranjas) + românticos (rosas, pêssegos) + frescos (lavanda, verde sálvia).

## Paleta de cores (Tailwind)

| Token | Hex | Pantone | Uso |
|-------|-----|---------|-----|
| `marfim` | `#FEFAE0` | 7499 C | Fundo principal |
| `bege-areia` | `#E8C5A5` | 719 C | Backgrounds alternados |
| `caramelo` | `#D4A574` | 728 C | Neutros quentes |
| `amarelo-sol` | `#F5C842` | 123 C | Destaques vibrantes |
| `laranja-terracota` | `#FF8C42` | 1495 C | Acentos quentes |
| `coral` | `#FF6B6B` | 178 C | Acentos vibrantes |
| `terracotta` | `#D4705B` | 7598 C | Botões, links |
| `rosa-garden` | `#E8A0A0` | 693 C | Toques românticos |
| `pessego` | `#FFD4B8` | 162 C | Suaves |
| `lavanda` | `#B4A7D6` | 2567 C | Frescor |
| `verde-oliva` | `#7A9B76` | 5625 C | RSVP, footer (natural) |
| `verde-salvia` | `#A8B89F` | 5595 C | Bordas, detalhes |
| `charcoal` | `#2C2C2C` | — | Texto, estrutura |

### Aliases (compatibilidade)

- `cream` → marfim
- `sand` → bege-areia
- `sage` → verde-salvia
- `olive` → verde-oliva

## Uso no site

- **Fundo principal:** `bg-marfim`
- **Seções alternadas:** `bg-bege-areia/40`
- **Botões primários:** `bg-terracotta` com `hover:bg-coral`
- **Botões secundários (Dicas):** `border-terracotta/50` com `hover:bg-terracotta`
- **RSVP e Footer:** `bg-verde-oliva` (natural mediterrâneo)
- **Links:** `text-terracotta` com `hover:underline`
- **Caixas de destaque:** `border-verde-salvia/40`, `bg-marfim/90`

## Tipografia (estilo convite elegante)

- **Display:** Playfair Display (400–700) — nomes em maiúsculas, títulos de seção
- **Script:** Italianno — apenas o “&” entre os nomes
- **Serif:** Cormorant Garamond (300–400) — corpo de texto, labels

Hierarquia: nomes grandes em display + script para “&”; títulos em display maiúsculas com tracking; corpo em serif light; muito espaço entre linhas.

## Ícones hand-drawn

Estilo inspirado no menu de referência (`menu-reference.jpeg`): outline-based, sketchy, monocromático (navy #192956 em fundo claro).

- **Uso:** ícones decorativos nas seções (Programação, Como chegar, Onde ficar, Dicas, Presentes, RSVP)
- **Componente:** `src/components/Icons.tsx`
- **Ícones:** Calendar, MapPin, Hotel, Flower, Gift, Message, Plane, Wine, Boat, Lemon
- **Cor:** `text-navy/80` em seções claras; `text-marfim/90` em seção RSVP (verde-oliva)

## Flores mediterrâneas (referência decoração)

Dálias, rosas garden, lavanda, gerberas, ranúnculos, bougainvillea, oleandro, cosmos, zínias, craspédia, statice, alecrim florido, etc.

## Referências

- **PDF:** Costa Brava Wedding Mood Board.pdf
- **Menu:** `menu-reference.jpeg` — ícones hand-drawn, navy em cream
- **Sites:** Maria Carla e Otávio, Dane Amanda, Natane e Igor, Ana e Paul
