const studyTracks = {
  frontend: {
    label: "Frontend Developer",
    heroTitle: "Sua plataforma de estudos para Frontend",
    heroDescription:
      "Aqui está sua trilha para dominar interfaces modernas, criar experiências bonitas e montar projetos reais para portfólio.",
    support:
      "Você vai estudar fundamentos da web, componentização, consumo de APIs, acessibilidade e projetos visuais com foco em experiência do usuário.",
    checklist: [
      "Estude um módulo por vez e só avance quando conseguir reproduzir o conceito sem copiar tudo.",
      "Alterne teoria e prática no mesmo dia para consolidar HTML, CSS e JavaScript.",
      "Guarde prints, commits e deploys dos projetos para começar seu portfólio desde cedo.",
      "Revise fundamentos da web toda semana, mesmo quando estiver estudando framework.",
    ],
    weeklyPlan: [
      "Dia 1: revisar HTML semântico e estrutura de páginas.",
      "Dia 2: praticar CSS responsivo, grid, flexbox e estados visuais.",
      "Dia 3: estudar JavaScript para DOM, eventos e consumo de APIs.",
      "Dia 4: montar uma landing page completa sem template pronto.",
      "Dia 5: transformar a página em mini app com dados dinâmicos.",
    ],
    featured: {
      type: "guide",
      label: "Comece por aqui",
      title: "Introdução à Web",
      description:
        "Esse guia da MDN foi feito para quem está começando do zero: ele mostra como planejar, montar, estilizar e publicar um site simples sem te jogar direto em conceitos avançados.",
      meta: "MDN / PT-BR",
      href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website",
      cta: "Abrir primeiro projeto",
      bullets: [
        "Comece por esse material antes de entrar em frameworks.",
        "Siga a ordem proposta pela página para praticar HTML, CSS e JavaScript com contexto.",
        "Publique o resultado final para transformar estudo em portfólio desde cedo.",
      ],
      supporting: [
        {
          label: "Trilha base · PT-BR",
          title: "Aprendendo desenvolvimento web",
          description:
            "Trilha oficial da MDN com módulos para iniciantes em HTML, CSS, JavaScript e fundamentos da web.",
          href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development",
          cta: "Abrir trilha",
        },
        {
          label: "Próximo passo · PT-BR",
          title: "Início rápido do React",
          description:
            "Depois de dominar a base da web, use esse guia do React para entender componentes e estado de forma bem visual.",
          href: "https://pt-br.react.dev/learn",
          cta: "Ver React",
        },
      ],
    },
    modules: [
      {
        stage: "Módulo 1",
        title: "Fundamentos da web",
        description:
          "Aprenda HTML, CSS, responsividade, acessibilidade e como estruturar páginas sólidas desde o começo.",
        items: ["HTML semântico", "CSS responsivo", "Acessibilidade", "Git básico"],
      },
      {
        stage: "Módulo 2",
        title: "JavaScript para interfaces",
        description:
          "Entenda DOM, eventos, manipulação de dados e consumo de APIs para deixar a interface viva.",
        items: ["DOM", "Eventos", "Fetch API", "Estados simples"],
      },
      {
        stage: "Módulo 3",
        title: "React e componentização",
        description:
          "Organize interfaces com componentes reutilizáveis, rotas e boas práticas de estrutura.",
        items: ["React", "Props e estado", "Rotas", "Organização"],
      },
      {
        stage: "Módulo 4",
        title: "Projetos de portfólio",
        description:
          "Monte páginas institucionais, dashboards e apps conectados a backend para mostrar nível profissional.",
        items: ["Landing page", "Dashboard", "Deploy", "Portfólio"],
      },
    ],
    resources: [
      {
        type: "Primeiros passos · PT-BR",
        title: "Introdução à Web",
        description:
          "Material mais amigável para começar: você cria um site real passo a passo e aprende o básico no processo.",
        meta: "MDN / PT-BR",
        href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website",
        cta: "Começar por aqui",
      },
      {
        type: "Trilha base · PT-BR",
        title: "Aprendendo desenvolvimento web",
        description:
          "Percurso completo da MDN com a base que um iniciante precisa antes de pensar em ferramentas mais complexas.",
        meta: "Mozilla / MDN / PT-BR",
        href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development",
        cta: "Abrir trilha",
      },
      {
        type: "Prática guiada · PT-BR",
        title: "Como será o seu site?",
        description:
          "Artigo da MDN em português para planejar o conteúdo, a estrutura e o visual do seu primeiro projeto web com mais clareza.",
        meta: "MDN / PT-BR",
        href: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like",
        cta: "Planejar projeto",
      },
      {
        type: "Framework · PT-BR",
        title: "Início rápido do React",
        description:
          "Introdução direta e visual ao React para quem já passou pela base da web e quer dar o primeiro passo em componentes.",
        meta: "pt-br.react.dev",
        href: "https://pt-br.react.dev/learn",
        cta: "Estudar React",
      },
      {
        type: "Projeto guiado · PT-BR",
        title: "Tutorial: Jogo-da-Velha",
        description:
          "Tutorial oficial do React com projeto pequeno e didático para entender componentes, props e estado praticando.",
        meta: "pt-br.react.dev / hands-on",
        href: "https://pt-br.react.dev/learn/tutorial-tic-tac-toe",
        cta: "Construir projeto",
      },
    ],
    projects: [
      {
        level: "Projeto 1",
        title: "Landing page de produto digital",
        description:
          "Treine hierarquia visual, componentes de destaque, seções e responsividade em um projeto rápido.",
        stack: ["HTML", "CSS", "JavaScript"],
        deliverable: "Deploy publicado com checklist de responsividade e contraste.",
      },
      {
        level: "Projeto 2",
        title: "Dashboard com dados simulados",
        description:
          "Monte gráficos, filtros e cards de KPI para praticar layout mais denso e leitura de dados.",
        stack: ["JavaScript", "Charts", "Grid layout"],
        deliverable: "Interface com estados vazio, carregando e erro bem resolvidos.",
      },
      {
        level: "Projeto 3",
        title: "Aplicação com login e API",
        description:
          "Integre autenticação, rotas e consumo de API para criar um projeto forte de portfólio.",
        stack: ["React", "Router", "API REST"],
        deliverable: "Fluxo completo com autenticação e documentação curta do projeto.",
      },
    ],
    exercises: [
      {
        kind: "quiz",
        label: "Autoavaliação",
        title: "O que precisa vir antes de mergulhar em React?",
        prompt:
          "Escolha a base que mais ajuda um iniciante a evoluir no frontend sem ficar preso em tutorial.",
        options: [
          {
            title: "HTML semântico + CSS + JavaScript",
            copy: "Entender a base da web ajuda você a raciocinar melhor sobre componentes e layout.",
          },
          {
            title: "Só biblioteca de componentes",
            copy: "Acelera o visual, mas pode esconder fundamentos importantes do navegador.",
          },
          {
            title: "Apenas animações avançadas",
            copy: "Animação ajuda no acabamento, mas não resolve estrutura e lógica.",
          },
        ],
        answer: 0,
        explanation:
          "React rende muito mais quando você já entende a base da web. Sem HTML, CSS e JavaScript, o framework vira uma camada que você usa sem conseguir depurar.",
      },
      {
        kind: "mission",
        label: "Missão prática",
        title: "Refaça a hero de um produto real",
        prompt:
          "Escolha um site de referência, observe a primeira dobra e recrie a estrutura sem copiar o código.",
        tasks: [
          "Monte o layout com HTML semântico e nomeie bem as seções.",
          "Reproduza tipografia, espaçamento e hierarquia visual com CSS.",
          "Adicione um CTA funcional e um pequeno efeito de hover.",
          "Garanta leitura e quebra correta em tela mobile.",
        ],
        deliverable:
          "Uma hero publicada com print desktop, print mobile e link do deploy.",
        solution:
          "Comece pela estrutura, depois faça o CSS em blocos maiores e só então refine detalhes visuais. No final, compare com a referência e anote três diferenças que você ainda precisa corrigir.",
      },
    ],
  },
  backend: {
    label: "Backend Developer",
    heroTitle: "Sua plataforma de estudos para Backend",
    heroDescription:
      "Aqui está sua trilha para construir APIs, organizar regras de negócio e aprender a base estrutural das aplicações.",
    support:
      "Você vai estudar lógica, modelagem, bancos de dados, autenticação, testes, integração contínua e organização de serviços.",
    checklist: [
      "Entenda o problema de negócio antes de modelar rotas e tabelas.",
      "Pratique API, banco e autenticação no mesmo projeto para ganhar visão real.",
      "Mantenha documentação simples de endpoints, entidades e regras do sistema.",
      "Teste o que você constrói desde cedo, mesmo em projetos pequenos.",
    ],
    weeklyPlan: [
      "Dia 1: revisar linguagem principal, estruturas e sintaxe.",
      "Dia 2: montar rotas CRUD com validação de dados.",
      "Dia 3: praticar modelagem relacional e consultas SQL.",
      "Dia 4: implementar autenticação e proteção de rotas.",
      "Dia 5: escrever testes e automatizar uma checagem com CI.",
    ],
    featured: {
      type: "guide",
      label: "Comece por aqui",
      title: "Introduction to Node.js",
      description:
        "Esse material é uma porta de entrada melhor para backend porque apresenta o que é Node.js, como ele funciona e por que ele é uma boa base para sua primeira API.",
      meta: "Node.js Learn / EN",
      href: "https://nodejs.org/en/learn",
      cta: "Abrir introdução",
      bullets: [
        "Leia primeiro para entender runtime, módulos e ambiente sem pular etapas.",
        "Depois monte um Hello World com Express para ver uma API saindo do papel.",
        "Só então avance para banco de dados e automação simples.",
      ],
      supporting: [
        {
          label: "Primeira API · EN",
          title: "Express Hello World",
          description:
            "O exemplo mais simples do Express para você criar um servidor e entender rota, porta e resposta HTTP.",
          href: "https://expressjs.com/en/starter/hello-world.html",
          cta: "Criar Hello World",
        },
        {
          label: "CI/CD · PT",
          title: "Guia Rápido do GitHub Actions",
          description:
            "Guia em português para entender o primeiro workflow e visualizar a automação sem esbarrar logo de cara no idioma.",
          href: "https://docs.github.com/pt/actions/get-started/quickstart",
          cta: "Abrir guia",
        },
      ],
    },
    modules: [
      {
        stage: "Módulo 1",
        title: "Lógica e linguagem principal",
        description:
          "Fortaleça os fundamentos com JavaScript ou Python, estruturas de dados e organização de código.",
        items: ["Lógica", "Node.js ou Python", "POO", "Git"],
      },
      {
        stage: "Módulo 2",
        title: "APIs e banco de dados",
        description:
          "Aprenda rotas, validação, autenticação, SQL e persistência de dados para sistemas reais.",
        items: ["REST", "SQL", "ORM", "Autenticação"],
      },
      {
        stage: "Módulo 3",
        title: "Arquitetura e qualidade",
        description:
          "Organize serviços, testes, logs e camadas de aplicação para escalar com mais segurança.",
        items: ["Arquitetura", "Testes", "Logs", "Boas práticas"],
      },
      {
        stage: "Módulo 4",
        title: "Integrações e produção",
        description:
          "Trabalhe com cache, filas, integrações externas e automação de entrega.",
        items: ["Cache", "Filas", "Integrações", "CI/CD"],
      },
    ],
    resources: [
      {
        type: "Primeiros passos · EN",
        title: "Node.js Learn",
        description:
          "Introdução oficial para entender o que é Node.js e como ele entra na construção de APIs para iniciantes.",
        meta: "Node.js Learn / EN",
        href: "https://nodejs.org/en/learn",
        cta: "Estudar Node.js",
      },
      {
        type: "Primeira API · EN",
        title: "Express Hello World",
        description:
          "Exemplo super direto para entender como subir um servidor e responder requisições sem complexidade desnecessária.",
        meta: "Express official docs",
        href: "https://expressjs.com/en/starter/hello-world.html",
        cta: "Criar primeira API",
      },
      {
        type: "Rotas · EN",
        title: "Express basic routing",
        description:
          "Depois do Hello World, esse guia ajuda a entender GET, POST e organização de rotas de forma simples.",
        meta: "Express starter",
        href: "https://expressjs.com/en/starter/basic-routing.html",
        cta: "Aprender rotas",
      },
      {
        type: "Banco de dados · EN",
        title: "PostgreSQL Tutorial",
        description:
          "Tutorial oficial com foco introdutório para criar banco, tabela, inserir dados e fazer consultas.",
        meta: "PostgreSQL docs / EN",
        href: "https://www.postgresql.org/docs/current/tutorial.html",
        cta: "Praticar SQL",
      },
      {
        type: "CI inicial · PT",
        title: "Guia Rápido do GitHub Actions",
        description:
          "Versão em português do primeiro contato com GitHub Actions para configurar sua automação sem tropeçar no idioma.",
        meta: "GitHub Docs / PT",
        href: "https://docs.github.com/pt/actions/get-started/quickstart",
        cta: "Entender CI",
      },
    ],
    projects: [
      {
        level: "Projeto 1",
        title: "API de tarefas com autenticação",
        description:
          "Treine CRUD, login, middleware e relacionamento entre usuário e tarefa.",
        stack: ["Node.js", "Express", "JWT"],
        deliverable: "Coleção de endpoints documentada e testada no Postman ou Insomnia.",
      },
      {
        level: "Projeto 2",
        title: "Backend de e-commerce simplificado",
        description:
          "Modele catálogo, carrinho, pedidos e status para simular cenário real de produto.",
        stack: ["Express", "PostgreSQL", "Validação"],
        deliverable: "Fluxo de pedidos com regras de negócio e tratamento de erro consistente.",
      },
      {
        level: "Projeto 3",
        title: "Serviço com testes e pipeline",
        description:
          "Adicione testes automatizados e uma pipeline para mostrar maturidade além do CRUD básico.",
        stack: ["Testes", "CI", "PostgreSQL"],
        deliverable: "Workflow rodando no GitHub Actions com README explicando a arquitetura.",
      },
    ],
    exercises: [
      {
        kind: "quiz",
        label: "Autoavaliação",
        title: "Qual deve ser sua primeira preocupação ao desenhar uma API?",
        prompt:
          "Pense como alguém que quer criar um backend útil em vez de só abrir rotas rapidamente.",
        options: [
          {
            title: "Entender o problema e modelar entidades",
            copy: "Sem isso, os endpoints nascem desalinhados com a regra de negócio.",
          },
          {
            title: "Escolher a biblioteca mais popular",
            copy: "A escolha de stack ajuda, mas não resolve modelagem errada.",
          },
          {
            title: "Criar muitos middlewares logo no início",
            copy: "Middleware é útil, mas só depois que a base do fluxo estiver clara.",
          },
        ],
        answer: 0,
        explanation:
          "Backend bom começa em modelagem e regra de negócio. Framework, ORM e estrutura ajudam, mas não corrigem um domínio mal pensado.",
      },
      {
        kind: "mission",
        label: "Missão prática",
        title: "Monte uma API de pedidos em camadas",
        prompt:
          "Crie um serviço simples com produtos, pedidos e atualização de status para treinar fluxo real.",
        tasks: [
          "Modele as entidades principais e os relacionamentos.",
          "Crie rotas para listar, criar e atualizar pedidos.",
          "Valide entradas e trate erros com respostas consistentes.",
          "Adicione pelo menos um teste automatizado para uma regra crítica.",
        ],
        deliverable:
          "Repositório com README, coleção de requisições e workflow simples de CI.",
        solution:
          "Comece pelo diagrama das entidades, implemente primeiro o fluxo feliz e só depois cubra validações, erros e testes. Esse caminho acelera sem perder organização.",
      },
    ],
  },
  mobile: {
    label: "Mobile Developer",
    heroTitle: "Sua plataforma de estudos para Mobile",
    heroDescription:
      "Aqui está sua trilha para criar aplicativos com foco em usabilidade, fluxo de telas e integração com recursos do dispositivo.",
    support:
      "Você vai estudar navegação, estado, consumo de APIs, publicação e experiências práticas em apps com React Native ou Flutter.",
    checklist: [
      "Pense sempre no fluxo do usuário antes de codar cada tela.",
      "Treine componentes reutilizáveis e organização da navegação.",
      "Teste em telas diferentes e com estados vazios, erro e carregando.",
      "Inclua pelo menos um recurso nativo em cada projeto de estudo.",
    ],
    weeklyPlan: [
      "Dia 1: revisar componentes básicos e estrutura do app.",
      "Dia 2: estudar navegação entre telas e gerenciamento de estado.",
      "Dia 3: consumir uma API e exibir listas e detalhes.",
      "Dia 4: integrar câmera, localização ou notificações.",
      "Dia 5: melhorar experiência visual e preparar build.",
    ],
    featured: {
      type: "guide",
      label: "Comece por aqui",
      title: "Introduction to React Native",
      description:
        "A introdução do React Native explica o ecossistema com exemplos interativos no navegador, o que deixa o começo mais leve para quem nunca montou um app.",
      meta: "React Native docs / EN",
      href: "https://reactnative.dev/docs/getting-started",
      cta: "Começar com React Native",
      bullets: [
        "Use os exemplos do navegador para entender componentes antes de configurar tudo localmente.",
        "Depois avance para o tutorial oficial e replique uma tela simples.",
        "Se preferir Flutter, use os cards laterais como trilha alternativa igualmente iniciante.",
      ],
      supporting: [
        {
          label: "Tutorial guiado · EN",
          title: "React Native Tutorial",
          description:
            "Tutorial pensado para quem quer sair da introdução e construir um app pequeno entendendo componentes e estado.",
          href: "https://reactnative.dev/docs/tutorial",
          cta: "Abrir React Native",
        },
        {
          label: "Alternativa · EN",
          title: "Learn Flutter",
          description:
            "Página oficial do Flutter que separa recursos para iniciantes e organiza uma rota de aprendizagem bem amigável.",
          href: "https://docs.flutter.dev/learn",
          cta: "Ver Flutter",
        },
      ],
    },
    modules: [
      {
        stage: "Módulo 1",
        title: "Fundamentos do app",
        description:
          "Aprenda estrutura de telas, componentes, estilos e lógica básica com React Native ou Flutter.",
        items: ["UI mobile", "Estrutura", "Estado", "Navegação"],
      },
      {
        stage: "Módulo 2",
        title: "Integração e dados",
        description:
          "Conecte APIs, armazene dados localmente e trate carregamentos, erros e estados vazios.",
        items: ["APIs", "Storage", "Feedback", "Fluxos"],
      },
      {
        stage: "Módulo 3",
        title: "Recursos nativos",
        description:
          "Trabalhe com câmera, localização, notificações e permissões para criar apps mais reais.",
        items: ["Câmera", "GPS", "Notificações", "Permissões"],
      },
      {
        stage: "Módulo 4",
        title: "Entrega e publicação",
        description:
          "Ajuste performance, organize builds e prepare projetos para loja ou apresentação profissional.",
        items: ["Build", "Performance", "Deploy", "Portfólio"],
      },
    ],
    resources: [
      {
        type: "Primeiros passos · EN",
        title: "Introduction to React Native",
        description:
          "Ponto de entrada mais suave para entender o que é React Native com exemplos interativos antes da instalação completa.",
        meta: "Meta / React Native / EN",
        href: "https://reactnative.dev/docs/getting-started",
        cta: "Começar por aqui",
      },
      {
        type: "Tutorial guiado · EN",
        title: "React Native Tutorial",
        description:
          "Material oficial com um passo a passo melhor para entender componentes, props e estado em um app mobile simples.",
        meta: "React Native docs / EN",
        href: "https://reactnative.dev/docs/tutorial",
        cta: "Estudar React Native",
      },
      {
        type: "Trilha oficial · EN",
        title: "Learn Flutter",
        description:
          "Página oficial do Flutter que organiza o aprendizado para iniciantes com orientação clara de por onde começar.",
        meta: "Flutter Docs / EN",
        href: "https://docs.flutter.dev/learn",
        cta: "Abrir trilha",
      },
      {
        type: "Projeto guiado · EN",
        title: "Flutter tutorial",
        description:
          "Tutorial prático do Flutter para criar apps pequenos do zero e entender widgets, layout e estado na prática.",
        meta: "Flutter tutorial / EN",
        href: "https://docs.flutter.dev/tutorial",
        cta: "Construir app",
      },
      {
        type: "Setup · EN",
        title: "Set up and test drive Flutter",
        description:
          "Guia atual de instalação e validação do ambiente para quem quer testar o primeiro app com menos atrito.",
        meta: "Flutter get started / EN",
        href: "https://docs.flutter.dev/get-started/quick",
        cta: "Configurar Flutter",
      },
    ],
    projects: [
      {
        level: "Projeto 1",
        title: "App de tarefas com categorias",
        description:
          "Treine listas, filtros e fluxo de cadastro em uma aplicação simples e bem organizada.",
        stack: ["React Native ou Flutter", "Estado local"],
        deliverable: "Lista funcional com cadastro, filtro e persistência simples.",
      },
      {
        level: "Projeto 2",
        title: "App de hábitos com notificações",
        description:
          "Mostre evolução com lembretes, persistência local e acompanhamento visual.",
        stack: ["Storage", "Notificações", "Navegação"],
        deliverable: "Fluxo com onboarding, lembrete e tela de progresso.",
      },
      {
        level: "Projeto 3",
        title: "App com login, API e recurso nativo",
        description:
          "Projeto forte de portfólio com múltiplos fluxos, backend e funcionalidade real do dispositivo.",
        stack: ["API", "Autenticação", "Recurso nativo"],
        deliverable: "Aplicativo demonstrável em vídeo com build e README.",
      },
    ],
    exercises: [
      {
        kind: "quiz",
        label: "Autoavaliação",
        title: "Qual pensamento melhora mais a qualidade de um app desde o início?",
        prompt:
          "Escolha a mentalidade que evita retrabalho e melhora a experiência do usuário no mobile.",
        options: [
          {
            title: "Desenhar fluxo, estados e navegação antes",
            copy: "Isso ajuda a organizar telas, permissões e pontos de fricção do usuário.",
          },
          {
            title: "Começar pelo efeito visual mais complexo",
            copy: "Bonito ajuda, mas não substitui fluxo e usabilidade.",
          },
          {
            title: "Criar várias telas sem validar estados",
            copy: "Sem estados de erro e vazio, o app quebra em cenários reais.",
          },
        ],
        answer: 0,
        explanation:
          "Em mobile, fluxo e estado importam muito. Quando você entende as transições de tela e os cenários de uso, a implementação fica muito mais consistente.",
      },
      {
        kind: "mission",
        label: "Missão prática",
        title: "Crie um app de clima com geolocalização",
        prompt:
          "Faça um app simples que use localização do dispositivo e exiba dados consumidos de uma API pública.",
        tasks: [
          "Criar uma tela inicial com pedido de permissão.",
          "Buscar a localização atual e mostrar status de carregamento.",
          "Consumir uma API de clima e exibir resumo do tempo.",
          "Tratar permissão negada e falha de rede com mensagens claras.",
        ],
        deliverable:
          "Vídeo curto do app funcionando e repositório com instruções de execução.",
        solution:
          "Implemente primeiro a UI com dados mockados, depois encaixe permissão, geolocalização e chamada real da API. Isso reduz confusão e facilita depuração.",
      },
    ],
  },
  data: {
    label: "Data Developer",
    heroTitle: "Sua plataforma de estudos para Dados",
    heroDescription:
      "Aqui está sua trilha para estudar análise, SQL, Python e transformar dados em insights claros e úteis.",
    support:
      "Você vai aprender exploração de dados, visualização, notebooks, dashboards e projetos orientados por perguntas de negócio.",
    checklist: [
      "Sempre formule uma pergunta antes de abrir o dataset.",
      "Documente hipóteses, limpeza de dados e decisões analíticas.",
      "Pratique visualização com foco em clareza, não só em volume de gráfico.",
      "Monte estudos de caso que mostrem raciocínio e comunicação.",
    ],
    weeklyPlan: [
      "Dia 1: revisar Python e estruturas básicas para análise.",
      "Dia 2: praticar SQL com filtros, joins e agregações.",
      "Dia 3: limpar dados e tratar inconsistências.",
      "Dia 4: construir visualizações e painéis.",
      "Dia 5: escrever conclusões e recomendações de negócio.",
    ],
    featured: {
      type: "guide",
      label: "Comece por aqui",
      title: "O tutorial do Python",
      description:
        "Python costuma ser a entrada mais amigável para dados, e esse tutorial oficial te leva pela linguagem com exemplos simples e progressivos.",
      meta: "docs.python.org / PT-BR",
      href: "https://docs.python.org/pt-br/3/tutorial/",
      cta: "Abrir tutorial",
      bullets: [
        "Comece entendendo listas, condições, funções e leitura de arquivos.",
        "Depois passe para pandas para manipular tabelas de forma visual e prática.",
        "Feche o ciclo com notebooks e SQL para analisar dados reais com mais contexto.",
      ],
      supporting: [
        {
          label: "Análise tabular · EN",
          title: "Getting started tutorials / pandas",
          description:
            "Tutoriais oficiais bem guiados para importar dados, filtrar linhas, criar colunas e fazer análise inicial.",
          href: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/",
          cta: "Abrir pandas",
        },
        {
          label: "No navegador · EN",
          title: "Try Jupyter",
          description:
            "Ambiente oficial para testar notebooks sem instalar nada, ótimo para perder o medo de começar.",
          href: "https://jupyter.org/try",
          cta: "Testar online",
        },
      ],
    },
    modules: [
      {
        stage: "Módulo 1",
        title: "Base analítica",
        description:
          "Construa fundamentos em Python, SQL, tabelas, joins e raciocínio estatístico inicial.",
        items: ["Python", "SQL", "Pandas", "Estatística"],
      },
      {
        stage: "Módulo 2",
        title: "Exploração e limpeza",
        description:
          "Aprenda a inspecionar dados, corrigir problemas e preparar bases para análise real.",
        items: ["Limpeza", "EDA", "Tratamento", "Documentação"],
      },
      {
        stage: "Módulo 3",
        title: "Visualização e dashboards",
        description:
          "Transforme dados em painéis e apresentações que comuniquem decisões com clareza.",
        items: ["BI", "Dashboards", "Storytelling", "KPIs"],
      },
      {
        stage: "Módulo 4",
        title: "Projetos com impacto",
        description:
          "Monte estudos de caso para churn, vendas, funil, cohort ou comportamento de usuários.",
        items: ["Projetos", "Negócio", "Insights", "Portfólio"],
      },
    ],
    resources: [
      {
        type: "Primeiros passos · PT-BR",
        title: "O tutorial do Python",
        description:
          "Melhor ponto de partida para aprender a base da linguagem antes de partir para análise de dados propriamente dita.",
        meta: "docs.python.org / PT-BR",
        href: "https://docs.python.org/pt-br/3/tutorial/",
        cta: "Estudar Python",
      },
      {
        type: "Análise tabular · EN",
        title: "pandas getting started tutorials",
        description:
          "Aprenda a ler arquivos, selecionar colunas, fazer transformações e visualizar dados.",
        meta: "pandas official docs / EN",
        href: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/",
        cta: "Abrir pandas",
      },
      {
        type: "Notebook · EN",
        title: "Try Jupyter",
        description:
          "Ambiente oficial para experimentar notebooks no navegador e entender o fluxo de análise sem instalação.",
        meta: "Project Jupyter / EN",
        href: "https://jupyter.org/try",
        cta: "Testar no navegador",
      },
      {
        type: "Setup · EN",
        title: "Installing Jupyter",
        description:
          "Quando você quiser sair do navegador, esse guia oficial mostra como instalar Jupyter no seu computador.",
        meta: "Project Jupyter / EN",
        href: "https://jupyter.org/install",
        cta: "Instalar Jupyter",
      },
      {
        type: "SQL · EN",
        title: "PostgreSQL Tutorial",
        description:
          "Tutorial oficial para dar os primeiros passos em banco relacional, consultas e joins de forma guiada.",
        meta: "PostgreSQL docs / EN",
        href: "https://www.postgresql.org/docs/current/tutorial.html",
        cta: "Praticar SQL",
      },
    ],
    projects: [
      {
        level: "Projeto 1",
        title: "Dashboard de vendas",
        description:
          "Projeto ideal para treinar indicadores, filtros, gráficos e contexto de negócio.",
        stack: ["Python", "SQL", "Dashboard"],
        deliverable: "Painel com três KPIs principais e conclusões escritas.",
      },
      {
        level: "Projeto 2",
        title: "Estudo de churn ou retenção",
        description:
          "Analise comportamento de usuários, padrões de cancelamento e possíveis ações do negócio.",
        stack: ["EDA", "Segmentação", "Storytelling"],
        deliverable: "Apresentação curta com hipóteses, achados e recomendações.",
      },
      {
        level: "Projeto 3",
        title: "Case completo com storytelling",
        description:
          "Apresente contexto, dados, método, gráficos e recomendações como um analista profissional.",
        stack: ["Notebook", "SQL", "Visualização"],
        deliverable: "Notebook organizado e versão resumida para portfólio.",
      },
    ],
    exercises: [
      {
        kind: "quiz",
        label: "Autoavaliação",
        title: "Qual passo vem antes de abrir um dataset?",
        prompt:
          "Escolha a atitude que deixa a análise mais útil e menos aleatória.",
        options: [
          {
            title: "Definir pergunta e hipótese",
            copy: "Isso ajuda a filtrar o que vale investigar e evita análise sem foco.",
          },
          {
            title: "Criar o maior número de gráficos possível",
            copy: "Gráfico sem pergunta vira ruído visual.",
          },
          {
            title: "Começar limpando tudo sem contexto",
            copy: "Limpeza é importante, mas precisa conversar com o objetivo da análise.",
          },
        ],
        answer: 0,
        explanation:
          "Em dados, a pergunta orienta o resto. Sem ela, você até gera tabelas e gráficos, mas dificilmente chega em insight útil para negócio.",
      },
      {
        kind: "mission",
        label: "Missão prática",
        title: "Analise um CSV e escreva uma recomendação",
        prompt:
          "Pegue um dataset simples e produza um pequeno estudo com limpeza, gráficos e conclusão.",
        tasks: [
          "Definir uma pergunta de negócio clara.",
          "Importar o arquivo e documentar limpeza e tratamento.",
          "Criar pelo menos dois gráficos que ajudem a responder a pergunta.",
          "Fechar com uma recomendação objetiva baseada nos dados.",
        ],
        deliverable:
          "Notebook com análise comentada e resumo executivo de cinco linhas.",
        solution:
          "Evite começar com gráfico. Primeiro inspecione colunas, tipos e valores faltantes; depois escolha recortes relevantes e só então visualize para responder a pergunta definida.",
      },
    ],
  },
  devops: {
    label: "DevOps Engineer",
    heroTitle: "Sua plataforma de estudos para DevOps",
    heroDescription:
      "Aqui está sua trilha para estudar infraestrutura, automação, deploy e confiabilidade de sistemas modernos.",
    support:
      "Você vai praticar Linux, CI/CD, containers, cloud, observabilidade e rotinas comuns de times de plataforma.",
    checklist: [
      "Entenda o fluxo completo da aplicação antes de automatizar etapas.",
      "Pratique comandos de terminal e scripts todos os dias.",
      "Monte pequenos laboratórios locais com Docker e pipelines simples.",
      "Registre o que foi configurado para desenvolver visão operacional.",
    ],
    weeklyPlan: [
      "Dia 1: revisar Linux, shell e navegação por terminal.",
      "Dia 2: containerizar uma aplicação simples com Docker.",
      "Dia 3: montar pipeline de build e testes.",
      "Dia 4: fazer deploy em ambiente de nuvem ou simulado.",
      "Dia 5: adicionar logs, métricas e monitoramento básico.",
    ],
    featured: {
      type: "guide",
      label: "Comece por aqui",
      title: "Docker Introduction",
      description:
        "Esse material do Docker Docs deixa claro que é para nível iniciante e conduz pelos conceitos essenciais antes de qualquer ferramenta mais pesada.",
      meta: "Docker Docs / EN",
      href: "https://docs.docker.com/get-started/introduction/",
      cta: "Abrir introdução",
      bullets: [
        "Comece entendendo o que é container e por que ele resolve problemas reais do dia a dia.",
        "Depois faça o workshop oficial para praticar build, execução e compose.",
        "Só depois avance para CI e Kubernetes.",
      ],
      supporting: [
        {
          label: "Prática guiada · EN",
          title: "Docker workshop",
          description:
            "Workshop oficial de cerca de 45 minutos para construir e rodar containers passo a passo.",
          href: "https://docs.docker.com/get-started/workshop/",
          cta: "Fazer workshop",
        },
        {
          label: "CI inicial · PT",
          title: "Guia Rápido do GitHub Actions",
          description:
            "Guia em português para montar o primeiro workflow depois de entender o básico de containers.",
          href: "https://docs.github.com/pt/actions/get-started/quickstart",
          cta: "Entender Actions",
        },
      ],
    },
    modules: [
      {
        stage: "Módulo 1",
        title: "Base operacional",
        description:
          "Fortaleça Linux, shell, redes básicas, permissões e estrutura de ambientes.",
        items: ["Linux", "Shell", "Redes", "Permissões"],
      },
      {
        stage: "Módulo 2",
        title: "Containers e automação",
        description:
          "Aprenda Docker, imagens, containers e primeiros pipelines de integração contínua.",
        items: ["Docker", "Images", "CI", "Automação"],
      },
      {
        stage: "Módulo 3",
        title: "Deploy e observabilidade",
        description:
          "Monte fluxos de entrega, monitore aplicações e entenda logs e alertas.",
        items: ["Deploy", "Logs", "Métricas", "Alertas"],
      },
      {
        stage: "Módulo 4",
        title: "Infraestrutura moderna",
        description:
          "Aprofunde cloud, IaC, Kubernetes e práticas de confiabilidade em produção.",
        items: ["Cloud", "IaC", "Kubernetes", "SRE"],
      },
    ],
    resources: [
      {
        type: "Primeiros passos · EN",
        title: "Docker Introduction",
        description:
          "Introdução oficial marcada como iniciante, com foco em conceitos, instalação e primeiro contato com containers.",
        meta: "Docker Docs / EN",
        href: "https://docs.docker.com/get-started/introduction/",
        cta: "Começar por aqui",
      },
      {
        type: "Guia oficial · EN",
        title: "Docker Get Started",
        description:
          "Centro oficial com os materiais de entrada para quem está começando a estudar containers e fluxo de desenvolvimento.",
        meta: "Docker Docs / EN",
        href: "https://docs.docker.com/get-started/",
        cta: "Abrir guia",
      },
      {
        type: "Workshop · EN",
        title: "Docker workshop",
        description:
          "Laboratório guiado com uma aplicação real para fixar os comandos básicos e o raciocínio de containerização.",
        meta: "Docker official workshop / EN",
        href: "https://docs.docker.com/get-started/workshop/",
        cta: "Fazer workshop",
      },
      {
        type: "CI inicial · PT",
        title: "Guia Rápido do GitHub Actions",
        description:
          "Versão em português do primeiro contato com workflows para você aprender automação sem a barreira do idioma.",
        meta: "GitHub Docs / PT",
        href: "https://docs.github.com/pt/actions/get-started/quickstart",
        cta: "Entender CI",
      },
      {
        type: "Orquestração · PT-BR",
        title: "Aprenda as noções básicas do Kubernetes",
        description:
          "Deixe esse para depois do Docker: é o tutorial oficial em português para entender cluster, deploy, escala e atualização.",
        meta: "kubernetes.io / PT-BR",
        href: "https://kubernetes.io/pt-br/docs/tutorials/kubernetes-basics/",
        cta: "Estudar Kubernetes",
      },
    ],
    projects: [
      {
        level: "Projeto 1",
        title: "Deploy automatizado de app estático",
        description:
          "Treine pipeline básica, versionamento e publicação automatizada.",
        stack: ["GitHub Actions", "Deploy", "Shell"],
        deliverable: "Workflow funcional com build e publicação automática.",
      },
      {
        level: "Projeto 2",
        title: "App containerizado com monitoramento",
        description:
          "Projeto intermediário para mostrar domínio de Docker, logs e estrutura de ambiente.",
        stack: ["Docker", "Compose", "Logs"],
        deliverable: "Aplicação subida em containers com documentação de execução.",
      },
      {
        level: "Projeto 3",
        title: "Infraestrutura com pipeline completo",
        description:
          "Projeto forte para portfólio com visão de plataforma, automação e confiabilidade.",
        stack: ["Containers", "CI/CD", "Kubernetes"],
        deliverable: "Repositório com pipeline, containers e roteiro de deploy.",
      },
    ],
    exercises: [
      {
        kind: "quiz",
        label: "Autoavaliação",
        title: "Por que containers ajudam tanto no início de DevOps?",
        prompt:
          "Escolha o benefício que mais acelera o aprendizado e reduz o clássico 'na minha máquina funciona'.",
        options: [
          {
            title: "Porque empacotam ambiente e aplicação juntos",
            copy: "Isso melhora previsibilidade, repetição e colaboração em equipe.",
          },
          {
            title: "Porque substituem qualquer tipo de teste",
            copy: "Containers ajudam no ambiente, mas não eliminam validação e observabilidade.",
          },
          {
            title: "Porque deixam toda aplicação automaticamente escalável",
            copy: "Escala exige arquitetura, orquestração e operação, não só container.",
          },
        ],
        answer: 0,
        explanation:
          "Containerizar cedo melhora a reprodutibilidade do ambiente. Isso simplifica testes locais, onboarding e automação de pipeline.",
      },
      {
        kind: "mission",
        label: "Missão prática",
        title: "Containerize um projeto e automatize um teste",
        prompt:
          "Pegue uma aplicação simples e crie a primeira versão do seu fluxo DevOps com Docker e CI.",
        tasks: [
          "Criar um Dockerfile funcional para a aplicação.",
          "Subir o projeto localmente e validar execução.",
          "Adicionar um workflow no GitHub Actions para rodar build ou testes.",
          "Documentar como executar tudo localmente e no CI.",
        ],
        deliverable:
          "Repositório com Dockerfile, workflow e README enxuto de operação.",
        solution:
          "Comece pelo menor fluxo possível: build confiável e um teste simples. Depois pense em logs, variáveis de ambiente e expansão para deploy.",
      },
    ],
  },
};

