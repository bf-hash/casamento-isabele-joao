# Guia: Como criar seu próprio site de casamento

Passo a passo do zero — desde criar conta no GitHub até o site no ar, usando o Claude Code para fazer o trabalho pesado. O exemplo é o site **Isabele & João** (este repositório), feito em Next.js + Tailwind + TypeScript.

> **Quanto tempo leva?** Cerca de 1–2 horas para chegar num site publicado, mais o tempo de ir refinando o design e os textos.
>
> **Quanto custa?** GitHub, Vercel e Claude.ai têm planos gratuitos que dão conta. O Claude Code na web exige um plano pago do Claude (Pro ou superior). Domínio próprio (ex.: `seusite.com.br`) custa ~R$ 40/ano à parte, mas é opcional — o Vercel já entrega um endereço grátis tipo `seusite.vercel.app`.

---

## Visão geral do que vai acontecer

1. Criar contas em **GitHub**, **Vercel** e **Claude.ai**
2. Criar um **repositório vazio** no GitHub para o site
3. Abrir o **Claude Code na web**, apontando para esse repositório
4. Dar ao Claude **referências visuais** (prints de sites que você gosta, paleta, fotos)
5. Pedir para o Claude **montar o site** com a estrutura que você quer
6. Conectar o repositório à **Vercel** e publicar
7. Iterar: pedir ajustes ao Claude → ele faz commit → Vercel republica automaticamente

A partir do passo 7, o ciclo vira: "Claude, muda a cor do botão para verde-oliva" → 30 segundos depois o site no ar já está atualizado.

---

## Passo 1 — Criar conta no GitHub

O GitHub é onde o **código** do site fica guardado. É como um Google Drive de código, e é gratuito.

