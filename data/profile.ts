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
  resumeLabel: "Curriculo em PDF",
  role: "Em formação para atuar com backend",
  headline:
    "Estou construindo minha base para atuar com backend por meio de projetos em Python focados em CRUD, persistencia de dados e organizacao de logica.",
  intro:
    "Este site funciona como meu curriculo vivo. Aqui apresento os projetos que venho construindo, o que eles me ensinaram sobre estruturacao de codigo e como estou usando esses fundamentos para evoluir em direcao ao backend.",
  currentFocus: [
    "Pratica de CRUD, menus interativos e fluxos de cadastro, consulta, edicao e exclusao.",
    "Persistencia local com arquivos JSON e CSV para entender leitura, escrita e consistencia de dados.",
    "Organizacao de funcoes, validacoes e tratamento de erros em aplicacoes de terminal.",
    "Evolucao gradual dos fundamentos de Python em direcao a APIs, banco de dados e sistemas backend.",
  ],
  strengths: [
    "Interesse em entender como os dados sao cadastrados, consultados, atualizados e persistidos.",
    "Busca por clareza na organizacao do codigo antes de aumentar complexidade.",
    "Aprendizado constante com projetos pequenos, iterativos e publicaveis.",
  ],
  searchFor:
    "Busco minha primeira oportunidade para evoluir de projetos fundamentais em Python para o desenvolvimento backend em contexto profissional, aprendendo com sistemas reais e pessoas mais experientes.",
  careerGoals: [
    "Transformar minha base atual em experiencia pratica com APIs, banco de dados e aplicacoes backend.",
    "Trabalhar em times que valorizem codigo limpo, aprendizado continuo e evolucao consistente.",
    "Ganhar experiencia real com sistemas que exijam regras de negocio, manutencao e responsabilidade tecnica crescente.",
  ],
  contact: [
    { label: "GitHub", href: "https://github.com/souzabrunu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-souza-9250a4356/" },
    { label: "Curriculo", href: "/curriculum.pdf" },
    { label: "Email", href: "mailto:souzabrunu@yahoo.com" },
  ],
  projects: [

    {
      name: "Calculadora Interativa em Python",
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
        "Aplicacao de terminal para cadastro e controle de estoque, com persistencia em JSON e operacoes para adicionar, remover, editar e consultar produtos.",
      stack: ["Python", "JSON", "Colorama"],
      technicalChallenge:
        "Manter os dados do estoque persistidos entre execucoes e tratar entradas invalidas sem quebrar o fluxo do menu interativo.",
      decisions:
        "Uso de funcoes separadas para cada operacao, arquivo JSON para armazenamento local e validacoes basicas para leitura e escrita seguras.",
      learning:
        "Evolui em organizacao de logica, manipulacao de arquivos, tratamento de excecoes e estrutura de um CRUD simples em aplicacao de terminal.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/estoque-produtos" }
      ],
    },
    {
      name: "Gerenciador de Clientes para Salao",
      description:
        "Aplicacao de terminal em Python para cadastrar, consultar e excluir clientes, mantendo os dados persistidos em arquivo CSV.",
      stack: ["Python", "CSV"],
      technicalChallenge:
        "Organizar operacoes de cadastro e busca com persistencia local, garantindo leitura e regravacao consistente do arquivo de clientes.",
      decisions:
        "Uso de csv.DictWriter e csv.DictReader para padronizar os campos, com inicializacao automatica do arquivo e exclusao feita pela reconstrucao da base.",
      learning:
        "Pratiquei manipulacao de arquivos, estruturacao de CRUD simples, buscas por filtros e tratamento de erros em aplicacao de terminal.",
      links: [
        { label: "GitHub", href: "https://github.com/souzabrunu/Gerenciador-Clientes" }
      ],
    }
  ]
};
