# Isabele & João — Site de Casamento

Site de casamento em Next.js, Tailwind e TypeScript. Pronto para personalizar com suas fotos, textos e design system.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

1. **Suba o projeto para o GitHub**
   - Crie um repositório novo (ex.: `casamento-isabele-joao`).
   - Na pasta do projeto:
     ```bash
     git init
     git add .
     git commit -m "Site casamento Isabele e João"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/casamento-isabele-joao.git
     git push -u origin main
     ```

2. **Conecte no Vercel**
   - Acesse [vercel.com](https://vercel.com) e faça login com GitHub.
   - **Add New…** → **Project** → **Import** o repositório do casamento.

3. **Configuração** (na tela de import)
   - **Framework Preset:** Next.js (já detectado).
   - **Root Directory:** deixe em branco (`./`).
   - **Build Command:** `npm run build` (padrão).
   - **Output Directory:** `.next` (padrão Next.js).
   - **Install Command:** `npm install` (padrão).
   - Não é preciso configurar **Environment Variables** neste projeto.

4. Clique em **Deploy**. O Vercel faz o build e publica.

5. **Domínio próprio** (opcional)  
   - No projeto no Vercel: **Settings** → **Domains** → adicione `isabeleejoao.com.br` (ou outro) e siga as instruções de DNS.

## O que personalizar

- **Data do casamento**: `src/components/Hero.tsx` → `WEDDING_DATE` e o texto "06 . 12 . 2026".
- **Foto do hero**: coloque em `public/fotos/hero.jpg` e altere `HERO_IMAGE` em `Hero.tsx` para `"/fotos/hero.jpg"`.
- **Texto de boas-vindas**: `src/components/Welcome.tsx`.
- **Programação**: `src/components/Program.tsx` → array `EVENTS` (data, local, horário, dress code, link do Google Maps).
- **Como chegar**: `src/components/HowToGet.tsx` (texto e link do Maps).
- **Dicas**: `src/components/Tips.tsx` → links para hospedagem, beleza, restaurantes, etc.
- **Presentes**: `src/components/Gifts.tsx` → URL da lista virtual.
- **RSVP**: `src/components/RSVP.tsx` → número do WhatsApp.

## Design system

- Cores e fontes: `tailwind.config.ts` e `src/app/globals.css`.
- Pasta `public/design-system/`: use para referências de cores, tipografia e fotos.
- Pasta `public/fotos/`: fotos do casamento (hero, galeria, etc.).

## Estrutura

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Countdown.tsx
│   ├── Footer.tsx
│   ├── Gifts.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowToGet.tsx
│   ├── Program.tsx
│   ├── RSVP.tsx
│   ├── Tips.tsx
│   └── Welcome.tsx
public/
├── design-system/
├── fotos/
```

Quando tiver fotos e o design system definido, podemos ajustar layout, paleta e tipografia.
