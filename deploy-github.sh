#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "→ Inicializando git..."
git init
git add .
git status

echo ""
echo "→ Fazendo commit..."
git commit -m "Site casamento Isabele e João"

echo ""
echo "→ Configurando branch main..."
git branch -M main

echo ""
echo "→ Adicionando remote e fazendo push..."
git remote add origin https://github.com/bf-hash/casamento-isabele-joao.git 2>/dev/null || git remote set-url origin https://github.com/bf-hash/casamento-isabele-joao.git
git push -u origin main

echo ""
echo "✅ Pronto! Código enviado para https://github.com/bf-hash/casamento-isabele-joao"
echo "   Agora é só conectar o repo no Vercel e fazer o deploy."