const glossaryEntries = [
  {
    term: "API",
    aliases: ["api", "apis", "endpoint", "endpoints"],
    category: "Web",
    summary: "API é a ponte que deixa um sistema conversar com outro.",
    definition:
      "Pense nela como um balcão de atendimento: seu site faz um pedido, a API entende esse pedido e devolve uma resposta organizada.",
    importance:
      "Você usa API para buscar dados, enviar formulários, autenticar usuários e integrar serviços sem reinventar tudo do zero.",
    example:
      "Quando um app mostra a previsão do tempo, ele normalmente pede essas informações para a API de um serviço de clima.",
    related: ["Fetch API", "REST", "JSON"],
  },
  {
    term: "HTML",
    aliases: ["html"],
    category: "Frontend",
    summary: "HTML cria a estrutura básica de uma página.",
    definition:
      "Ele organiza o conteúdo em títulos, parágrafos, botões, imagens e outras partes que o navegador consegue entender.",
    importance:
      "Sem HTML, você não tem a base sobre a qual CSS e JavaScript trabalham.",
    example:
      "Um formulário de cadastro, um menu e uma seção de destaque começam como elementos HTML.",
    related: ["CSS", "JavaScript", "HTML semântico"],
  },
  {
    term: "HTML semântico",
    aliases: ["html semantico", "semantica html", "semantico"],
    category: "Frontend",
    summary: "HTML semântico usa tags que descrevem o papel real de cada parte da página.",
    definition:
      "Em vez de usar tudo como div, você usa header, main, nav, article e outras tags que explicam a estrutura para pessoas e ferramentas.",
    importance:
      "Isso melhora acessibilidade, SEO e organização do código desde o início.",
    example:
      "Usar <main> no conteúdo principal ajuda leitores de tela e também deixa o projeto mais claro para quem vai manter a página.",
    related: ["HTML", "Acessibilidade", "CSS"],
  },
  {
    term: "CSS",
    aliases: ["css"],
    category: "Frontend",
    summary: "CSS cuida da aparência da interface.",
    definition:
      "Ele controla cores, fontes, espaçamentos, tamanhos, layout e pequenas interações visuais.",
    importance:
      "É o que transforma uma estrutura crua em algo agradável, legível e organizado.",
    example:
      "Com CSS você faz um botão mudar de cor ao passar o mouse ou organiza cards lado a lado.",
    related: ["CSS responsivo", "HTML", "UX"],
  },
  {
    term: "CSS responsivo",
    aliases: ["css responsivo", "responsividade", "responsivo"],
    category: "Frontend",
    summary: "CSS responsivo adapta a interface a telas diferentes.",
    definition:
      "A ideia é fazer o mesmo conteúdo funcionar bem em celular, tablet e desktop, mudando tamanhos, colunas e espaçamentos quando preciso.",
    importance:
      "Hoje a maior parte dos usuários navega em várias telas, então layout quebrado significa experiência ruim logo no começo.",
    example:
      "Um grid com quatro cards no desktop pode virar uma coluna única no celular sem perder leitura.",
    related: ["CSS", "UX", "Acessibilidade"],
  },
  {
    term: "JavaScript",
    aliases: ["javascript", "js"],
    category: "Frontend",
    summary: "JavaScript faz a página reagir e ganhar comportamento.",
    definition:
      "É a linguagem que permite ouvir cliques, atualizar conteúdo, validar campos e buscar dados sem recarregar tudo.",
    importance:
      "Sem JavaScript, muita coisa moderna da web fica estática ou limitada.",
    example:
      "Quando você abre um menu, avança um quiz ou carrega uma lista nova na tela, normalmente há JavaScript ali.",
    related: ["DOM", "Fetch API", "React"],
  },
  {
    term: "DOM",
    aliases: ["dom"],
    category: "Frontend",
    summary: "DOM é a forma como o navegador representa a página em memória.",
    definition:
      "Ele transforma seu HTML em uma árvore de elementos para que o JavaScript consiga ler e alterar partes da interface.",
    importance:
      "Entender DOM ajuda você a manipular a tela com mais clareza e a depurar o que está acontecendo.",
    example:
      "Ao trocar o texto de um título depois de um clique, você está alterando o DOM.",
    related: ["HTML", "JavaScript", "React"],
  },
  {
    term: "Fetch API",
    aliases: ["fetch api", "fetch"],
    category: "Web",
    summary: "Fetch API é um jeito nativo do navegador pedir dados para outro serviço.",
    definition:
      "Com ela, o JavaScript envia requisições HTTP e recebe respostas, normalmente em JSON.",
    importance:
      "É uma das formas mais comuns de ligar frontend a backend em projetos iniciais.",
    example:
      "Um botão de buscar usuários pode usar fetch para pedir dados de uma API e mostrar os resultados na tela.",
    related: ["API", "JavaScript", "REST"],
  },
  {
    term: "React",
    aliases: ["react"],
    category: "Frontend",
    summary: "React é uma biblioteca para construir interfaces em blocos reutilizáveis.",
    definition:
      "Ela ajuda a dividir a tela em componentes menores e a atualizar a interface quando os dados mudam.",
    importance:
      "Por isso React é tão comum em produtos web maiores e em vagas de frontend.",
    example:
      "Uma página pode ter componentes separados para menu, card de produto, formulário e rodapé.",
    related: ["Componentização", "Props e estado", "Rotas"],
  },
  {
    term: "Componentização",
    aliases: ["componentizacao", "componentes", "componentizacao de interface"],
    category: "Frontend",
    summary: "Componentização é dividir a interface em partes menores e reutilizáveis.",
    definition:
      "Em vez de criar uma página como um bloco gigante, você separa em peças como botão, card, cabeçalho e formulário.",
    importance:
      "Isso deixa o projeto mais fácil de manter, reaproveitar e escalar.",
    example:
      "Um mesmo componente de botão pode aparecer na home, no formulário e no dashboard com pequenas variações.",
    related: ["React", "Props e estado", "UX"],
  },
  {
    term: "Props e estado",
    aliases: ["props e estado", "props", "estado", "state"],
    category: "Frontend",
    summary: "Props são dados recebidos; estado é o dado que pode mudar dentro da interface.",
    definition:
      "Props normalmente vêm de fora do componente. Estado guarda informações que mudam com interação, como um menu aberto ou um campo preenchido.",
    importance:
      "Essa diferença é central para entender React e outras abordagens de interface.",
    example:
      "Um card pode receber o nome do produto por props e guardar no estado se o usuário marcou ou não como favorito.",
    related: ["React", "Componentização", "JavaScript"],
  },
  {
    term: "Rotas",
    aliases: ["rotas", "router", "roteamento"],
    category: "Frontend",
    summary: "Rotas definem para qual tela ou URL o usuário vai.",
    definition:
      "Elas organizam a navegação do projeto, ligando caminhos como /login, /perfil ou /produtos às telas certas.",
    importance:
      "Sem rotas, fica difícil estruturar apps com várias páginas ou fluxos.",
    example:
      "Ao clicar em 'perfil', o sistema usa a rota correspondente para abrir a tela correta.",
    related: ["React", "UX", "API"],
  },
  {
    term: "Acessibilidade",
    aliases: ["acessibilidade", "a11y"],
    category: "Frontend",
    summary: "Acessibilidade é fazer o produto funcionar para mais pessoas, inclusive quem usa tecnologias assistivas.",
    definition:
      "Isso envolve contraste, navegação por teclado, textos claros, estrutura correta e suporte a leitores de tela.",
    importance:
      "Um projeto acessível atende melhor os usuários e mostra maturidade técnica desde cedo.",
    example:
      "Um botão com rótulo claro e foco visível ajuda quem navega sem mouse.",
    related: ["HTML semântico", "CSS responsivo", "UX"],
  },
  {
    term: "Git",
    aliases: ["git", "commits", "commit"],
    category: "Produtividade",
    summary: "Git é um sistema de versionamento para acompanhar mudanças no código.",
    definition:
      "Ele registra o histórico do projeto e ajuda você a testar, corrigir e colaborar sem perder versões anteriores.",
    importance:
      "É uma habilidade básica em praticamente qualquer área de desenvolvimento.",
    example:
      "Cada commit salva um pedaço da evolução do projeto, como se fossem checkpoints bem nomeados.",
    related: ["Deploy", "CI/CD", "Arquitetura"],
  },
  {
    term: "Deploy",
    aliases: ["deploy", "publicacao", "publicar projeto"],
    category: "Web",
    summary: "Deploy é colocar o projeto para rodar em um ambiente acessível.",
    definition:
      "Em linguagem simples, é sair do seu computador e levar a aplicação para um servidor ou serviço online.",
    importance:
      "Sem deploy, o projeto existe, mas ninguém além de você consegue usar ou testar com facilidade.",
    example:
      "Publicar um site na Vercel ou um backend em uma plataforma de nuvem é um deploy.",
    related: ["Build", "CI/CD", "Cloud"],
  },
  {
    term: "Dashboard",
    aliases: ["dashboard", "painel"],
    category: "Produto",
    summary: "Dashboard é um painel que reúne informações importantes em um só lugar.",
    definition:
      "Normalmente ele mostra métricas, gráficos, filtros e atalhos para ajudar alguém a entender a situação rapidamente.",
    importance:
      "É um formato muito comum em produtos internos, ferramentas de negócio e projetos de portfólio.",
    example:
      "Um painel de vendas pode mostrar faturamento, pedidos e desempenho por período.",
    related: ["BI", "Dataset", "UX"],
  },
  {
    term: "UX",
    aliases: ["ux", "experiencia do usuario", "experiencia de usuario"],
    category: "Produto",
    summary: "UX significa experiência do usuário.",
    definition:
      "É a forma como a pessoa percebe o produto ao usar: se está claro, rápido, confiável e fácil de entender.",
    importance:
      "Boa UX não é só beleza; é reduzir esforço, dúvidas e frustrações.",
    example:
      "Um formulário com mensagens simples e feedback imediato costuma oferecer UX melhor.",
    related: ["Acessibilidade", "CSS responsivo", "Dashboard"],
  },
  {
    term: "Node.js",
    aliases: ["node.js", "nodejs", "node"],
    category: "Backend",
    summary: "Node.js permite usar JavaScript fora do navegador, muito comum em backend.",
    definition:
      "Ele oferece um ambiente para rodar JavaScript no servidor, criar APIs, automatizar tarefas e construir ferramentas.",
    importance:
      "É uma porta de entrada popular para backend porque reaproveita JavaScript da web.",
    example:
      "Uma API de login pode ser criada com Node.js e responder requisições do frontend.",
    related: ["JavaScript", "API", "REST"],
  },
  {
    term: "Python",
    aliases: ["python"],
    category: "Backend / Dados",
    summary: "Python é uma linguagem muito usada em backend, automação e dados.",
    definition:
      "Ela ficou popular por ter sintaxe mais amigável e um ecossistema forte para várias áreas diferentes.",
    importance:
      "Por isso aparece tanto em trilhas iniciais e em vagas de dados.",
    example:
      "Você pode usar Python para criar uma API simples, automatizar tarefas ou analisar um CSV.",
    related: ["Pandas", "Dataset", "API"],
  },
  {
    term: "POO",
    aliases: ["poo", "orientacao a objetos", "orientação a objetos", "oop"],
    category: "Fundamentos",
    summary: "POO é um jeito de organizar código usando objetos e responsabilidades.",
    definition:
      "Ela agrupa dados e comportamentos em estruturas que representam entidades do sistema, como usuário, pedido ou produto.",
    importance:
      "Ajuda a pensar melhor na modelagem e na organização de projetos maiores.",
    example:
      "Uma classe de pedido pode reunir itens, status e métodos para calcular o total.",
    related: ["Arquitetura", "CRUD", "Node.js"],
  },
  {
    term: "REST",
    aliases: ["rest", "api rest", "rest api"],
    category: "Backend",
    summary: "REST é um estilo comum para organizar APIs na web.",
    definition:
      "A ideia é criar rotas previsíveis e usar métodos como GET, POST, PUT e DELETE para trabalhar com recursos do sistema.",
    importance:
      "Você encontra esse padrão em muitos projetos iniciais e profissionais.",
    example:
      "Uma API REST pode ter /usuarios para listar usuários e /usuarios/1 para ver um usuário específico.",
    related: ["API", "CRUD", "Middleware"],
  },
  {
    term: "SQL",
    aliases: ["sql"],
    category: "Banco de dados",
    summary: "SQL é a linguagem usada para conversar com bancos relacionais.",
    definition:
      "Com ela você cria tabelas, consulta registros, atualiza dados e relaciona informações.",
    importance:
      "SQL aparece em backend, dados, analytics e várias tarefas do dia a dia.",
    example:
      "Um SELECT busca dados; um INSERT adiciona novos registros ao banco.",
    related: ["PostgreSQL", "ORM", "Dataset"],
  },
  {
    term: "ORM",
    aliases: ["orm"],
    category: "Backend",
    summary: "ORM é uma camada que ajuda o código a conversar com o banco de dados usando objetos.",
    definition:
      "Em vez de escrever toda consulta SQL na mão, você usa métodos do ORM para criar, buscar e atualizar registros.",
    importance:
      "Isso acelera o desenvolvimento, embora ainda seja importante entender SQL por baixo.",
    example:
      "Um ORM pode transformar um objeto usuário em uma linha na tabela de usuários.",
    related: ["SQL", "CRUD", "Arquitetura"],
  },
  {
    term: "Autenticação",
    aliases: ["autenticacao", "autenticação", "login"],
    category: "Backend",
    summary: "Autenticação é verificar quem a pessoa é dentro do sistema.",
    definition:
      "Ela confirma se as credenciais estão corretas e se aquele usuário pode entrar.",
    importance:
      "É a base de qualquer fluxo que envolve conta, sessão ou área protegida.",
    example:
      "Quando alguém faz login com email e senha, o sistema executa um processo de autenticação.",
    related: ["JWT", "API", "Middleware"],
  },
  {
    term: "JWT",
    aliases: ["jwt", "token jwt", "token"],
    category: "Backend",
    summary: "JWT é um tipo de token usado para representar a sessão de um usuário.",
    definition:
      "Depois do login, o sistema pode gerar esse token para provar que a pessoa já foi autenticada.",
    importance:
      "Ele aparece bastante em APIs modernas e em projetos iniciais de autenticação.",
    example:
      "O frontend envia o JWT nas próximas requisições para acessar rotas protegidas.",
    related: ["Autenticação", "API", "Middleware"],
  },
  {
    term: "Arquitetura",
    aliases: ["arquitetura", "arquitetura de software"],
    category: "Backend",
    summary: "Arquitetura é a forma como as partes do sistema são organizadas.",
    definition:
      "Ela define separação de responsabilidades, fluxo de dados e como o projeto cresce sem virar um bloco confuso.",
    importance:
      "Boa arquitetura facilita manutenção, testes e evolução do produto.",
    example:
      "Separar rotas, serviços e acesso a dados já é um passo de arquitetura.",
    related: ["POO", "ORM", "CI/CD"],
  },
  {
    term: "Logs",
    aliases: ["logs", "log"],
    category: "Backend / DevOps",
    summary: "Logs são registros do que aconteceu no sistema.",
    definition:
      "Eles ajudam a acompanhar eventos, erros, avisos e comportamentos importantes durante a execução da aplicação.",
    importance:
      "Sem logs, fica muito mais difícil descobrir por que algo falhou.",
    example:
      "Se um cadastro quebra em produção, os logs podem mostrar em qual etapa ocorreu o erro.",
    related: ["Monitoramento", "Pipeline", "Arquitetura"],
  },
  {
    term: "Cache",
    aliases: ["cache"],
    category: "Backend",
    summary: "Cache é um armazenamento temporário usado para acelerar respostas.",
    definition:
      "Ele guarda dados já calculados ou buscados recentemente para evitar trabalho repetido.",
    importance:
      "Isso melhora desempenho e reduz pressão no banco ou em APIs externas.",
    example:
      "Uma lista muito acessada pode ser salva em cache por alguns minutos em vez de ser gerada do zero toda vez.",
    related: ["API", "Filas", "Cloud"],
  },
  {
    term: "Filas",
    aliases: ["filas", "queue", "queues"],
    category: "Backend",
    summary: "Filas servem para processar tarefas em etapas, sem exigir resposta imediata.",
    definition:
      "Elas colocam trabalhos em espera organizada, útil para ações mais pesadas ou que podem ser feitas em segundo plano.",
    importance:
      "Isso evita travar a aplicação principal e melhora estabilidade.",
    example:
      "Enviar email, gerar relatório e processar imagem são tarefas comuns para fila.",
    related: ["Cache", "Pipeline", "Arquitetura"],
  },
  {
    term: "CI/CD",
    aliases: [
      "ci/cd",
      "ci cd",
      "integracao continua",
      "integração contínua",
      "entrega continua",
      "entrega contínua",
    ],
    category: "DevOps",
    summary: "CI/CD automatiza partes do caminho entre codar e publicar.",
    definition:
      "CI normalmente cuida de validar mudanças com testes e checagens. CD continua esse fluxo para preparar ou executar a entrega.",
    importance:
      "Isso reduz erros manuais e deixa o processo de entrega mais confiável.",
    example:
      "Ao fazer push no repositório, um workflow pode rodar testes e depois liberar o deploy automaticamente.",
    related: ["Pipeline", "Deploy", "Git"],
  },
  {
    term: "CRUD",
    aliases: ["crud"],
    category: "Backend",
    summary: "CRUD resume as quatro operações básicas de muitos sistemas.",
    definition:
      "Create, Read, Update e Delete significam criar, ler, atualizar e remover dados.",
    importance:
      "Muitos primeiros projetos usam CRUD para praticar fluxo completo de aplicação.",
    example:
      "Uma API de tarefas costuma ter rotas para criar, listar, editar e excluir tarefas.",
    related: ["REST", "SQL", "ORM"],
  },
  {
    term: "Middleware",
    aliases: ["middleware", "middlewares"],
    category: "Backend",
    summary: "Middleware é uma etapa intermediária no caminho da requisição.",
    definition:
      "Ele pode validar dados, verificar autenticação, registrar logs ou transformar informações antes da resposta final.",
    importance:
      "É um recurso muito comum para organizar responsabilidades em APIs.",
    example:
      "Um middleware pode bloquear uma rota quando o usuário não enviou token válido.",
    related: ["Autenticação", "JWT", "REST"],
  },
  {
    term: "PostgreSQL",
    aliases: ["postgresql", "postgres"],
    category: "Banco de dados",
    summary: "PostgreSQL é um banco de dados relacional muito usado em projetos reais.",
    definition:
      "Ele armazena informações em tabelas e usa SQL para consultas, inserções e relacionamentos.",
    importance:
      "É uma ferramenta forte para aprender modelagem e persistência de dados.",
    example:
      "Pedidos, usuários e produtos podem ficar em tabelas relacionadas dentro do PostgreSQL.",
    related: ["SQL", "ORM", "CRUD"],
  },
  {
    term: "React Native",
    aliases: ["react native"],
    category: "Mobile",
    summary: "React Native é uma forma de criar apps usando JavaScript e a lógica de componentes do React.",
    definition:
      "Ele permite montar aplicativos mobile com boa parte da experiência de desenvolvimento parecida com a web.",
    importance:
      "É uma trilha popular para quem quer entrar em mobile reaproveitando conhecimento de frontend.",
    example:
      "Você pode criar um app de tarefas com navegação, listas e chamadas para API usando React Native.",
    related: ["React", "Build", "API"],
  },
  {
    term: "Flutter",
    aliases: ["flutter"],
    category: "Mobile",
    summary: "Flutter é um framework para criar apps multiplataforma com uma única base principal.",
    definition:
      "Ele usa a linguagem Dart e oferece muitos componentes visuais prontos para construir interfaces.",
    importance:
      "É uma opção forte para quem quer focar em mobile com boa consistência visual.",
    example:
      "Com Flutter, você pode criar o mesmo app para Android e iOS sem manter dois códigos separados desde o início.",
    related: ["Build", "API", "UX"],
  },
  {
    term: "Build",
    aliases: ["build", "builds"],
    category: "Mobile / DevOps",
    summary: "Build é a versão do projeto pronta para rodar ou ser publicada.",
    definition:
      "É o resultado do processo que empacota código, arquivos e configurações para execução em um ambiente real.",
    importance:
      "Sem build, você ainda está no código-fonte; com build, tem algo utilizável pelo sistema ou pelo usuário.",
    example:
      "Gerar um APK no Android ou a pasta final de um site são exemplos de build.",
    related: ["Deploy", "CI/CD", "React Native"],
  },
  {
    term: "Dataset",
    aliases: ["dataset", "datasets", "base de dados para analise", "base de dados para análise"],
    category: "Dados",
    summary: "Dataset é um conjunto organizado de dados para análise.",
    definition:
      "Pode ser uma planilha, CSV, tabela ou coleção de registros usados para estudar um problema ou gerar produto.",
    importance:
      "É a matéria-prima de quase todo trabalho em dados.",
    example:
      "Uma planilha com vendas por mês já pode ser um dataset para começar uma análise.",
    related: ["Pandas", "BI", "ETL"],
  },
  {
    term: "Pandas",
    aliases: ["pandas"],
    category: "Dados",
    summary: "Pandas é uma biblioteca Python muito usada para trabalhar com tabelas e limpeza de dados.",
    definition:
      "Ela facilita ler arquivos, filtrar linhas, tratar colunas e fazer análises iniciais com pouco código.",
    importance:
      "É uma das ferramentas mais comuns para quem está começando em dados.",
    example:
      "Você pode abrir um CSV com Pandas, remover valores faltantes e calcular médias rapidamente.",
    related: ["Python", "Dataset", "ETL"],
  },
  {
    term: "BI",
    aliases: ["bi", "business intelligence"],
    category: "Dados",
    summary: "BI é o uso de dados e visualizações para apoiar decisões de negócio.",
    definition:
      "Normalmente envolve dashboards, relatórios e indicadores que ajudam times a entender o que está acontecendo.",
    importance:
      "É uma porta de entrada comum para quem gosta de transformar números em clareza.",
    example:
      "Um painel que mostra vendas, metas e evolução semanal é um produto típico de BI.",
    related: ["Dashboard", "Dataset", "Storytelling"],
  },
  {
    term: "Storytelling",
    aliases: ["storytelling", "storytelling com dados"],
    category: "Dados",
    summary: "Storytelling é explicar dados de um jeito que faça sentido para alguém tomar decisão.",
    definition:
      "Não basta ter números corretos; você precisa conectar o que aconteceu, por que importa e o que fazer com isso.",
    importance:
      "Sem boa comunicação, uma análise forte pode perder impacto.",
    example:
      "Mostrar que a queda nas vendas começou após uma mudança de preço e sugerir um teste é storytelling aplicado.",
    related: ["BI", "Dashboard", "Dataset"],
  },
  {
    term: "ETL",
    aliases: ["etl"],
    category: "Dados",
    summary: "ETL significa extrair, transformar e carregar dados.",
    definition:
      "É um fluxo para pegar dados de uma origem, tratar o formato e colocar tudo em outro lugar pronto para uso.",
    importance:
      "Esse processo aparece muito em engenharia de dados e em rotinas de analytics.",
    example:
      "Você pode extrair dados de um sistema, padronizar datas e carregar o resultado em um banco para análise.",
    related: ["Dataset", "Pandas", "Cloud"],
  },
  {
    term: "ML",
    aliases: ["ml", "machine learning", "aprendizado de maquina", "aprendizado de máquina"],
    category: "Dados",
    summary: "ML é o uso de modelos que aprendem padrões a partir de dados.",
    definition:
      "Em vez de escrever todas as regras manualmente, você treina o sistema com exemplos para ele fazer previsões ou classificações.",
    importance:
      "É uma área mais avançada, mas aparece cedo como objetivo em muitas trilhas de dados.",
    example:
      "Um modelo pode aprender com históricos de fraude e estimar se uma nova transação parece suspeita.",
    related: ["Dataset", "Python", "ETL"],
  },
  {
    term: "Linux",
    aliases: ["linux"],
    category: "DevOps",
    summary: "Linux é um sistema operacional muito usado em servidores e ambientes de desenvolvimento.",
    definition:
      "Ele é famoso por ser estável, flexível e por oferecer bastante controle pelo terminal.",
    importance:
      "Por isso aparece bastante em backend, cloud e DevOps.",
    example:
      "Muitos servidores que hospedam aplicações rodam Linux por trás.",
    related: ["Shell", "Docker", "Cloud"],
  },
  {
    term: "Shell",
    aliases: ["shell", "terminal", "linha de comando"],
    category: "DevOps",
    summary: "Shell é a forma de conversar com o sistema por comandos de texto.",
    definition:
      "Você digita instruções para navegar em pastas, rodar scripts, manipular arquivos e automatizar tarefas.",
    importance:
      "Isso dá velocidade e controle, especialmente em ambientes de servidor e automação.",
    example:
      "Rodar um comando para subir containers ou executar testes é uso de shell.",
    related: ["Linux", "Pipeline", "Docker"],
  },
  {
    term: "Docker",
    aliases: ["docker"],
    category: "DevOps",
    summary: "Docker é uma ferramenta para empacotar aplicações de forma previsível.",
    definition:
      "Ela ajuda a levar código, dependências e ambiente juntos, reduzindo o clássico problema de 'na minha máquina funciona'.",
    importance:
      "Docker é uma base forte para quem quer aprender deploy, ambientes e automação.",
    example:
      "Você pode empacotar uma API e o banco em containers para qualquer pessoa rodar localmente com menos atrito.",
    related: ["Container", "Deploy", "CI/CD"],
  },
  {
    term: "Container",
    aliases: ["container", "containers"],
    category: "DevOps",
    summary: "Container é o pacote isolado que roda sua aplicação com o que ela precisa.",
    definition:
      "Ele não é exatamente uma máquina inteira, mas um ambiente controlado para executar o software de forma consistente.",
    importance:
      "Isso facilita teste local, deploy e colaboração em equipe.",
    example:
      "Dois desenvolvedores podem rodar o mesmo container e obter comportamento parecido mesmo em computadores diferentes.",
    related: ["Docker", "Kubernetes", "Cloud"],
  },
  {
    term: "Cloud",
    aliases: ["cloud", "nuvem"],
    category: "DevOps",
    summary: "Cloud é o uso de infraestrutura e serviços pela internet em vez de depender do seu próprio computador.",
    definition:
      "Você aluga processamento, armazenamento, banco de dados e outras peças conforme a necessidade do projeto.",
    importance:
      "É o caminho mais comum para publicar, escalar e operar aplicações hoje.",
    example:
      "Hospedar um backend em um provedor como AWS, Azure ou GCP é usar cloud.",
    related: ["Deploy", "Docker", "IaC"],
  },
  {
    term: "Kubernetes",
    aliases: ["kubernetes", "k8s"],
    category: "DevOps",
    summary: "Kubernetes é uma plataforma para organizar muitos containers em produção.",
    definition:
      "Ele ajuda a distribuir cargas, reiniciar o que falha, escalar serviços e manter o ambiente mais controlado.",
    importance:
      "É um passo mais avançado depois de entender Docker e deploy básico.",
    example:
      "Em vez de subir containers manualmente um por um, o Kubernetes cuida da orquestração.",
    related: ["Container", "Docker", "SRE"],
  },
  {
    term: "IaC",
    aliases: ["iac", "infra as code", "infrastructure as code"],
    category: "DevOps",
    summary: "IaC significa definir infraestrutura por código.",
    definition:
      "Em vez de configurar tudo manualmente, você descreve servidores, redes e serviços em arquivos versionáveis.",
    importance:
      "Isso traz repetição, controle e segurança para montar ambientes.",
    example:
      "Criar a infraestrutura com arquivos de Terraform é um exemplo clássico de IaC.",
    related: ["Cloud", "Git", "CI/CD"],
  },
  {
    term: "SRE",
    aliases: ["sre", "site reliability engineering"],
    category: "DevOps",
    summary: "SRE é uma abordagem focada em confiabilidade e operação saudável dos sistemas.",
    definition:
      "Ela mistura engenharia de software com práticas operacionais para reduzir falhas e melhorar estabilidade.",
    importance:
      "É útil para pensar além do deploy e olhar para disponibilidade, incidentes e qualidade operacional.",
    example:
      "Definir metas de disponibilidade e responder a incidentes faz parte do universo de SRE.",
    related: ["Kubernetes", "Logs", "Pipeline"],
  },
  {
    term: "Pipeline",
    aliases: ["pipeline", "workflow", "workflows"],
    category: "DevOps",
    summary: "Pipeline é uma sequência automatizada de etapas do projeto.",
    definition:
      "Ela pode incluir instalar dependências, rodar testes, gerar build e publicar a aplicação.",
    importance:
      "Pipelines ajudam a reduzir trabalho manual e tornam o fluxo mais previsível.",
    example:
      "Um pipeline no GitHub Actions pode validar o código a cada push.",
    related: ["CI/CD", "Build", "Deploy"],
  },
  {
    term: "JSON",
    aliases: ["json"],
    category: "Web",
    summary: "JSON é um formato simples para organizar e trocar dados.",
    definition:
      "Ele representa informações em pares de chave e valor, algo bem comum em respostas de API.",
    importance:
      "Você vai encontrar JSON o tempo todo ao integrar frontend, backend e serviços externos.",
    example:
      "Uma API pode devolver um objeto com nome, email e status em formato JSON.",
    related: ["API", "Fetch API", "JavaScript"],
  },
  {
    term: "Monitoramento",
    aliases: ["monitoramento", "metricas", "métricas", "observabilidade"],
    category: "DevOps",
    summary: "Monitoramento é acompanhar a saúde e o comportamento do sistema.",
    definition:
      "Ele usa métricas, logs, alertas e visualizações para mostrar se a aplicação está funcionando bem.",
    importance:
      "Sem monitoramento, o time só descobre problemas quando o usuário reclama.",
    example:
      "Um gráfico que mostra aumento de erro e lentidão após um deploy faz parte do monitoramento.",
    related: ["Logs", "SRE", "Pipeline"],
  },
];

