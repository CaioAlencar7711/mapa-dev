const questions = [
  {
    question: "Qual tipo de projeto mais desperta sua curiosidade?",
    options: [
      {
        title: "Criar telas bonitas e interativas",
        description: "Interfaces, animações e experiência de uso me chamam mais atenção.",
        scores: { frontend: 3, mobile: 1 },
      },
      {
        title: "Montar a lógica por trás do sistema",
        description: "Quero lidar com APIs, regras de negócio e banco de dados.",
        scores: { backend: 3, devops: 1 },
      },
      {
        title: "Desenvolver apps para celular",
        description: "Gosto da ideia de criar produtos que ficam na mão do usuário.",
        scores: { mobile: 3, frontend: 1 },
      },
      {
        title: "Analisar dados e encontrar padrões",
        description: "Prefiro descobrir insights e transformar informação em decisão.",
        scores: { data: 3, backend: 1 },
      },
      {
        title: "Automatizar ambientes e entregas",
        description: "Infraestrutura, deploy e confiabilidade parecem bem interessantes.",
        scores: { devops: 3, backend: 1 },
      },
    ],
  },
  {
    question: "Quando você aprende algo novo, o que mais te anima?",
    options: [
      {
        title: "Ver a mudança acontecer na tela",
        description: "Feedback visual rápido me motiva bastante.",
        scores: { frontend: 3, mobile: 1 },
      },
      {
        title: "Resolver problemas de lógica e arquitetura",
        description: "Prefiro entender como tudo se conecta por baixo.",
        scores: { backend: 3, devops: 1 },
      },
      {
        title: "Pensar em recursos do dispositivo",
        description: "Câmera, notificações, GPS e gestos me parecem legais.",
        scores: { mobile: 3, frontend: 1 },
      },
      {
        title: "Testar hipóteses com números",
        description: "Gosto de medir, comparar e validar com dados.",
        scores: { data: 3, backend: 1 },
      },
      {
        title: "Fazer tudo rodar com estabilidade",
        description: "Eu curto organização, processos e sistemas confiáveis.",
        scores: { devops: 3, backend: 1 },
      },
    ],
  },
  {
    question: "Qual desafio parece mais empolgante no dia a dia?",
    options: [
      {
        title: "Transformar um layout em uma experiência real",
        description: "Quero pegar uma ideia visual e colocá-la em produção.",
        scores: { frontend: 3 },
      },
      {
        title: "Escalar um sistema para muitos usuários",
        description: "Desempenho, segurança e modelagem me interessam.",
        scores: { backend: 3, devops: 1 },
      },
      {
        title: "Criar algo útil em qualquer lugar",
        description: "Quero pensar em apps leves, rápidos e práticos.",
        scores: { mobile: 3, frontend: 1 },
      },
      {
        title: "Organizar dados e tirar conclusões",
        description: "Quero responder perguntas com análise e experimentos.",
        scores: { data: 3 },
      },
      {
        title: "Automatizar tudo o que é repetitivo",
        description: "Pipelines, scripts e observabilidade soam atraentes.",
        scores: { devops: 3, backend: 1 },
      },
    ],
  },
  {
    question: "Qual assunto você estudaria por conta própria primeiro?",
    options: [
      {
        title: "HTML, CSS, JavaScript e acessibilidade",
        description: "Quero aprender como a web fica bonita, responsiva e clara.",
        scores: { frontend: 3 },
      },
      {
        title: "Node.js, APIs, autenticação e banco de dados",
        description: "O lado estrutural e de negócio da aplicação me atrai.",
        scores: { backend: 3 },
      },
      {
        title: "React Native, Flutter ou Kotlin",
        description: "Tenho curiosidade sobre desenvolvimento orientado a apps.",
        scores: { mobile: 3 },
      },
      {
        title: "Python, SQL, estatística e dashboards",
        description: "Curto a ideia de explorar informações e gerar valor com elas.",
        scores: { data: 3 },
      },
      {
        title: "Linux, Docker, CI/CD e cloud",
        description: "Quero aprender como os sistemas são publicados e mantidos.",
        scores: { devops: 3 },
      },
    ],
  },
  {
    question: "Em um time de produto, onde você imagina que contribuiria melhor?",
    options: [
      {
        title: "Na interface e na experiência do usuário",
        description: "Penso em usabilidade, interação e consistência visual.",
        scores: { frontend: 3, mobile: 1 },
      },
      {
        title: "Na regra de negócio e integrações",
        description: "Gostaria de cuidar do que acontece do lado do servidor.",
        scores: { backend: 3 },
      },
      {
        title: "Em funcionalidades focadas no celular",
        description: "Quero trabalhar com jornada mobile e recursos nativos.",
        scores: { mobile: 3 },
      },
      {
        title: "Na leitura de métricas e experimentos",
        description: "Gostaria de medir comportamento e orientar decisões.",
        scores: { data: 3 },
      },
      {
        title: "Na esteira de entrega e confiabilidade",
        description: "Ajudaria o time a publicar melhor e monitorar o ambiente.",
        scores: { devops: 3 },
      },
    ],
  },
  {
    question: "Qual resultado final te deixaria mais orgulhoso?",
    options: [
      {
        title: "Um produto bonito, rápido e agradável de usar",
        description: "Quero causar impacto direto na percepção do usuário.",
        scores: { frontend: 3 },
      },
      {
        title: "Uma API robusta e pronta para crescer",
        description: "Gosto da ideia de construir uma base forte para o produto.",
        scores: { backend: 3 },
      },
      {
        title: "Um app que as pessoas usem no dia a dia",
        description: "Criar experiências móveis relevantes me anima bastante.",
        scores: { mobile: 3 },
      },
      {
        title: "Um painel que ajude empresas a tomar decisões",
        description: "Quero transformar dados em clareza e estratégia.",
        scores: { data: 3 },
      },
      {
        title: "Um sistema com deploy seguro e monitorado",
        description: "Prefiro garantir que tudo funcione de forma confiável.",
        scores: { devops: 3 },
      },
    ],
  },
];