1. Acesse [github.com](https://github.com) → **Sign up**.
2. Use um e-mail que você consulte (vai precisar confirmar).
3. Escolha um nome de usuário (ex.: `mariasilva`). Esse nome vai aparecer na URL dos seus repositórios.
4. Plano **Free** é suficiente.
5. Confirme o e-mail.

**Pronto.** Não precisa instalar Git nem nada no seu computador — o Claude Code na web cuida disso.

---

## Passo 2 — Criar conta no Claude.ai e ativar o Claude Code

O Claude Code é o assistente que vai **escrever o código** do site para você.

1. Acesse [claude.ai](https://claude.ai) → **Sign up**.
2. Faça login com a mesma conta de e-mail (ou Google).
3. Você precisa de um plano pago (**Pro** já serve) para usar o Claude Code na web. Veja em [claude.com/pricing](https://claude.com/pricing).
4. Acesse [claude.ai/code](https://claude.ai/code) — essa é a interface web do Claude Code.
5. Conecte sua conta do **GitHub** quando o Claude pedir (botão "Connect GitHub"). Isso autoriza o Claude a ler e escrever nos seus repositórios.

Documentação oficial: [code.claude.com/docs/en/claude-code-on-the-web](https://code.claude.com/docs/en/claude-code-on-the-web).

---

## Passo 3 — Criar o repositório no GitHub

Um "repositório" é a pasta onde o código vai morar.

1. No GitHub, clique no **`+`** no canto superior direito → **New repository**.
2. **Repository name:** algo como `casamento-maria-pedro`.
3. **Description (opcional):** "Site do nosso casamento".
4. Deixe como **Public** (mais simples) ou **Private** se preferir.
5. Marque **Add a README file** (cria o repositório com 1 arquivo, evita problemas).
6. **Create repository**.

Você terá uma URL tipo `https://github.com/mariasilva/casamento-maria-pedro`. **Guarde essa URL.**

---

## Passo 4 — Abrir o projeto no Claude Code

1. Vá em [claude.ai/code](https://claude.ai/code).
2. Clique em **New session** (ou equivalente) e selecione o repositório `casamento-maria-pedro` que você acabou de criar.
3. O Claude clona o repositório num ambiente temporário na nuvem — você não precisa instalar nada localmente.

> **Importante:** O ambiente é **efêmero**. Tudo que o Claude faz precisa ser **commitado e empurrado** para o GitHub, senão se perde quando a sessão fechar. O Claude sabe disso e faz por padrão.

---

## Passo 5 — Reunir as referências visuais

Antes de pedir para o Claude montar o site, junte material. Quanto melhor a referência, melhor o resultado.

**O que reunir:**

- **2–5 sites de casamento que você gosta.** Tira print da página inteira (no Mac: `Cmd+Shift+4`, no Windows: ferramenta de captura). Salva como `referencia-1.png`, `referencia-2.png`, etc.
- **Paleta de cores.** Pode ser um print do Pinterest, um mood board (PDF ou imagem), ou só 3-4 cores em hex (ex.: `#7A8B5C` verde-oliva, `#F4E9D8` bege).
- **Fontes/tipografia.** Se você viu uma fonte legal em algum lugar, anota o nome (ex.: "Cormorant Garamond" para títulos).
- **Fotos do casal.** Pelo menos 1 foto boa para o "Hero" (a primeira tela do site). De preferência horizontal e em alta resolução.
- **Conteúdo:** data, local, programação, link da lista de presentes, WhatsApp para RSVP, dicas de hotel, etc.

**Como entregar essas referências ao Claude:**

Na interface do Claude Code na web, você pode **arrastar arquivos** direto para a conversa, ou colar imagens. Coloque tudo numa mensagem só, descrevendo:

> "Quero um site de casamento parecido com a vibe destas referências (em anexo). Paleta verde-oliva e bege. Fontes serifadas para títulos. A foto em anexo é a do hero. Bora começar?"

> **Dica:** veja como ficou neste repositório — tem uma pasta `public/design-system/` com referências de menu e um mood board em PDF (`Costa Brava Wedding Mood Board.pdf`). Funcionou bem deixar essas referências dentro do próprio projeto para o Claude consultar.

---

## Passo 6 — Pedir para o Claude montar o site

Com as referências em mãos, abra uma sessão no Claude Code e mande um pedido inicial assim:

> "Quero criar um site de casamento estático, em **Next.js + Tailwind + TypeScript**, pronto para hospedar na Vercel. Use as referências em anexo (prints e mood board) para a estética. As seções devem ser:
>
> 1. **Hero** com foto, nomes do casal e data
> 2. **Boas-vindas** (texto curto)
> 3. **Countdown** para a data
> 4. **Programação** (cerimônia, recepção etc., com data, local, dress code, link do Maps)
> 5. **Como chegar**
> 6. **Dicas** (hotel, beleza, restaurantes)
> 7. **Presentes** (link da lista virtual)
> 8. **RSVP** (botão de WhatsApp)
> 9. **Footer**
>
> Use tipografia serifada nos títulos, paleta verde-oliva + bege, e visual minimalista. Crie a estrutura, commita e empurra para o `main`."

O Claude vai:
- Inicializar o projeto Next.js
- Criar os componentes em `src/components/`
- Configurar Tailwind
- Fazer o commit e o push para o GitHub

**Você vai ver mudanças aparecendo no repositório do GitHub conforme o Claude trabalha.**

> **Compare com este repositório:** a estrutura final ficou em `src/components/Hero.tsx`, `Welcome.tsx`, `Countdown.tsx`, `Program.tsx`, etc. Cada seção é um componente isolado, fácil de ajustar depois.

---

## Passo 7 — Criar conta na Vercel e publicar o site

A **Vercel** é onde o site fica **no ar**. Conecta direto no GitHub: cada vez que o Claude faz um commit, a Vercel rebuilda e publica em segundos. Plano gratuito (Hobby) é suficiente.

1. Acesse [vercel.com](https://vercel.com) → **Sign Up** com sua conta do **GitHub**.
2. No painel da Vercel: **Add New…** → **Project**.
3. Em **Import Git Repository**, escolha `casamento-maria-pedro`. Se não aparecer, clique em **Adjust GitHub App Permissions** e dê acesso ao repositório.
4. **Configurar Project** (a Vercel detecta tudo sozinha porque é Next.js):
   - **Framework Preset:** Next.js (auto-detectado)
   - **Root Directory:** `./` (deixa em branco)
   - **Build Command:** `npm run build` (padrão)
   - **Output Directory:** `.next` (padrão)
   - **Environment Variables:** nenhuma necessária
5. Clique em **Deploy**. Em ~1 minuto o site está no ar.
6. URL final: algo como `casamento-maria-pedro.vercel.app`. **Compartilha com a família.**

**Domínio próprio (opcional):**
- Compre o domínio (ex.: `mariaepedro.com.br`) em Registro.br, GoDaddy etc.
- Na Vercel: **Settings → Domains → Add Domain**. Siga as instruções de DNS.

---

## Passo 8 — Iterar com o Claude Code

A partir daqui, é só conversar com o Claude. Cada commit que ele faz dispara um deploy automático na Vercel.

**Exemplos de pedidos que funcionam bem:**

- "Troca a cor de fundo do Hero para `#F4E9D8`."
- "A data do casamento é 12 de dezembro de 2026 — atualiza onde precisar."
- "Adiciona uma seção de galeria com 6 fotos. Coloca as fotos em `public/fotos/galeria/`."
- "O link do PIX da lista de presentes é `https://...`. Adiciona um botão grande em `Gifts.tsx`."
- "A fonte do Hero está pequena no celular — aumenta no mobile."
- "Quero um countdown mais bonito, com cards separados para dias/horas/minutos."

**Dicas para pedir bem:**

- **Uma coisa por vez.** Em vez de "muda tudo", peça mudanças pontuais.
- **Mostre, não conte.** Print de outro site, link de imagem, paleta em hex — sempre melhor que descrever em palavras.
- **Veja o resultado.** Após cada deploy da Vercel (~1 min), abre o site e confere. Se não ficou bom, fala: "Não gostei do espaçamento do Hero, ficou muito apertado, aumenta o padding vertical".
- **Fotos reais transformam.** Um site com Lorem Ipsum e foto genérica nunca vai parecer bom. Coloca as fotos do casal cedo.

---

## Estrutura do projeto (referência rápida)

Este repositório (`bf-hash/casamento-isabele-joao`) tem mais ou menos isso:

```
casamento-isabele-joao/
├── public/
│   ├── design-system/      ← referências visuais (moodboard, menu, paleta)
│   └── fotos/              ← fotos do casal e locais
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx        ← monta a página colando os componentes
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx        ← foto + nomes + data
│       ├── Welcome.tsx
│       ├── Countdown.tsx
│       ├── Program.tsx     ← cerimônia, recepção, dress code
│       ├── HowToGet.tsx
│       ├── Tips.tsx
│       ├── Gifts.tsx       ← lista de presentes
│       ├── RSVP.tsx        ← botão de WhatsApp
│       └── Footer.tsx
├── package.json
├── tailwind.config.ts      ← cores e fontes do design system
└── next.config.js
```

**Para sua amiga:** ela não precisa entender esse código. Basta pedir ao Claude para fazer e ele organiza tudo igualzinho.

---

## Problemas comuns

**"O Claude não encontra meu repositório."**
→ Vá em [github.com/settings/installations](https://github.com/settings/installations), clique em "Claude" (ou no app autorizado), e adicione o repositório à lista permitida.

**"A Vercel deu erro no build."**
→ Mande o log de erro para o Claude: "A Vercel deu esse erro no build, conserta". Geralmente é uma dependência faltando.

**"Mudei algo no Claude mas não aparece no site."**
→ Confirma que o Claude **commitou e empurrou** (veja em github.com/seu-repo). Se sim, espera 1 min e dá refresh com `Cmd+Shift+R` (limpa cache).

**"Quero um endereço sem o `.vercel.app`."**
→ Compra um domínio e configura em **Vercel → Settings → Domains**.

---

## Checklist final

- [ ] Conta GitHub criada
- [ ] Conta Claude.ai com Pro ativado
- [ ] Conta Vercel criada e conectada ao GitHub
- [ ] Repositório novo criado no GitHub
- [ ] Referências visuais reunidas (prints, paleta, fotos)
- [ ] Primeira versão pedida ao Claude e commitada
- [ ] Projeto importado na Vercel e site no ar
- [ ] URL compartilhada com o casal para feedback
- [ ] Iterações de ajuste com o Claude
- [ ] (Opcional) Domínio próprio configurado

Boa sorte, e bom casamento!