const glossarySuggestionsByArea = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "DOM",
    "API",
    "React",
    "Acessibilidade",
    "Deploy",
  ],
  backend: [
    "Node.js",
    "API",
    "REST",
    "SQL",
    "ORM",
    "Autenticação",
    "JWT",
    "CI/CD",
  ],
  mobile: [
    "React Native",
    "Flutter",
    "API",
    "Props e estado",
    "Build",
    "Deploy",
    "UX",
    "Autenticação",
  ],
  data: [
    "Python",
    "SQL",
    "Dataset",
    "Pandas",
    "Dashboard",
    "BI",
    "ETL",
    "ML",
  ],
  devops: [
    "Linux",
    "Shell",
    "Docker",
    "Container",
    "CI/CD",
    "Pipeline",
    "Cloud",
    "Kubernetes",
  ],
};

const areaOrder = ["frontend", "backend", "mobile", "data", "devops"];

const studyHeroTitle = document.getElementById("studyHeroTitle");
const studyHeroDescription = document.getElementById("studyHeroDescription");
const studyAreaLabel = document.getElementById("studyAreaLabel");
const studyAreaSupport = document.getElementById("studyAreaSupport");
const studySwitcher = document.getElementById("studySwitcher");
const weeklyChecklist = document.getElementById("weeklyChecklist");
const weeklyPlan = document.getElementById("weeklyPlan");
const featuredContent = document.getElementById("featuredContent");
const moduleList = document.getElementById("moduleList");
const resourceGrid = document.getElementById("resourceGrid");
const projectGrid = document.getElementById("projectGrid");
const exerciseGrid = document.getElementById("exerciseGrid");
const glossarySection = document.getElementById("glossarySection");
const glossaryForm = document.getElementById("glossaryForm");
const glossaryInput = document.getElementById("glossaryInput");
const glossarySuggestions = document.getElementById("glossarySuggestions");
const glossaryStatus = document.getElementById("glossaryStatus");
const glossaryTerm = document.getElementById("glossaryTerm");
const glossaryCategory = document.getElementById("glossaryCategory");
const glossarySummary = document.getElementById("glossarySummary");
const glossaryDefinition = document.getElementById("glossaryDefinition");
const glossaryImportance = document.getElementById("glossaryImportance");
const glossaryExample = document.getElementById("glossaryExample");
const glossaryRelated = document.getElementById("glossaryRelated");