const careers = {
  frontend: {
    label: "Frontend Developer",
    tone: "Interfaces, experiência visual e contato direto com o usuário.",
    summary:
      "Seu perfil aponta para a construção da camada visual dos produtos. Você tende a se motivar com feedback rápido, capricho na experiência e componentes bem pensados.",
    reasons: [
      "Você demonstra interesse por interfaces, interação e impacto visual imediato.",
      "Há afinidade com tecnologias de navegadores, responsividade e experiência de uso.",
      "Seu estilo combina com iteração rápida, testes visuais e melhoria contínua da interface.",
    ],
    firstSteps: [
      "Aprender HTML semântico, CSS responsivo e fundamentos de JavaScript.",
      "Reproduzir 2 ou 3 páginas de referência para treinar layout e componentização.",
      "Estudar Git, consumo de APIs e um framework moderno como React.",
    ],
    roadmap: [
      {
        phase: "Fase 1",
        title: "Base da web",
        description:
          "Entenda a estrutura de páginas, responsividade, acessibilidade e comportamento básico com JavaScript.",
        tags: ["HTML", "CSS", "JavaScript", "Git"],
      },
      {
        phase: "Fase 2",
        title: "Interfaces modernas",
        description:
          "Aprenda componentização, estado, roteamento e consumo de APIs em um framework como React.",
        tags: ["React", "Componentes", "APIs", "Estado"],
      },
      {
        phase: "Fase 3",
        title: "Projetos de portfólio",
        description:
          "Crie landing pages, dashboards e uma aplicação completa integrada a backend.",
        tags: ["Portfólio", "Dashboard", "Deploy", "UX"],
      },
      {
        phase: "Fase 4",
        title: "Nível profissional",
        description:
          "Aprofunde acessibilidade, testes, performance, design systems e colaboração com times de produto.",
        tags: ["Testes", "Performance", "A11y", "Design System"],
      },
    ],
  },
  backend: {
    label: "Backend Developer",
    tone: "Lógica, APIs, regras de negócio e arquitetura de sistemas.",
    summary:
      "Seu perfil se encaixa no lado estrutural do software. Você parece gostar de resolver problemas profundos, organizar dados e sustentar o produto com uma base confiável.",
    reasons: [
      "Você demonstra interesse por arquitetura, banco de dados e regras de negócio.",
      "Existe afinidade com desafios de desempenho, segurança e integração entre sistemas.",
      "Seu jeito de aprender combina com modelagem, lógica e raciocínio estruturado.",
    ],
    firstSteps: [
      "Estudar lógica de programação e uma linguagem de backend, como JavaScript ou Python.",
      "Aprender APIs REST, autenticação, banco de dados relacional e Git.",
      "Construir uma API simples com cadastro, login e persistência em banco.",
    ],
    roadmap: [
      {
        phase: "Fase 1",
        title: "Fundamentos de programação",
        description:
          "Fortaleça lógica, estruturas de dados, orientação a objetos e boas práticas.",
        tags: ["Lógica", "Node.js ou Python", "Git", "POO"],
      },
      {
        phase: "Fase 2",
        title: "APIs e banco de dados",
        description:
          "Aprenda a construir rotas, validar dados, autenticar usuários e modelar tabelas.",
        tags: ["APIs", "SQL", "Autenticação", "ORM"],
      },
      {
        phase: "Fase 3",
        title: "Sistemas reais",
        description:
          "Crie backend para e-commerce, agenda ou sistema financeiro com integrações externas.",
        tags: ["Arquitetura", "Integrações", "Testes", "Documentação"],
      },
      {
        phase: "Fase 4",
        title: "Escala e qualidade",
        description:
          "Estude filas, cache, segurança, observabilidade e padrões de arquitetura.",
        tags: ["Cache", "Filas", "Segurança", "Observabilidade"],
      },
    ],
  },
  mobile: {
    label: "Mobile Developer",
    tone: "Aplicativos, experiência em movimento e recursos nativos.",
    summary:
      "Seu resultado indica afinidade com produtos usados no bolso do usuário. Você tende a valorizar praticidade, fluidez e experiências que acompanham a rotina das pessoas.",
    reasons: [
      "Você se interessa por apps, interações móveis e recursos como notificações ou câmera.",
      "Há afinidade com experiência do usuário e preocupação com desempenho em dispositivos.",
      "Seu perfil combina com ciclos de entrega focados em usabilidade e contexto real de uso.",
    ],
    firstSteps: [
      "Escolher uma trilha inicial: React Native ou Flutter para acelerar a entrada.",
      "Aprender fundamentos de interfaces, navegação, consumo de APIs e armazenamento local.",
      "Criar um app simples de tarefas, clima ou rotina com publicação de build.",
    ],
    roadmap: [
      {
        phase: "Fase 1",
        title: "Base do ecossistema mobile",
        description:
          "Aprenda componentes, navegação, estado e como apps consomem APIs e dados locais.",
        tags: ["React Native ou Flutter", "UI", "APIs", "Estado"],
      },
      {
        phase: "Fase 2",
        title: "Recursos do dispositivo",
        description:
          "Explore câmera, notificações, geolocalização, permissões e publicação de apps.",
        tags: ["Câmera", "GPS", "Notificações", "Build"],
      },
      {
        phase: "Fase 3",
        title: "Projetos completos",
        description:
          "Monte apps com login, sincronização, offline básico e preocupação com performance.",
        tags: ["Login", "Offline", "Performance", "UX"],
      },
      {
        phase: "Fase 4",
        title: "Maturidade técnica",
        description:
          "Aprofunde arquitetura, testes, monitoramento e integração com plataformas nativas.",
        tags: ["Arquitetura", "Testes", "Publicação", "Nativo"],
      },
    ],
  },
  data: {
    label: "Data Developer",
    tone: "Análise, exploração de dados e tomada de decisão baseada em evidências.",
    summary:
      "Seu perfil sugere afinidade com investigação, padrões e interpretação de informações. Você tende a gostar de perguntas abertas que pedem análise cuidadosa.",
    reasons: [
      "Você demonstra curiosidade por métricas, padrões e hipóteses.",
      "Há afinidade com Python, SQL, dashboards e contexto analítico.",
      "Seu jeito de resolver problemas combina com leitura, medição e experimentação.",
    ],
    firstSteps: [
      "Aprender Python, SQL e fundamentos de estatística descritiva.",
      "Praticar limpeza de dados, consultas e visualização com datasets públicos.",
      "Montar um dashboard ou análise exploratória para publicar no portfólio.",
    ],
    roadmap: [
      {
        phase: "Fase 1",
        title: "Fundamentos analíticos",
        description:
          "Construa base em Python, SQL, tabelas, joins, limpeza e estatística inicial.",
        tags: ["Python", "SQL", "Pandas", "Estatística"],
      },
      {
        phase: "Fase 2",
        title: "Análise e visualização",
        description:
          "Aprenda a criar dashboards, responder perguntas de negócio e comunicar insights.",
        tags: ["Dashboards", "BI", "Análise", "Storytelling"],
      },
      {
        phase: "Fase 3",
        title: "Projetos com impacto",
        description:
          "Trabalhe com datasets reais e crie estudos de churn, vendas, cohort ou comportamento.",
        tags: ["Projetos", "Métricas", "Portfólio", "Negócio"],
      },
      {
        phase: "Fase 4",
        title: "Especialização",
        description:
          "Escolha avançar para engenharia de dados, ciência de dados ou IA aplicada.",
        tags: ["Engenharia de Dados", "ML", "ETL", "Modelagem"],
      },
    ],
  },
  devops: {
    label: "DevOps Engineer",
    tone: "Automação, infraestrutura, deploy e confiabilidade operacional.",
    summary:
      "Seu resultado mostra afinidade com organização de ambientes, processos de entrega e estabilidade. Você tende a gostar do pano de fundo que faz o software funcionar bem em produção.",
    reasons: [
      "Você se interessa por automação, pipelines e confiabilidade de sistemas.",
      "Existe afinidade com infraestrutura, cloud, containers e observabilidade.",
      "Seu perfil combina com melhoria de processos e visão sistêmica do produto.",
    ],
    firstSteps: [
      "Aprender Linux, redes básicas, Git e fundamentos de linha de comando.",
      "Estudar Docker, CI/CD e deploy de uma aplicação simples na nuvem.",
      "Montar um pipeline com testes automatizados e monitoramento inicial.",
    ],
    roadmap: [
      {
        phase: "Fase 1",
        title: "Base de sistemas",
        description:
          "Fortaleça Linux, shell, redes, permissões, processos e fundamentos de infraestrutura.",
        tags: ["Linux", "Shell", "Redes", "Git"],
      },
      {
        phase: "Fase 2",
        title: "Containers e deploy",
        description:
          "Aprenda Docker, registry, servidores, CI/CD e cloud para publicação de apps.",
        tags: ["Docker", "CI/CD", "Cloud", "Deploy"],
      },
      {
        phase: "Fase 3",
        title: "Observabilidade e automação",
        description:
          "Crie pipelines, scripts, alertas, logs e monitoramento para reduzir falhas.",
        tags: ["Monitoramento", "Logs", "Automação", "Pipelines"],
      },
      {
        phase: "Fase 4",
        title: "Infra moderna",
        description:
          "Aprofunde Kubernetes, IaC, segurança e boas práticas de confiabilidade.",
        tags: ["Kubernetes", "Terraform", "Segurança", "SRE"],
      },
    ],
  },
};

