#!/usr/bin/env bash
# ============================================================
# One-command push of this project to your GitHub account.
# Usage:  GITHUB_TOKEN=ghp_xxxx ./push-to-github.sh
# ============================================================
set -e

TOKEN="${GITHUB_TOKEN:?Usage: GITHUB_TOKEN=ghp_xxxx ./push-to-github.sh}"
OWNER="stevenmukama"
REPO="landing-page"

echo "→ Creating repo ${OWNER}/${REPO} on GitHub (if it does not exist)..."
HTTP_CODE=$(curl -s -o /tmp/gh-create.json -w "%{http_code}" \
  -X POST https://api.github.com/user/repos \
  -H "Authorization: token ${TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -d "{\"name\":\"${REPO}\",\"description\":\"Lumina — a modern, fully responsive SaaS landing page built with pure HTML, CSS and JavaScript\",\"private\":false}")

if [ "$HTTP_CODE" = "201" ]; then
  echo "✓ Repository created: https://github.com/${OWNER}/${REPO}"
elif [ "$HTTP_CODE" = "422" ]; then
  echo "✓ Repository already exists — reusing it."
else
  echo "✗ Could not create repository (HTTP ${HTTP_CODE})."
  cat /tmp/gh-create.json
  exit 1
fi

echo "→ Pushing code..."
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/${OWNER}/${REPO}.git"
git push -u origin main

# Strip the token from the stored remote URL afterwards (good hygiene)
git remote set-url origin "https://github.com/${OWNER}/${REPO}.git"

echo ""
echo "🎉 Done! Your landing page is live at:"
echo "   https://github.com/${OWNER}/${REPO}"
echo ""
echo "💡 Optional — publish it as a website (GitHub Pages):"
echo "   Settings → Pages → Source: 'main' branch, '/' root → Save"
echo "   Site will appear at: https://${OWNER}.github.io/${REPO}/"