let activeArea = "frontend";

function getStoredArea() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("area");
  const fromStorage = window.localStorage.getItem("mapaDevSelectedCareer");

  if (studyTracks[fromQuery]) {
    return fromQuery;
  }

  if (studyTracks[fromStorage]) {
    return fromStorage;
  }

  return "frontend";
}

function updateUrl(area) {
  const url = new URL(window.location.href);
  url.searchParams.set("area", area);
  window.history.replaceState({}, "", url);
}

function renderList(target, items) {
  target.innerHTML = "";

  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    target.appendChild(item);
  });
}

function normalizeTerm(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9./+\- ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const glossaryAliasList = glossaryEntries.flatMap((entry) =>
  [entry.term, ...(entry.aliases || [])]
    .map((alias) => ({
      entry,
      alias,
      normalized: normalizeTerm(alias),
    }))
    .filter((item) => item.normalized),
);

const glossaryExactLookup = new Map();
glossaryAliasList.forEach(({ entry, normalized }) => {
  if (!glossaryExactLookup.has(normalized)) {
    glossaryExactLookup.set(normalized, entry);
  }
});

function findExactGlossaryEntry(query) {
  const normalizedQuery = normalizeTerm(query);
  return glossaryExactLookup.get(normalizedQuery) || null;
}

function findGlossaryEntry(query) {
  const normalizedQuery = normalizeTerm(query);

  if (!normalizedQuery) {
    return null;
  }

  const exactEntry = findExactGlossaryEntry(query);
  if (exactEntry) {
    return { entry: exactEntry, mode: "exact" };
  }

  const scoredMatches = glossaryEntries
    .map((entry) => {
      let score = 0;

      [entry.term, ...(entry.aliases || [])].forEach((alias) => {
        const normalizedAlias = normalizeTerm(alias);

        if (!normalizedAlias) {
          return;
        }

        if (normalizedQuery.includes(normalizedAlias)) {
          score = Math.max(score, 90 + normalizedAlias.length / 100);
          return;
        }

        if (normalizedAlias.includes(normalizedQuery)) {
          score = Math.max(score, 76 + normalizedQuery.length / 100);
          return;
        }

        const queryTokens = normalizedQuery.split(" ");
        const aliasTokens = normalizedAlias.split(" ");
        const overlap = queryTokens.filter((token) => aliasTokens.includes(token)).length;

        if (overlap > 0) {
          score = Math.max(score, overlap * 20);
        }
      });

      return { entry, score };
    })
    .filter((item) => item.score >= 40)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.entry.term.localeCompare(b.entry.term, "pt-BR", { sensitivity: "base" }),
    );

  if (!scoredMatches.length) {
    return null;
  }

  return {
    entry: scoredMatches[0].entry,
    mode: scoredMatches[0].score >= 90 ? "query" : "approximate",
  };
}

