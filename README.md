# Rory First — clone local (MySiteCloner)

Site estático reconstruído a partir da captura de https://rizefirst.com.br/

## Rodar em localhost

Na pasta do projeto:

```bash
node server.js
```

Abra: http://127.0.0.1:4173

Alternativas: `npx --yes serve -l 4173` ou `python -m http.server 4173`

## Estrutura

- `index.html` — página única
- `css/site.css` — CSS capturado (inalterado visualmente)
- `css/fonts.css` + `fonts/` — Inter, DM Sans, Space Grotesk, Plus Jakarta Sans (offline)
- `js/` — app e helpers (tracking removido)
- `assets/` — imagens e prévias de vídeo da captura

## Limitações da captura

- Sem crawl multi-página (`pages/` não veio no ZIP)
- Só 8 prévias `.mp4` (demais estilos ficam na capa até existir o arquivo)
- Vídeos full (`/videos/estilos`, `/videos/muro`) e depoimentos não vieram — usam prévia local quando o nome bate
- Portfólio Google Drive / thumbs `feedbacks/thumb2x` não capturados
- Analytics (Clarity, Meta Pixel, gestorup) removidos de propósito