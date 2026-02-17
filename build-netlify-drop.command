#!/bin/zsh
# Bygger statisk Next-export och skapar en färdig ZIP för Netlify Drop.
set -e
cd "$(dirname "$0")"

# Försök läsa in PATH från shell-profiler när script körs via Finder.
[ -f "$HOME/.zprofile" ] && source "$HOME/.zprofile"
[ -f "$HOME/.zshrc" ] && source "$HOME/.zshrc"

# Finder-sessioner saknar ibland Homebrew-path i PATH.
if ! command -v npm >/dev/null 2>&1; then
  if [ -x "/opt/homebrew/bin/npm" ]; then
    export PATH="/opt/homebrew/bin:$PATH"
  elif [ -x "/usr/local/bin/npm" ]; then
    export PATH="/usr/local/bin:$PATH"
  elif [ -x "/opt/homebrew/opt/node@22/bin/npm" ]; then
    export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
  fi
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Fel: npm hittades inte. Installera Node.js LTS först."
  echo "Tips: brew install node@22"
  exit 1
fi

echo "[1/3] Installerar beroenden vid behov..."
npm install

echo "[2/3] Bygger statisk site..."
npm run build:drop

echo "[3/3] Klart! Ladda upp filen netlify-drop.zip till Netlify Drop."
open .