function createGlossaryChip(term, label = term) {
  return `
    <button
      type="button"
      data-glossary-term="${escapeHtml(term)}"
      title="Ver explicacao no Dicionario IA"
      aria-label="Ver explicacao de ${escapeHtml(label)} no Dicionario IA"
    >
      ${escapeHtml(label)}
    </button>
  `;
}

function renderGlossaryChipRow(target, terms = []) {
  const uniqueTerms = [...new Set(terms)]
    .map((term) => findExactGlossaryEntry(term))
    .filter(Boolean);

  target.innerHTML = uniqueTerms.map((entry) => createGlossaryChip(entry.term)).join("");
}

function getGlossarySuggestions(area) {
  return glossarySuggestionsByArea[area] || glossarySuggestionsByArea.frontend;
}

function renderGlossaryState(entry, options = {}) {
  glossaryStatus.textContent = options.status || "Termo encontrado";
  glossaryTerm.textContent = entry.term;
  glossaryCategory.textContent = entry.category;
  glossarySummary.textContent = options.summary || entry.summary;
  glossaryDefinition.textContent = entry.definition;
  glossaryImportance.textContent = entry.importance;
  glossaryExample.textContent = entry.example;
  renderGlossaryChipRow(glossaryRelated, entry.related);
}

function renderGlossaryFallback(query = "") {
  const suggestions = getGlossarySuggestions(activeArea);

  glossaryStatus.textContent = "Ainda n\u00e3o achei";
  glossaryTerm.textContent = "Tente um termo mais direto";
  glossaryCategory.textContent = "Ajuda";
  glossarySummary.textContent =
    query.trim().length > 0
      ? `N\u00e3o encontrei uma defini\u00e7\u00e3o pronta para "${query.trim()}". Tente a sigla, a palavra principal ou use um dos atalhos abaixo.`
      : "Escreva uma pergunta curta ou toque em um termo t\u00e9cnico da trilha.";
  glossaryDefinition.textContent =
    "Esta primeira vers\u00e3o entende melhor termos como API, deploy, SQL, Docker e React.";
  glossaryImportance.textContent =
    "Quanto mais direto for o termo, maior a chance de encontrar uma explica\u00e7\u00e3o boa para iniciantes.";
  glossaryExample.textContent =
    "Exemplos de busca: o que \u00e9 API, explica CI/CD, para que serve Docker.";
  renderGlossaryChipRow(glossaryRelated, suggestions);
}

