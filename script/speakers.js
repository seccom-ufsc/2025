/**
 * Speakers data.
 */

const speakers = {
  "Giulia Bordignon": {
    photo: "./img/speakers/Giulia-Bordignon.jpg",
    title: "Palestrante",

    abstract: "Mestra em engenharia de computação e desenvolvedora backend. Através da criação de conteúdos, sonho impactar vidas de forma positiva com rompimento de barreiras e empoderamento tecnológico, reconstruindo a área tecnológica como um espaço acessível e pertencente a todas as pessoas.",
    events: [
      {
        title:
          "Mulheres na TI: Como sobreviver em uma área majoritariamente masculina?",
      },
    ],
    contact: {
      email: "contato@spacecoding.dev",
    },
  },
  "Bruno Vianna": {
    photo: "./img/speakers/Bruno-Vianna.jpeg",
    title: "Palestrante",

    abstract: "Consultor de Tecnologia da Acenture.",
    events: [
      {
        title: "Aula sobre o Pitch.",
      },
    ],
    contact: {
      email: "",
    },
  },
  "Eduardo Tarouco": {
    photo: "./img/speakers/Eduardo-Tarouco.jpeg",
    title: "Palestrante",

    abstract: "Consultor e CEO da Enterprise Ventures.",
    events: [
      {
        title:
          "Overview sobre design thiking e ideiação, mostrando o framework de como fazer.",
      },
    ],
    contact: {
      email: "",
    },
  },
  "Harrysson Silva": {
    photo: "./img/speakers/Harryson-Silva.jpeg",
    title: "Professor e Palestrante",

    abstract: "Professor da UFSC e pós doutor.",
    events: [
      {
        title:
          "Abertura do Hackaton Shift Smart City",
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/3674819568497807",
      email: "harrysson@uou.com.br",
    },
  },
  "Hans Heidemann": {
    photo: "./img/speakers/Hans_Heidemann.jpg",
    title: "Palestrante",

    abstract: "Mestrando na área de EDA pelo Embedded Computing Laboratory (ECL) e entusiasta da cultura maker",
    events: [
      {
        title: "Minicurso de Arduino"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/hans-heidemann-b89794326",
      email: "gulp0@duck.com",
    }
  },
  "José Güntzel": {
    photo: "./img/speakers/Jose_Luis_Guntzel.jpg",
    title: "Professor e Palestrante",
    abstract: "Professor Titular do Departamento de Informática e Estatística, na UFSC. É supervisor do NIME da UFSC, colíder do Grupo de Pesquisa em Automação do Projeto de Sistemas Computacionais Embarcados e membro do Laboratório de Computação Embarcada (ECL) da UFSC. Possui graduação em Engenharia Elétrica (1990), mestrado e doutorado em Ciência da Computação pela Universidade Federal do Rio Grande do Sul (UFRGS). Em 1996 realizou estágio (doutorado-sanduíche) no Laboratoire dInformatique, de Robotique et de Micro-électronique de Montpellier (LIRMM), da Université Montpellier 2, Montpellier, França. Entre 2002 e 2007, foi professor adjunto no Departamento de Informática da Universidade Federal de Pelotas (UFPel). Entre 2017 e 2019 coordenou o Programa de Pós-Graduação em Ciência da Computação (PPGCC) da UFSC. Atualmente, é membro da Association for Computing Machinery (ACM) e do Special Interest Group on Design Automation (SIGDA). É membro sênior do IEEE. É membro da IEEE Circuits and Systems Society, da IEEE Signal Processing Society (SPS), do IEEE Council for Electronic Design Automation (CEDA), da Sociedade Brasileira de Computação (SBC) e da Sociedade Brasileira de Microeletrônica (SBMicro), da qual foi membro da diretoria na gestão 2006-2008. Atualmente, é o subcoordenador do IEEE Brazil CEDA Chapter, membro do Comitê Executivo (Steering Committee) do SBCCI (Symposium on Integrated Circuits and Systems Design) e membro do Comitê Gestor da Comissão Especial de Concepção de Circuitos e Sistemas Integrados da SBC. Atua principalmente nos seguintes temas: EDA - Electronic Design Automation, algoritmos e arquiteturas VLSI para compressão de vídeos de alta resolução e projeto de sistemas em chip (SoCs) de alta eficiência energética.",
    events: [
      {
        title: "EDA: When Computer Science Meet Microelectronics"
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/3431795837830476",
      email: "j.guntzel@ufsc.br",
    }
  },
  "Lucas Tinoco": {
    photo: "./img/speakers/Lucas_Tinoco.jpg",
    title: "Ministrante",
    abstract: "Na Chipus Microelectronics, sou Estagiário em Projeto de Circuitos Integrados Digitais, trabalhando com as ferramentas profissionais para executar a descrição em nível RTL, verificação, síntese lógica, Logic Equivalence Check, síntese física, Static Timing Analysis (STA), bem como verificação DRC e LVS. Meu trabalho também envolve análise de potência dos layouts, familiarização com Process Design Kits (PDKs) industriais e documentação dos IPs desenvolvidos para controle de qualidade.\n\nNo ECL, meu foco é otimizar o design de circuitos integrados através do floorplanning, aproveitando a ferramenta OpenRoad para melhorar o desempenho e a eficiência algorítmica. Esta pesquisa científica complementa meus estudos em Ciência da Computação na Universidade Federal de Santa Catarina, onde estou aprimorando minhas habilidades em SQL, Python e C++.",
    events: [
      {
        title: 'Minicurso Prático ("Hands-on") de Projeto de Chips Digitais com Ferramentas Industriais da Synopsys'
      }
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/lucas-tinoco-783420194/",
      email: "lucasltinoco@gmail.com",
    }
  },
  "Patrik Peres": {
    photo: "./img/speakers/Patrik_Peres.jpg",
    title: "Ministrante",
    abstract: "Engenheiro Eletrônico em formação pela UFSC (2026). Experiência em projetos de automação e aprendizado de máquina, desenvolvidos em estágio na Zinpro Animal Nutrition. Conhecimento em programação (C, C++, Python), linguagem de descrição de hardware (VHDL) e ferramentas de simulação (LTspice, QucsStudio, PSIM, Quartus, ModelSim e Cadence Virtuoso). Também, já fui estagiário no Departamento de Operação e Manutenção da CELESC e Monitor de Cálculo Numérico na UFSC. Proativo, com forte capacidade de adaptação e resolução de problemas.",
    events: [
      {
        title: 'Minicurso Prático ("Hands-on") de Projeto de Chips Digitais com Ferramentas Industriais da Synopsys'
      }
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/patrik-peres/",
      email: "patrikloff@gmail.com",
    }
  },
  "Lucas Lazarini": {
    photo: "./img/speakers/Lucas_Lazarini.jpg",
    title: "Palestrante",
    abstract: "Sou Lucas Lazarini, estudante da 8ª fase do curso de Sistemas de Informação na Universidade Federal de Santa Catarina (UFSC). Atualmente, atuo como Desenvolvedor de Software na VAAS e possuo mais de 3 anos de experiência na área de tecnologia. Ao longo da minha trajetória, participei do desenvolvimento de sistemas distribuídos utilizados por milhares de usuários e da definição de arquiteturas que suportam integrações complexas e requisitos de alta disponibilidade.",
    events: [
      {
        title: "Event Sourcing: A Arquitetura por Trás de Sistemas Consistentes e Auditáveis em Escala"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/lucas-lazarini/",
      email: "lucasalmeidalazarini@gmail.com",
    }
  },
  "Ruan Luiz M. Lopes": {
    photo: "./img/speakers/Ruan_Luiz_Molgero_Lopes.jpg",
    title: "Palestrante",
    abstract: "Estudante de Sistemas de Informação e bolsista a 1 ano do grupo de computação quântica, trabalhando na integração do Ket, plataforma de simulação e computação quântica, com AWS.",
    events: [
      {
        title: "Minicurso KET"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/ruanmolgero/",
      email: "ruanmolgero@gmail.com",
    }
  },
  "Cainã Correia Caldas": {
    photo: "./img/speakers/Cainã_Correa_Caldas.jpg",
    title: "Palestrante",
    abstract: "Desenvolvedor Unity com 7 anos de experiência no mercado.",
    events: [
      {
        title: "Carreira em programação de jogos"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/tailsgamedev/",
      email: "cainacc@hotmail.com",
    }
  },
  "Guto Fröhlich": {
    photo: "./img/speakers/Guto_Fröhlich.jpg",
    title: "Professor e Palestrante",
    abstract: "Antônio Augusto Fröhlich é professor titular da Universidade Federal de Santa Catarina (UFSC), onde lidera o Laboratório de Integração de Software e Hardware (LISHA) desde 2001. Possui doutorado em Engenharia da Computação pela Universidade Técnica de Berlim (2001) e foi pesquisador visitante na Universidade de Paderborn (2007), na Universidade da Califórnia, Irvine (2016) e na Universidade de Luxemburgo (2017). Coordenou diversos projetos de PD&I em sistemas ciberfísicos seguros, conectados e inteligentes. Contribuições significativas desses projetos foram incorporadas a produtos desenvolvidos por indústrias parceiras nos setores de energia, automação industrial e automotivo.",
    events: [
      {
        title: "Veículos Autônomos e Sistemas Inteligentes de Transporte: Desafios e Oportunidades para a Computação."
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/7644756660823271",
      email: "guto@lisha.ufsc.br",
    }
  },
  "Thiago Neves": {
    photo: "./img/speakers/Thiago_de_Castro_Neves.jpeg",
    title: "Palestrante",
    abstract: "Co-Founder e CEO da DOOOR.",
    events: [
      {
        title: "Computação verificável, IA e ZK: A Tech que Ninguém Está Falando (Ainda)."
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/thiagocastroneves/",
      email: "thiago@dooor.ai",
    }
  },
  "Vinícius Andrade": {
    photo: "./img/speakers/Vinícius_Andrade_da_Silva.jpg",
    title: "Palestrante",
    abstract: "Formado em filosofia pela UFSC, atualmente cursando ciência da informação também pela UFSC. Apaixonado por questões éticas ligadas a tecnologia.",
    events: [
      {
        title: "Inteligência artificial, o começou ou o fim de uma era?"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/vinícius-andrade-da-silva-73a040300",
      email: "vandrade220@gmail.com",
    }
  },
  "Jaime Hillesheim": {
    photo: "./img/speakers/Jaime_Hillesheim.jpg",
    title: "Professor",
    abstract: "Doutor em Serviço Social e Professor do Programa de Pós-Graduação em Serviço Social da UFSC. Pesquisador de temas relacionados às transformações do mundo do trabalho. Membro do Núcleo de Estudos: Trabalho, Questão Social e América Latina,  vinculado ao PPGSS. Vem desenvolvendo pesquisas sobre Serviço Social,  trabalho e inovações tecnológicas.",
    events: [
      {
        title: "O conceito de tecnologia: aproximações ao pensamento do filósofo brasileiro Álvaro Vieira Pinto."
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/5960974102571301",
      email: "jaime.h@ufsc.br",
    }
  },
  "Maicon Zatelli": {
    photo: "./img/speakers/Maicon_Zatelli.jpg",
    title: "Professor",
    abstract: 'Doutor em Engenharia de Automação e Sistemas pela Universidade Federal de Santa Catarina (UFSC) (2017), com período de sanduíche entre 2015 e 2016 pelo Programa de Doutorado Sanduíche no Exterior (PDSE) na Universidade de Bolonha (Itália), sendo a CAPES a instituição de fomento. Possui mestrado em Engenharia de Automação e Sistemas pela Universidade Federal de Santa Catarina (UFSC) (2013). Ambos, o doutorado e o mestrado, tiveram como área de concentração em "controle, automação e sistemas" e linha de pesquisa em "sistemas computacionais", especificamente em "sistemas multiagentes". Possui graduação em Ciência da Computação pela Fundação Universidade Regional de Blumenau (2010), sendo o trabalho final desenvolvido na área de "teoria dos grafos". Seus interesses estão relacionados à sistemas multiagentes (em especial o desenvolvimento de ferramentas, plataformas, e linguagens para a programação de sistemas multiagentes e seus componentes), e à algoritmos e estruturas de dados (em especial a "teoria dos grafos", seus algoritmos e aplicações). Possui experiência e interesse em competições de programação, em especial a International Collegiate Programming Contest (ACM-ICPC) e Multi-Agent Programming Contest (MAPC).',
    events: [
      {
        title: "Maratona de Programação"
      },
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/2106496100470299",
      email: "maicon.zatelli@ufsc.br",
    }
  },
  "João Braz da Silva": {
    photo: "./img/speakers/Joao_Braz.jpeg",
    title: "Palestrante",
    abstract: 'É superintendente da Fundação CITeB (Centro de Inovação e Tecnologia da Região de Biguaçu). Também é idealizador do CITeB. Atua fortemente no ecossistema de inovação local, com projetos de incubação, pesquisa & desenvolvimento, programas de capacitação empreendedora, espaços de coworking/hub, e articulação entre governo, empresas, academia e sociedade. Possui Mestrado em Engenharia de Produção pela Universidade Federal de Santa Catarina (UFSC), com período aproximado de 2001 a 2004. Graduação em Ciências Contábeis (Bacharelado) pela Universidade Federal de Santa Catarina (1989‑1994).',
    events: [
      {
        title: "O Futuro das Startups: Tecnologias Emergentes que Estão Redefinindo Negócios. Como Pequenos Negócios Podem se Digitalizar?"
      },
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/jo%C3%A3obraz67/",
    }
  },
  "Marcos Herve": {
    photo: "./img/speakers/Marcos_Herve.png",
    title: "Palestrante",
    abstract: 'Marcos Barcellos Hervé é engenheiro eletricista formado pela Universidade Federal do Rio Grande do Sul (UFRGS), Brasil, em 2006 e mestre em microeletrônica pela mesma universidade em 2009 (PGMicro). Participou da primeira turma do curso de formação em projetista de circuitos integrados do programa CI Brasil entre 2008 e 2009 com ênfase em circuitos digitais. Tem mais de 10 anos de experiência em microeletrônica, desde o início do mestrado na área, atuando em projetos de pesquisa e desenvolvimento de circuitos integrados. Nesse período, atuou em projetos de circuitos integrados de RFID, Power Management e compressão de dados, tendo participado de todas as etapas do fluxo de design digital. Desde janeiro de 2017 faz parte da equipe da Chipus Microeletrônica atuando atualmente como gerente de projetos.',
    events: [ 
      {
        title: "Digital IC Design: Opportunities and Challenges",
      }
    ],
    contact: {
      lattes: "http://lattes.cnpq.br/9976288871389616",
    }
  },
};

export { speakers };
