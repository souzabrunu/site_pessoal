export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  stack: string[];
  challenge: string;
  decision: string;
  links: ProjectLink[];
};

export type Credential = {
  name: string;
  issuer: string;
  duration: string;
  link: string;
};

export const profile = {
  name: "Bruno Souza",
  role: "Desenvolvedor de software",
  headline: "Construo produtos digitais e aplicações orientadas a dados.",
  introduction:
    "Uno visão de produto, desenvolvimento e aprendizado contínuo para transformar problemas reais em experiências simples — com foco crescente em backend.",
  location: "Rio de Janeiro, Brasil",
  availability: "Aberto a oportunidades em desenvolvimento de software",
  contact: {
    email: "mailto:souzabrunu@yahoo.com",
    emailLabel: "souzabrunu@yahoo.com",
    github: "https://github.com/souzabrunu",
    linkedin: "https://www.linkedin.com/in/bruno-souza-9250a4356",
    resume: "/cur.pdf",
  },
  featuredProject: {
    name: "Rivio",
    eyebrow: "Produto em operação · 2026",
    headline: "Gestão que acompanha a rotina de profissionais da beleza.",
    description:
      "Concebi e desenvolvi um SaaS para profissionais autônomos organizarem agenda, clientes, serviços, comandas e financeiro em um único fluxo.",
    role: "Concepção, produto e desenvolvimento",
    status: "Publicado, com acesso gratuito e planos recorrentes",
    capabilities: [
      "Agenda diária e semanal",
      "Histórico de clientes e atendimentos",
      "Comandas, recebimentos e financeiro",
      "PWA para celular e desktop",
      "Planos e cobrança via Stripe",
      "Upload de fotos do atendimento",
    ],
    decisions: [
      {
        title: "Problema",
        text: "Substituir cadernos e planilhas por uma rotina de gestão simples para quem atende de forma autônoma.",
      },
      {
        title: "Decisão de produto",
        text: "Organizar os fluxos em torno do atendimento: agenda, cliente, comanda, recebimento e acompanhamento financeiro.",
      },
      {
        title: "Entrega",
        text: "Um produto responsivo, instalável como PWA e publicado com onboarding, planos e cobrança recorrente.",
      },
    ],
    links: [
      { label: "Conhecer o produto", href: "https://www.rivioapp.com.br" },
    ],
  },
  projects: [
    {
      name: "Sistema de estoque",
      eyebrow: "Python · JSON · Colorama",
      description:
        "Aplicação de terminal para cadastrar, consultar, editar e remover produtos, com persistência local e leitura de estoque mínimo.",
      stack: ["Python", "JSON", "CRUD"],
      challenge:
        "Manter os dados consistentes entre execuções e preservar o fluxo mesmo diante de entradas inválidas.",
      decision:
        "Separei cada operação em uma responsabilidade e concentrei leitura, escrita e validações em fluxos previsíveis.",
      links: [
        { label: "Ver código", href: "https://github.com/souzabrunu/estoque_produtos" },
      ],
    },
    {
      name: "Gerenciador de clientes",
      eyebrow: "Python · CSV",
      description:
        "Sistema de linha de comando para cadastro, consulta e exclusão de clientes de salão, com base persistida em CSV.",
      stack: ["Python", "CSV", "Dados"],
      challenge:
        "Padronizar cadastro e busca sem perder consistência durante a regravação da base de clientes.",
      decision:
        "Usei DictReader e DictWriter, criação automática do arquivo e reconstrução segura da base na exclusão.",
      links: [
        { label: "Ver código", href: "https://github.com/souzabrunu/gerenciador_clientes" },
      ],
    },
    {
      name: "Calculadora interativa",
      eyebrow: "Python · CLI",
      description:
        "Aplicação que reúne operações matemáticas, cálculo de IMC, descontos e um jogo de adivinhação em uma navegação única.",
      stack: ["Python", "CLI", "Validação"],
      challenge:
        "Coordenar múltiplos fluxos e tratar entradas inválidas sem transformar o programa em um bloco monolítico.",
      decision:
        "Isolei cada funcionalidade em funções independentes e mantive um controlador central para a navegação.",
      links: [
        { label: "Ver código", href: "https://github.com/souzabrunu/Calculadora_Desconto" },
      ],
    },
  ] satisfies Project[],
  capabilities: [
    {
      title: "Produto e entrega",
      description:
        "Da leitura do problema ao lançamento: definição de fluxos, experiência responsiva, publicação e evolução do produto.",
      items: ["Descoberta", "Regras de negócio", "PWA", "Iteração"],
    },
    {
      title: "Aplicações orientadas a dados",
      description:
        "Modelagem de cadastros, validações e persistência com atenção à clareza do fluxo e à consistência dos dados.",
      items: ["Python", "JSON", "CSV", "CRUD"],
    },
    {
      title: "Prática de engenharia",
      description:
        "Código organizado por responsabilidade, versionamento e uso criterioso de IA como apoio ao desenvolvimento.",
      items: ["Git", "GitHub", "TypeScript", "IA aplicada"],
    },
  ],
  journey: [
    {
      period: "Agora",
      title: "Produto real e evolução em backend",
      description:
        "Mantenho o Rivio em operação enquanto aprofundo APIs, bancos de dados e arquitetura de aplicações.",
    },
    {
      period: "2025—2026",
      title: "Projetos orientados a dados",
      description:
        "Construí aplicações em Python com CRUD, validações e persistência em JSON e CSV, publicadas no GitHub.",
    },
    {
      period: "Formação",
      title: "Engenharia da Computação",
      description:
        "Desenvolvo fundamentos de computação e amplio a base técnica com cursos de versionamento e cloud.",
    },
  ],
  credentials: [
    {
      name: "Git e GitHub para Iniciantes com Projetos Reais",
      issuer: "Udemy",
      duration: "3h",
      link: "https://ude.my/UC-2175b7e5-9001-4dcd-a10d-4b61cf0b5099",
    },
    {
      name: "AWS Cloud Practitioner PT",
      issuer: "AWS · trilha de aprendizagem",
      duration: "12h",
      link: "/aws-cloud-practitioner-pt.pdf",
    },
    {
      name: "Cloud Fundamentals",
      issuer: "Curso de fundamentos de nuvem",
      duration: "3h11",
      link: "/cloud-fundamentals.pdf",
    },
  ] satisfies Credential[],
};