function explainGlossaryQuery(query, { scroll = false, source = "search" } = {}) {
  const cleanedQuery = query.trim();
  const match = findGlossaryEntry(cleanedQuery);

  if (!match) {
    renderGlossaryFallback(cleanedQuery);
  } else {
    const statusByMode = {
      default: "Sugest\u00e3o da trilha",
      exact: "Termo encontrado",
      query: "Pergunta entendida",
      approximate: "Resultado mais pr\u00f3ximo",
    };

    let summary = match.entry.summary;
    let status = statusByMode[match.mode] || "Termo encontrado";
    if (match.mode === "approximate" && cleanedQuery) {
      summary = `Usei "${match.entry.term}" como o termo mais pr\u00f3ximo para "${cleanedQuery}". ${match.entry.summary}`;
    }

    if (source === "default") {
      status = "Sugest\u00e3o da trilha";
      summary = `${match.entry.summary} Voc\u00ea pode escrever outra pergunta ou tocar em um termo da trilha.`;
    }

    renderGlossaryState(match.entry, {
      status,
      summary,
    });
  }

  if (scroll) {
    glossarySection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderPills(items = []) {
  return items
    .map((item) => {
      const entry = findExactGlossaryEntry(item);

      if (!entry) {
        return `<span>${escapeHtml(item)}</span>`;
      }

      return createGlossaryChip(entry.term, item);
    })
    .join("");
}

function renderSwitcher(activeArea) {
  studySwitcher.innerHTML = "";

  areaOrder.forEach((area) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `switch-pill${area === activeArea ? " active" : ""}`;
    button.textContent = studyTracks[area].label;
    button.addEventListener("click", () => renderArea(area));
    studySwitcher.appendChild(button);
  });
}

function renderFeatured(track) {
  const { featured } = track;
  const supportingMarkup = featured.supporting
    .map(
      (item) => `
        <article class="featured-side-card">
          <span class="resource-type">${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <a class="button button-secondary resource-link" href="${item.href}" target="_blank" rel="noreferrer">${item.cta}</a>
        </article>
      `,
    )
    .join("");

  const mediaMarkup =
    featured.type === "video" && featured.embedUrl
      ? `
        <div class="featured-media">
          <iframe
            src="${featured.embedUrl}"
            title="${featured.title}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      `
      : `
        <div class="featured-media featured-placeholder">
          <span class="featured-placeholder-label">${featured.label}</span>
          <strong>${featured.title}</strong>
          <p>${featured.meta}</p>
        </div>
      `;

  featuredContent.innerHTML = `
    <div class="featured-layout">
      <article class="featured-card featured-primary">
        <div class="featured-copy">
          <span class="featured-badge">${featured.label}</span>
          <h3>${featured.title}</h3>
          <p>${featured.description}</p>
          <strong class="featured-meta">${featured.meta}</strong>
          <ul class="featured-bullets">
            ${featured.bullets.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="featured-actions">
            <a class="button button-primary" href="${featured.href}" target="_blank" rel="noreferrer">${featured.cta}</a>
          </div>
        </div>
        ${mediaMarkup}
      </article>

      <div class="featured-side-list">
        ${supportingMarkup}
      </div>
    </div>
  `;
}

function renderModules(track) {
  moduleList.innerHTML = "";

  track.modules.forEach((module) => {
    const card = document.createElement("article");
    card.className = "module-card";
    card.innerHTML = `
      <div class="module-stage">${module.stage}</div>
      <div class="module-content">
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <div class="pill-row">
          ${renderPills(module.items)}
        </div>
      </div>
    `;
    moduleList.appendChild(card);
  });
}

function renderResources(track) {
  resourceGrid.innerHTML = "";

  track.resources.forEach((resource) => {
    const card = document.createElement("article");
    card.className = "resource-card";
    card.innerHTML = `
      <span class="resource-type">${resource.type}</span>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <strong>${resource.meta}</strong>
      <div class="resource-actions">
        <a class="button button-secondary resource-link" href="${resource.href}" target="_blank" rel="noreferrer">${resource.cta}</a>
      </div>
    `;
    resourceGrid.appendChild(card);
  });
}

function renderProjects(track) {
  projectGrid.innerHTML = "";

  track.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <span class="project-level">${project.level}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="pill-row">
        ${renderPills(project.stack)}
      </div>
      <div class="project-deliverable">
        <strong>Entregável sugerido</strong>
        <p>${project.deliverable}</p>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

function createQuizExercise(exercise) {
  const card = document.createElement("article");
  card.className = "exercise-card";
  card.innerHTML = `
    <span class="exercise-kind">${exercise.label}</span>
    <h3>${exercise.title}</h3>
    <p>${exercise.prompt}</p>
    <div class="exercise-options">
      ${exercise.options
        .map(
          (option, index) => `
            <button type="button" class="exercise-option" data-index="${index}">
              <strong>${option.title}</strong>
              <span>${option.copy}</span>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="exercise-footer">
      <button type="button" class="button button-primary exercise-submit" disabled>Conferir resposta</button>
      <div class="exercise-feedback" aria-live="polite"></div>
    </div>
  `;

  let selectedIndex = null;
  const optionButtons = [...card.querySelectorAll(".exercise-option")];
  const submitButton = card.querySelector(".exercise-submit");
  const feedback = card.querySelector(".exercise-feedback");

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedIndex = Number(button.dataset.index);

      optionButtons.forEach((optionButton, index) => {
        optionButton.classList.toggle("is-selected", index === selectedIndex);
      });

      submitButton.disabled = false;
      feedback.className = "exercise-feedback";
      feedback.textContent = "";
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedIndex === null) {
      return;
    }

    const isCorrect = selectedIndex === exercise.answer;

    optionButtons.forEach((button, index) => {
      button.disabled = true;
      button.classList.toggle("is-correct", index === exercise.answer);
      button.classList.toggle(
        "is-wrong",
        index === selectedIndex && selectedIndex !== exercise.answer,
      );
    });

    submitButton.disabled = true;
    submitButton.textContent = "Resposta verificada";

    feedback.className = `exercise-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? "Boa resposta." : "Quase lá."}</strong>
      <span>${exercise.explanation}</span>
    `;
  });

  return card;
}

function createMissionExercise(exercise) {
  const card = document.createElement("article");
  card.className = "exercise-card mission-card";
  card.innerHTML = `
    <span class="exercise-kind">${exercise.label}</span>
    <h3>${exercise.title}</h3>
    <p>${exercise.prompt}</p>
    <ul class="mission-list">
      ${exercise.tasks.map((task) => `<li>${task}</li>`).join("")}
    </ul>
    <div class="mission-deliverable">
      <strong>Entregável sugerido</strong>
      <p>${exercise.deliverable}</p>
    </div>
    <details class="mission-solution">
      <summary>Ver roteiro sugerido</summary>
      <p>${exercise.solution}</p>
    </details>
  `;

  return card;
}

function renderExercises(track) {
  exerciseGrid.innerHTML = "";

  track.exercises.forEach((exercise) => {
    const card =
      exercise.kind === "quiz"
        ? createQuizExercise(exercise)
        : createMissionExercise(exercise);

    exerciseGrid.appendChild(card);
  });
}

function renderGlossarySuggestionsForArea(area) {
  renderGlossaryChipRow(glossarySuggestions, getGlossarySuggestions(area));
}

function renderArea(area) {
  const track = studyTracks[area];
  activeArea = area;

  window.localStorage.setItem("mapaDevSelectedCareer", area);
  updateUrl(area);

  studyHeroTitle.textContent = track.heroTitle;
  studyHeroDescription.textContent = track.heroDescription;
  studyAreaLabel.textContent = track.label;
  studyAreaSupport.textContent = track.support;

  renderSwitcher(area);
  renderList(weeklyChecklist, track.checklist);
  renderList(weeklyPlan, track.weeklyPlan);
  renderFeatured(track);
  renderModules(track);
  renderResources(track);
  renderProjects(track);
  renderExercises(track);
  renderGlossarySuggestionsForArea(area);

  if (glossaryInput.value.trim()) {
    explainGlossaryQuery(glossaryInput.value, { source: "search" });
  } else {
    explainGlossaryQuery(getGlossarySuggestions(area)[0], { source: "default" });
  }
}

glossaryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  explainGlossaryQuery(glossaryInput.value, { source: "search" });
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-glossary-term]");

  if (!trigger) {
    return;
  }

  const term = trigger.dataset.glossaryTerm;
  glossaryInput.value = term;
  explainGlossaryQuery(term, { scroll: true, source: "chip" });
});

renderArea(getStoredArea());
