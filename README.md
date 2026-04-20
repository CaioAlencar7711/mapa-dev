# Mapa Dev

Plataforma estática em HTML, CSS e JavaScript para ajudar novos desenvolvedores a descobrirem qual área de tecnologia combina mais com o seu perfil.

O fluxo do projeto é simples:

- o usuário responde um quiz de afinidade
- recebe uma área recomendada, como frontend, backend, mobile, dados ou DevOps
- segue para uma página de estudos com conteúdos, vídeos, materiais e práticas iniciais

## Tecnologias

- HTML
- CSS
- JavaScript

## Como rodar localmente

No PowerShell:

```powershell
cd "C:\Users\caios\OneDrive\666"
python -m http.server 8000
```

Depois, abra:

```text
http://127.0.0.1:8000
```

## Estrutura

- `index.html`: landing page com o quiz
- `estudos.html`: plataforma de estudos personalizada
- `styles.css`: identidade visual e responsividade
- `script.js`: lógica do quiz e resultado
- `study.js`: renderização das trilhas e conteúdos por área
