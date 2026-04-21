# Mapa Dev

Plataforma estatica em HTML, CSS e JavaScript para ajudar novos desenvolvedores a descobrirem qual area de tecnologia combina mais com o seu perfil e estudarem com uma trilha guiada.

## O que o projeto entrega

- quiz de afinidade para sugerir uma area inicial
- trilhas de estudo para frontend, backend, mobile, dados e DevOps
- materiais recomendados, praticas e exercicios interativos
- Dicionario IA para explicar termos de programacao em linguagem simples

## Como funciona

1. O usuario responde o quiz.
2. O site identifica a area com maior afinidade.
3. A plataforma de estudos mostra conteudos, projetos e exercicios da trilha escolhida.
4. O Dicionario IA ajuda iniciantes a entender termos tecnicos como API, deploy, SQL, Docker e React.

## Tecnologias

- HTML
- CSS
- JavaScript

## Como rodar localmente

No PowerShell:

```powershell
cd "Caminho que está os arquivos, exemplo: C:\Users\Caio\Mapadev"
python -m http.server 8000
```

Depois, abra:

```text
http://127.0.0.1:8000
```

## Estrutura

- `index.html`: landing page com o quiz
- `estudos.html`: plataforma de estudos personalizada com o Dicionario IA
- `styles.css`: identidade visual, responsividade e estilos do glossario
- `script.js`: logica do quiz e resultado
- `study.js`: trilhas, recursos, exercicios e inteligencia do Dicionario IA
