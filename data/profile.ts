export type ProjectLink = {
  label: string;
  href: string;
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

export type Profile = {
  name: string;
  resumeLabel: string;
  role: string;
  headline: string;
  intro: string;
  currentFocus: string[];
  strengths: string[];
  searchFor: string;
  careerGoals: string[];
  contact: ProjectLink[];
  projects: Project[];
};

export const profile: Profile = {
  name: "Bruno Souza",
  resumeLabel: "Currículo em PDF",
  role: "Em formação para atuar com backend",
  headline:
    "Estou construindo minha base para atuar com backend por meio de projetos em Python focados em CRUD, persistência de dados e organização de lógica.",
  intro:
    "Este site funciona como meu currículo vivo. Aqui apresento os projetos que venho construindo, o que eles me ensinaram sobre estruturação de código e como estou usando esses fundamentos para evoluir em direção ao backend.",
  currentFocus: [
    "Prática de CRUD, menus interativos e fluxos de cadastro, consulta, edição e exclusão.",
    "Persistência local com arquivos JSON e CSV para entender leitura, escrita e consistência de dados.",
    "Organização de funções, validações e tratamento de erros em aplicações de terminal.",
    "Evolução gradual dos fundamentos de Python em direção a APIs, banco de dados e sistemas backend.",
  ],
  strengths: [
    "Interesse em entender como os dados são cadastrados, consultados, atualizados e persistidos.",
    "Busca por clareza na organização do código antes de aumentar complexidade.",
    "Aprendizado constante com projetos pequenos, iterativos e publicáveis.",
  ],
  searchFor:
    "Busco minha primeira oportunidade para evoluir de projetos fundamentais em Python para o desenvolvimento backend em contexto profissional, aprendendo com sistemas reais e pessoas mais experientes.",
  careerGoals: [
    "Transformar minha base atual em experiência prática com APIs, banco de dados e aplicações backend.",
    "Trabalhar em times que valorizem código limpo, aprendizado contínuo e evolução consistente.",
    "Ganhar experiência real com sistemas que exijam regras de negócio, manutenção e responsabilidade técnica crescente.",
  ],
  contact: [
    { label: "GitHub", href: "https://github.com/souzabrunu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-souza-9250a4356/" },
    { label: "Curriculo", href: "/curriculum.pdf" },
    { label: "Email", href: "mailto:souzabrunu@yahoo.com" },
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
