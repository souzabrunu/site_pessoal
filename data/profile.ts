export type ProjectLink = {
  label: string;
  href: string;
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
  projects: Project[];
  certificates: Certificate[];
};

export const profile: Profile = {
  name: "Bruno Souza",
  resumeLabel: "Currículo em PDF",
  role: "Construindo minha base\npara atuar com\nbackend",
  headline:
    "Desenvolvo projetos em Python para fortalecer lógica, CRUD, persistência de dados e organização de código, construindo uma base sólida para trabalhar com backend.",
  intro:
    "Este site funciona como meu currículo vivo. Aqui reúno projetos, certificados e objetivos profissionais para mostrar como estou transformando estudo consistente em repertório técnico prático, com foco em backend.",
  quickFacts: [
    { label: "Projetos", href: "#projetos" },
    { label: "Certificações", href: "#certificacoes" },
    { label: "Currículo", href: "/curriculum.pdf" },
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
      href: "https://www.linkedin.com/in/bruno-souza-9250a4356/",
      value: "linkedin.com/in/bruno-souza-9250a4356",
    },
    { label: "Currículo", href: "/curriculum.pdf", value: "Versão atualizada em PDF" },
    { label: "Email", href: "mailto:souzabrunu@yahoo.com", value: "souzabrunu@yahoo.com" },
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
        "Trilha de aprendizagem focada em fundamentos de computação em nuvem, com visão inicial sobre serviços da AWS, conceitos de cloud e base para evolução em infraestrutura e arquitetura.",
      link: "/aws-cloud-practitioner-pt.pdf",
    },
    {
      name: "Cloud+Fundamentals",
      issuer: "Fundamentos de nuvem",
      duration: "3h11",
      summary:
        "Formação complementar voltada a fundamentos de computação em nuvem, reforçando conceitos essenciais de cloud e ampliando minha base para estudos em infraestrutura e serviços online.",
      link: "/cloud-fundamentals.pdf",
    },
  ],
  projects: [

    {
      name: "Calculadora Interativa Python",
      description:
        "Aplicação de terminal com múltiplas funcionalidades, incluindo operações matemáticas, cálculo de IMC, desconto e jogo de adivinhação.",
      stack: ["Python"],
      technicalChallenge:
        "Organizar múltiplas funcionalidades com menu interativo e tratamento de erros.",
      decisions:
        "Uso de funções separadas e um controlador central para gerenciar o fluxo do programa.",
      learning:
        "Desenvolvi lógica de programação, tratamento de exceções e organização de código.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/Calculadora_Desconto/tree/main" }
      ],
    },
    {
      name: "Sistema de Estoque de Produtos em Python",
      description:
        "Aplicação de terminal para cadastro e controle de estoque, com persistência em JSON e operações para adicionar, remover, editar e consultar produtos.",
      stack: ["Python", "JSON", "Colorama"],
      technicalChallenge:
        "Manter os dados do estoque persistidos entre execuções e tratar entradas inválidas sem quebrar o fluxo do menu interativo.",
      decisions:
        "Uso de funções separadas para cada operação, arquivo JSON para armazenamento local e validações básicas para leitura e escrita seguras.",
      learning:
        "Evoluí em organização de lógica, manipulação de arquivos, tratamento de exceções e estrutura de um CRUD simples em aplicação de terminal.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/estoque-produtos" }
      ],
    },
    {
      name: "Gerenciador de Clientes para Salão",
      description:
        "Aplicação de terminal em Python para cadastrar, consultar e excluir clientes, mantendo os dados persistidos em arquivo CSV.",
      stack: ["Python", "CSV"],
      technicalChallenge:
        "Organizar operações de cadastro e busca com persistência local, garantindo leitura e regravação consistente do arquivo de clientes.",
      decisions:
        "Uso de csv.DictWriter e csv.DictReader para padronizar os campos, com inicialização automática do arquivo e exclusão feita pela reconstrução da base.",
      learning:
        "Pratiquei manipulação de arquivos, estruturação de CRUD simples, buscas por filtros e tratamento de erros em aplicação de terminal.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/Gerenciador-Clientes" }
      ],
    }
  ]
};