const state = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
};

const questionCounter = document.getElementById("questionCounter");
const questionText = document.getElementById("questionText");
const optionsList = document.getElementById("optionsList");
const progressFill = document.getElementById("progressFill");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const resultSection = document.getElementById("resultSection");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultHero = document.getElementById("resultHero");
const resultReasons = document.getElementById("resultReasons");
const resultFirstSteps = document.getElementById("resultFirstSteps");
const roadmapTimeline = document.getElementById("roadmapTimeline");
const restartButton = document.getElementById("restartButton");
const studyLink = document.getElementById("studyLink");

function renderQuestion() {
  const current = questions[state.currentQuestion];
  const selectedIndex = state.answers[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;

  questionCounter.textContent = `Pergunta ${state.currentQuestion + 1} de ${questions.length}`;
  questionText.textContent = current.question;
  progressFill.style.width = `${progress}%`;
  prevButton.disabled = state.currentQuestion === 0;
  nextButton.disabled = selectedIndex === null;
  nextButton.textContent =
    state.currentQuestion === questions.length - 1 ? "Ver resultado" : "Próxima";

  optionsList.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-button${selectedIndex === index ? " selected" : ""}`;
    button.setAttribute("aria-pressed", String(selectedIndex === index));
    button.innerHTML = `
      <span class="option-title">${option.title}</span>
      <span class="option-copy">${option.description}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[state.currentQuestion] = index;
      renderQuestion();
    });
    optionsList.appendChild(button);
  });
}

