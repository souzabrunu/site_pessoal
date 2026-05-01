export type ProjectLink = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type ContactItem = {
  label: string;
  href: string;
  value: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  technicalChallenge: string;
  decisions: string;
  learning: string;
  links: ProjectLink[];
};

export type Certificate = {
  name: string;
  issuer: string;
  date?: string;
  duration?: string;
  summary: string;
  link?: string;
};

export type Technology = {
  name: string;
  context: string;
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
};

export type Profile = {
  name: string;
  resumeLabel: string;
  role: string;
  headline: string;
  intro: string;
  quickFacts: ProjectLink[];
  currentFocus: string[];
  strengths: string[];
  searchFor: string;
  careerGoals: string[];
  contact: ContactItem[];
  technologies: Technology[];
  timeline: TimelineItem[];
  projects: Project[];
  certificates: Certificate[];
};

export const profile: Profile = {
  name: "Bruno Souza",
  resumeLabel: "Currículo em PDF",
  role: "Construindo minha base\npara atuar com\nbackend",
  headline:
    "Desenvolvo projetos em Python para fortalecer lógica, CRUD, persistência de dados e organização de código, construindo uma base sólida para backend.",
  intro:
    "Este site funciona como meu currículo vivo. Aqui reúno projetos, certificados e objetivos profissionais para mostrar como estou transformando estudo consistente em repertório técnico prático.",
  quickFacts: [
    { label: "Projetos", href: "#projetos" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Currículo", href: "/cur.pdf" },
  ],
  currentFocus: [
    "Prática de CRUD com fluxos de cadastro, consulta, edição e exclusão em aplicações de terminal.",
    "Persistência local com JSON e CSV para reforçar leitura, escrita e consistência de dados.",
    "Organização de funções, validações e tratamento de erros para escrever código mais claro e previsível.",
    "Evolução dos fundamentos de Python em direção a APIs, banco de dados e aplicações backend.",
  ],
  strengths: [
    "Interesse genuíno em entender o ciclo completo dos dados: cadastro, consulta, atualização e persistência.",
    "Busca por clareza na estrutura do código antes de aumentar a complexidade da solução.",
    "Aprendizado constante por meio de projetos pequenos, iterativos e publicáveis.",
  ],
  searchFor:
    "Busco minha primeira oportunidade para evoluir de projetos fundamentais em Python para desenvolvimento backend em contexto profissional, aprendendo com sistemas reais, boas práticas e pessoas mais experientes.",
  careerGoals: [
    "Transformar minha base atual em experiência prática com APIs, banco de dados e aplicações backend.",
    "Atuar em times que valorizem código limpo, aprendizado contínuo e evolução consistente.",
    "Ganhar experiência com sistemas reais que exijam regras de negócio, manutenção e responsabilidade técnica crescente.",
  ],
  contact: [
    { label: "GitHub", href: "https://github.com/souzabrunu", value: "github.com/souzabrunu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bruno-souza-ti/?skipRedirect=true",
      value: "linkedin.com/in/bruno-souza-9250a4356",
    },
    { label: "Currículo", href: "/cur.pdf", value: "Versão atualizada em PDF" },
    { label: "Email", href: "mailto:souzabrunu@yahoo.com", value: "souzabrunu@yahoo.com" },
  ],
  technologies: [
    {
      name: "Python",
      context: "Base principal dos meus projetos e da minha evolução em lógica e estruturação de código.",
    },
    {
      name: "Git e GitHub",
      context: "Versionamento dos projetos, organização de histórico e publicação do portfólio.",
    },
    {
      name: "JSON e CSV",
      context: "Persistência local de dados para praticar leitura, escrita e consistência entre execuções.",
    },
    {
      name: "CRUD",
      context: "Fluxos de cadastro, consulta, edição e exclusão aplicados em projetos com regras de negócio simples.",
    },
  ],
  timeline: [
    {
      title: "Primeiros projetos CRUD",
      period: "Projetos autorais",
      description: "Passei a construir soluções com cadastro, consulta, edição e exclusão para entender melhor fluxo de dados.",
    },
    {
      title: "Persistência com JSON e CSV",
      period: "Evolução técnica",
      description: "Adicionei armazenamento local aos projetos para praticar leitura, escrita e consistência de informações.",
    },
    {
      title: "Publicação no GitHub",
      period: "Portfólio em construção",
      description: "Organizei os projetos para publicação e passei a usar o GitHub como parte da minha apresentação profissional.",
    },
    {
      title: "Certificações complementares",
      period: "Aprendizado complementar",
      description: "Reforcei minha base com estudos em versionamento e fundamentos de computação em nuvem.",
    },
    {
      title: "Foco atual em backend",
      period: "Próximo passo profissional",
      description: "Meu objetivo agora é evoluir de projetos fundamentais em Python para APIs, banco de dados e sistemas backend reais.",
    },
  ],
  certificates: [
    {
      name: "Git e GitHub para Iniciantes com Projetos Reais",
      issuer: "Udemy",
      duration: "3h",
      summary:
        "Formação voltada ao uso prático de Git e GitHub em projetos reais, reforçando versionamento de código, organização de histórico e fluxo básico de colaboração.",
      link: "https://ude.my/UC-2175b7e5-9001-4dcd-a10d-4b61cf0b5099",
    },
    {
      name: "AWS Cloud Practitioner PT",
      issuer: "AWS",
      duration: "12h",
      summary:
        "Trilha de aprendizagem focada em fundamentos de computação em nuvem, com visão inicial sobre serviços da AWS e base para evolução em infraestrutura e arquitetura.",
      link: "/aws-cloud-practitioner-pt.pdf",
    },
    {
      name: "Cloud+Fundamentals",
      issuer: "Fundamentos de nuvem",
      duration: "3h11",
      summary:
        "Formação complementar voltada a fundamentos de computação em nuvem, reforçando conceitos essenciais de cloud e ampliando minha base para estudos em infraestrutura e serviços.",
      link: "/cloud-fundamentals.pdf",
    },
  ],
  projects: [

    {
      name: "Calculadora Interativa Python",
      description:
        "Aplicação de terminal em Python criada para reunir múltiplos fluxos de interação, como operações matemáticas, cálculo de IMC, desconto e jogo de adivinhação.",
      stack: ["Python"],
      technicalChallenge:
        "Organizar múltiplas funcionalidades em um fluxo único, com navegação por menu e tratamento de entradas inválidas.",
      decisions:
        "Separei cada funcionalidade em funções independentes e mantive um controlador central para coordenar a navegação do programa.",
      learning:
        "Fortaleci lógica de programação, tratamento de exceções e organização de código em uma aplicação com múltiplos fluxos.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/Calculadora_Desconto/tree/main" }
      ],
    },
    {
      name: "Sistema de Estoque de Produtos em Python",
      description:
        "Aplicação de terminal voltada ao controle de estoque, com cadastro, consulta, edição e remoção de produtos, mantendo os dados persistidos em JSON.",
      stack: ["Python", "JSON", "Colorama"],
      technicalChallenge:
        "Garantir persistência entre execuções e tratar entradas inválidas sem comprometer a continuidade do fluxo principal.",
      decisions:
        "Estruturei operações separadas para cada ação do CRUD, usando JSON como armazenamento local e validações para leitura e escrita mais seguras.",
      learning:
        "Evoluí em organização de lógica, manipulação de arquivos, validações e estruturação de um CRUD mais próximo de um contexto real.",
      links: [
        { label: "Repositório em atualização", href: "#", disabled: true }
      ],
    },
    {
      name: "Gerenciador de Clientes para Salão",
      description:
        "Aplicação de terminal em Python para cadastro, consulta e exclusão de clientes, com persistência em arquivo CSV.",
      stack: ["Python", "CSV"],
      technicalChallenge:
        "Organizar operações de cadastro e busca com persistência local, mantendo leitura e regravação consistentes da base de clientes.",
      decisions:
        "Usei csv.DictWriter e csv.DictReader para padronizar os dados, com criação automática do arquivo e exclusão feita pela reconstrução da base.",
      learning:
        "Pratiquei manipulação de arquivos, estruturação de CRUD, buscas por filtros e tratamento de erros em uma aplicação orientada a dados.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/Gerenciador-Clientes" }
      ],
    }
  ]
};
