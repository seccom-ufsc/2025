/**
 * Speakers data.
 */

const speakers = {
  "Ale": {
    photo: "./img/ale.jpg",
    title: "Palestrante",

    abstract: "Estou na quarta fase de sistemas e gosto muito de Python!",
    events: [
      {
        title:
          "Geocodificação em Python: Uma análise para os números de casas desocupadas em Florianópolis",
      },
    ],
    contact: {
      email: "ale.benedetp@gmail.com",
    },
  },
  "Cainã Rinaldi Esteche": {
    photo: "./img/caina-rinaldi-esteche.jpeg",
    title: "Palestrante",

    abstract:
      "Estudante de Ciência da Computação, Medalhista de ouro da OBMEP e CTO da Mimolda. Atleta de vôlei e xadrez e entusiasta por problemas de matemática e computação.",
    events: [
      {
        title:
          "Dedos, Palitos e Grafos: Vencendo com Matemática – Um Guia para Dominar Jogos de Estratégia",
      },{
        title: "Hackathon Flutter",
      }
    ],
    contact: {
      email: "cairinest@hotmail.com",
    },
  },
  "Rafael": {
    photo: "./img/rafael-oliveira.jpeg",
    title: "Palestrante",

    abstract:
      "Rafael Oliveira é fundador e Head-Engineer do Osiris, um grupo de pesquisa focado no projeto e desenvolvimento de microarquiteturas RISC-V. Possui experiência em projetos  e caracterização elétrica de circuitos integrados em tecnologias nanométricas. Suas principais áreas de expertise são Projeto de Circuitos Digitais e Circuitos Combinacionais Tolerantes a Falhas. Rafael publicou artigos sobre esses temas em importantes periódicos e conferências. Além disso, atua como Projetista de CI Digital na Chipus Microelectronics e é voluntário no Laboratório de Computação Embarcada (ECL-UFSC).",
    events: [
      {
        title:
          "Entre Bits e Clocks: Desvendando o Projetos de Circuitos Integrados",
      },
    ],
    contact: {
      email: "rafaelnevesmello@gmail.com",
    },
  },
  "Mario Araujo Xavier": {
    photo: "./img/mario-araujo-xavier.jpeg",
    title: "Palestrante",

    abstract:
      "Natalense em Florianópolis. Trabalha com infraestrutura, datacenter, virtualização, servidores e nuvem Microsoft Azure, Hyper-V, Windows Server. Já palestrou na Universidade Federal de Santa Catarina (UFSC), Universidade Tecnológica Federal do Paraná (UTFPR), Universidade Federal do Ceará (UFCE), Universidade Federal do Rio Grande do Norte (UFRN) e na Universidade Tiradentes (UNIT) - Recife/PE",
    events: [
      {
        title:
          "KDE Neon & KDE Plasma: venha para o KDE e ganhe experiencia profissional em TI",
      },
      {
        title:
          "FOSSHUB e o desafio de implantar ferramentas livres no mercado corporativo",
      }
    ],
    contact: {
      email: "marioaxavier7@gmail.com",
    },
  },
  "Matheus de Oliveira Saldanha": {
    photo: "./img/matheus-saldanha.jpeg",
    title: "Palestrante",

    abstract:
      "Bacharel em Ciências Computação pela UFSC, fazendo parte do LabSEC durante a graduação. Atualmente, mestrando em Ciências da Computação pela UFSC, focando os estudos em Isogeny-based Cryptography e trabalhando como engenheiro de software na Motorola.",
    events: [
      { title: "Criptografia da Troca de Chaves: Clássica à Pós-Quântica" },
    ],
    contact: {
      email: "zinhoo02@gmail.com",
    },
  },
  "Samuel Cardoso": {
    photo: "./img/samuel-cardoso.jpeg",
    title: "Palestrante",

    abstract:
      "Me chamo Samuel Cardoso, sou formado em Ciência da Computação pela UFSC e atualmente atuo como Analista de Segurança da Informação na Conviso Appsec, realizando Pentests e outras operações de segurança.",
    events: [
      {
        title:
          "Como entender vulnerabilidades: Do compilador a ReDoS + Live Hacking",
      },
    ],
    contact: {
      email: "samuelcardosodejesus@hotmail.com",
    },
  },
  "Carla Merkle Westphall": {
    photo: "./img/carla-westphall.jpeg",
    title: "Painelista",

    abstract:
      "Carla Merkle Westphall é graduada em Ciências da Computação pela UFSC em 1994, obteve o grau de mestre em Ciência da Computação pela UFSC em 1996 e o grau de Doutora em Engenharia Elétrica na área de Segurança em 2000 pela UFSC. Atua na área de Ciência da Computação desde 1987. Participou de vários projetos de pesquisa na área de Segurança de Sistemas. O projeto atual chama-se Segurança nas Redes da Nova Geração, englobando Internet das coisas, computação em nuvem, computação em névoa e redes sem fio. Este projeto está em desenvolvimento no Laboratório de Redes e Gerência (LRG) da UFSC, com a participação de alunos de doutorado e mestrado no Programa de Pós-Graduação em Ciência da Computação (PPGCC) da UFSC, além de alunos de graduação. Tem interesse pelos seguintes temas de pesquisa: segurança em sistemas distribuídos, redes de nova geração, blockchain, segurança na programação e gerenciamento de identidades.",
    events: [{ title: "Painel de Segurança" }],
    contact: {
      email: "carla.merkle.westphall@ufsc.br",
    },
  },
  "Jean Everson Martina": {
    photo: "./img/jean-martina.jpeg",
    title: "Painelista",

    abstract:
      "Jean Everson Martina é professor e pesquisador sênior no Laboratório de Segurança em Computação (LabSEC) da Universidade Federal de Santa Catarina (UFSC), e professor visitante na Universidade de Hertfordshire, no Reino Unido. Sua área de especialização abrange protocolos de autenticação para ambientes de telemedicina, formalização de cerimônias de segurança, protocolos de segurança voltados para IoT (Internet das Coisas) e aplicações de blockchain. Jean é amplamente reconhecido por seu trabalho em criptografia, com ênfase na segurança de documentos digitais, infraestrutura de chaves públicas (ICP-Brasil), e criptografia resistente a ataques de computadores quânticos.",
    events: [{ title: "Painel de Segurança" }],
    contact: {
      email: "jean.martina@ufsc.br",
    },
  },
  "Thaís Bardini Idalino": {
    photo: "./img/thais-bardini.jpeg",
    title: "Painelista",

    abstract:
      "Thaís Bardini Idalino é Professora Adjunta de Ciência da Computação na Universidade Federal de Santa Catarina (UFSC), onde atua desde 2021. Possui doutorado em Ciência da Computação pela University of Ottawa, no Canadá, mestrado e graduação em Ciência da Computação pela UFSC. Durante seu doutorado, desenvolveu uma tese sobre tolerância a falhas em aplicações criptográficas utilizando famílias livre de cobertura (cover-free families), uma técnica avançada da combinatória aplicada à segurança da informação.",
    events: [{ title: "Painel de Segurança" }],
    contact: {
      email: "thaisidalino@gmail.com",
    },
  },
  "Mateus Cechetto": {
    photo: "./img/matheus-cechetto.jpeg",
    title: "Palestrante",

    abstract:
      "Formado em Sistemas de Informação na UFSC, trabalho como engenheiro de software desde 2018, participando em projetos na área da educação, hospitalar, engenharia e, atualmente, gamer. Nos últimos anos me aproximei de projetos open source, principalmente na comunidade de Hearthstone, tendo contribuido pra múltiplos projetos e sendo o criador de um projeto com mais de 6000 visitantes e mantenedor de outro com milhões de downloads.",
    events: [{ title: "Projetos Pessoais: De Hobby a Carreira Internacional" }],
    contact: {
      email: "mateuscechetto@gmail.com",
    },
  },
  "Eduardo Perottoni": {
    photo: "./img/eduardo-perottoni.jpeg",
    title: "Palestrante",

    abstract:
      "Estudante de Ciência da Computação na UFSC (7º fase) e bolsista do LabSEC, onde atua no projeto iekuatiara.",
    events: [{ title: "ADES: Assinador Digital com Certificados de Uso Único do LabSEC" }],
    contact: {
      email: "edu.perottoni@gmail.com",
    },
  },
  "Gustavo": {
    photo: "./img/Gustavo-Kundlatsch.jpeg",
    title: "Palestrante",

    abstract:
      "Sou da turma de 2017.1, me formei no começo de 2022. Trabalhei com teoria de agentes no IATE durante 3 anos, desenvolvendo meu TCC na área de percepção. Ainda na graduação trabalhei no Bridge como desenvolvedor da equipe de suporte do eSUS APS, e depois de me formar trabalhei por dois anos e meio em uma legaltech, atuando como backend e mais tarde como techlead da área de desenvolvimento web. Atualmente trabalho com o treinamento de LLMs.",
    events: [{ title: "Clean code ainda é clean?" }, { title: "Minicurso de LaTeX" }],
    contact: {
      email: "gustavo.kundlatsch@gmail.com",
    },
  },
  "Pedro Veiga": {
    photo: "./img/pedro-veiga.jpeg",
    title: "Palestrante",

    abstract:
      "Pedro Veiga é cofundador da MOIC Digital e possui ampla experiência no mercado de criptoativos. Atuou na maior gestora de investimentos do sul do Brasil e em empresas internacionais do setor de cripto. Com envolvimento no mercado web3 desde 2018, hoje atua como Head of Research da MOIC Digital.",
    events: [{ title: "Oportunidades em Blockchain: Inovação e a Importância da Segurança" }],
    contact: {
      email: "pedro@moicdigital.com",
    },
  },
  "Claudio Gerolimetto": {
    photo: "./img/Claudio-Gerolimetto.jpeg",
    title: "Palestrante",

    abstract:
      "Claudio Gerolimetto é desenvolvedor especializado em Solidity e expert em tecnologias relacionadas ao ecossistema Ethereum. Atua na pesquisa e desenvolvimento para empresas focadas em criação e auditoria de contratos inteligentes, contribuindo para o aprimoramento de soluções em blockchain.",
    events: [{ title: "Oportunidades em Blockchain: Inovação e a Importância da Segurança" }],
    contact: {
      email: "pedro@moicdigital.com",
    },
  },
  "Luciano Faustino": {
    photo: "./img/luciano-faustino.jpeg",
    title: "Palestrante",

    abstract:
      "Atua há mais de 18 anos com sistemas Unix-like e redes, e há 7 anos com foco em arquitetura Multi Cloud, infraestrutura como código, automação, integração contínua, monitoramento, segurança e containers. Atualmente, faz parte de um time dedicado à implementação da cultura DevOps na Neoway, maior empresa de Big Data Analytics e Inteligência Artificial da América Latina, capacitando engenheiros(as) de software e otimizando a eficiência operacional da plataforma. Também é ativo na organização de eventos e no compartilhamento de conhecimento em comunidades de DevOps, Cloud e Docker em Florianópolis, já tendo organizado encontros do Docker Meetup Florianópolis.",
    events: [{ title: "Genesis: Segurança na Cloud by Design usando Infrastructure as Code (IaC)" }],
    contact: {
      email: "luciano.faustino@neoway.com.br",
    },
  },
  "Ricardo Goes": {
    photo: "./img/ricardo-goes.jpeg",
    title: "Palestrante",

    abstract:
      "Engenheiro formado pelo IME (Instituto Militar de Engenharia) com MBA em Gestão Estratégica de Tecnologia da Informação pela UFRJ. PMP (Project Management Professional) desde 2008 com mais de 20 anos de experiência em gerenciamento de projetos de alto risco e complexidade.",
    events: [{ title: "Trabalho Remoto em empresas de tecnologia" }],
    contact: {
      email: "rsagoes@gaudium.com.br",
    },
  },
  "Bruno Muniz": {
    photo: "./img/bruno-muniz.jpeg",
    title: "Palestrante",

    abstract:
      "É formado em Ciência da Computação (UECE) e Mestre em Informática (PUC-Rio). Teve seu primeiro contato com tecnologia aos 10 anos de idade e desde então nunca mais parou. Está no espírito e no sangue construir soluções tecnológicas práticas para resolver as dores das pessoas e empresas. Transita bem como líder multiplicador de propósito e cultura, e também em diferentes áreas como Estratégia, Vendas, Marketing, Produto, Programação e Infraestrutura.",
    events: [{ title: "Trabalho Remoto em empresas de tecnologia" }],
    contact: {
      email: "munizbc@gaudium.com.br",
    },
  },
  "Shirlei Chaves": {
    photo: "./img/shirlei-chaves.jpeg",
    title: "Palestrante",

    abstract:
      "Sou doutoranda em Ciência da Computação na Universidade Federal de Santa Catarina (UFSC) e Analista de TI no Instituto Federal de Santa Catarina (IFSC). Meus interesses de pesquisa incluem privacidade e proteção de dados, usabilidade em privacidade e segurança, gerenciamento de identidades digitais e Interação Humano-Computador (IHC).",
    events: [{ title: "Autenticação de usuários: antigos desafios e novas tecnologias" }],
    contact: {
      email: "shirlei@gmail.com",
    },
  },
  "Miliane Fantonelli": {
    photo: "./img/miliane-fantonelli.jpeg",
    title: "Palestrante",

    abstract:
      "Mestre em Teoria e Filosofia do Direito no Programa de Pós-Graduação em Direito na Universidade Federal de Santa Catarina (UFSC). Especialista em Proteção de Dados & Compliance Digital pela Universidade Presbiteriana Mackenzie. Especialista em Saúde Digital pela Universidade Federal de Goiás (UFG). Formada em Direito pela Universidade Federal de Santa Maria (UFSM), com láurea acadêmica. Atuo como Advogada e Data Protection Officer no Laboratório Bridge desde 2019, implementando os preceitos da proteção dos dados em softwares e processos e desenvolvendo pesquisas científicas nas áreas de privacidade, cibersegurança e tecnologia. Professora. Advogada.",
    events: [{ title: "Proteção de dados no processo de desenvolvimento" }],
    contact: {
      email: "miliane@bridge.ufsc.br",
    },
  },
  "Gustavo Zambonin": {
    photo: "./img/gustavo-zambonin.jpg",
    title: "Palestrante",

    abstract:
      "Sou estudante de doutorado no Laboratório de Segurança em Computação, pesquisando novos algoritmos de ranquamento para geração uniforme de objetos aleatórios em criptossistemas resistentes a computadores quânticos. Também trabalho como consultor, auxiliando instituições públicas e privadas a resolver problemas complexos relacionados a segurança da informação. Antes de começar o doutorado, fui líder de pesquisa e desenvolvimento do Padrão Brasileiro de Assinatura Digital da Infraestrutura de Chaves Públicas Brasileira.",
    events: [{ title: "Geração aleatória de objetos combinatórios para algoritmos criptográficos" }],
    contact: {
      email: "gustavo.zambonin@posgrad.ufsc.br",
    },
  },
  "Anthony Kamers": {
    photo: "./img/anthony-kamers.jpeg",
    title: "Palestrante",

    abstract:
      "Sou mestrando no laboratório de segurança em computação (LabSEC) da UFSC, atualmente pesquisando sobre criptografia e assinaturas digitais. Também sou gerente do projeto Padrão Brasileiro de Assinaturas Digitais (PBAD) junto ao LabSEC, que trabalha diretamente com o Instituto de Tecnologia da Informação (ITI).",
    events: [{ title: "Assinatura digital tolerante a modificações" }],
    contact: {
      email: "anthonybernardo10@gmail.com",
    },
  },
  "Wellington Silvano": {
    photo: "./img/wellington-silvano.jpeg",
    title: "Palestrante",

    abstract:
      'Wellington Fernandes Silvano é doutorando em Ciências da Computação pela Universidade Federal de Santa Catarina (UFSC) e membro do Laboratório de Segurança em Computação (LabSEC). Suas pesquisas se concentram em sigilo de documentos de longo prazo, com ênfase em técnicas como assinaturas digitais sigilosas, criptografia avançada, secret sharing, controle de acesso e mitigação de vazamentos. O objetivo de seu trabalho é garantir a integridade e sigilo de informações ao longo do tempo, incluindo o desenvolvimento de novas soluções para a gestão e arquivamento seguro de documentos. Com formação acadêmica diversificada, Wellington possui mestrado em Tecnologia da Informação e Comunicação e graduação em Física, ambos pela UFSC. Foi premiado no "Brazilian Symposium on Computing Systems Engineering (SBESC)", teve um trabalho selecionado pela revista Future Generation Computer Systems como destaque em 2021. Também atuou como revisor para o IEEE Internet of Things Journal. Sua experiência abrange temas como segurança da computação e tecnologias da informação, atualmente com foco em soluções inovadoras para o sigilo.',
    events: [{ title: "Sigilo sob uma perspectiva prioritariamente computacional" }],
    contact: {
      email: "anthonybernardo10@gmail.com",
    },
  },
};

export { speakers };