function calculateCareer() {
  const scores = {
    frontend: 0,
    backend: 0,
    mobile: 0,
    data: 0,
    devops: 0,
  };

  state.answers.forEach((answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([career, value]) => {
      scores[career] += value;
    });
  });

  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return {
    key: winner,
    career: careers[winner],
  };
}

function renderResult() {
  const { key, career } = calculateCareer();

  window.localStorage.setItem("mapaDevSelectedCareer", key);
  studyLink.href = `estudos.html?area=${key}`;

  resultTitle.textContent = `${career.label} pode ser a sua melhor trilha agora`;
  resultDescription.textContent = career.summary;
  resultHero.innerHTML = `
    <h3>${career.label}</h3>
    <p>${career.tone}</p>
  `;

  resultReasons.innerHTML = "";
  career.reasons.forEach((reason) => {
    const item = document.createElement("li");
    item.textContent = reason;
    resultReasons.appendChild(item);
  });

  resultFirstSteps.innerHTML = "";
  career.firstSteps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    resultFirstSteps.appendChild(item);
  });

  roadmapTimeline.innerHTML = "";
  career.roadmap.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-phase">${entry.phase}</div>
      <div class="timeline-copy">
        <strong>${entry.title}</strong>
        <p>${entry.description}</p>
        <div class="pill-row">
          ${entry.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    `;
    roadmapTimeline.appendChild(item);
  });

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

prevButton.addEventListener("click", () => {
  if (state.currentQuestion > 0) {
    state.currentQuestion -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (state.answers[state.currentQuestion] === null) {
    return;
  }

  if (state.currentQuestion === questions.length - 1) {
    renderResult();
    return;
  }

  state.currentQuestion += 1;
  renderQuestion();
});

restartButton.addEventListener("click", () => {
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  resultSection.classList.add("hidden");
  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderQuestion();
