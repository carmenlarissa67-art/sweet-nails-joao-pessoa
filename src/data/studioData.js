// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE — SWEET NAILS STUDIO (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fonte dos dados: cards de valores e perfil do Instagram @sweetnailsjp.
// ==============================================================================

export const studioConfig = {
  name: "Sweet Nails",
  nameSuffix: "Studio",
  tagline: "Nail Studio em João Pessoa",
  subtitle:
    "Alongamentos, banho em gel, esmaltação em gel, pé e mão e spa dos pés em Manaíra. Pensamos em cada detalhe para você sair se sentindo feliz e realizada.",
  city: "João Pessoa, PB",
  address: "Av. Monteiro da Franca, 513 - Manaíra, João Pessoa - PB, 58038-190",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Monteiro+da+Franca,+513+-+Manaíra,+João+Pessoa+-+PB",
  whatsappNumber: "558398280549", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 9828-0549",
  instagramHandle: "@sweetnailsjp",
  instagramUrl: "https://www.instagram.com/sweetnailsjp",
  // Link do Calendly da cliente. Enquanto estiver vazio, o agendamento
  // pede dia e período preferidos e confirma tudo pelo WhatsApp.
  calendlyUrl: "",
  workingHours: [
    { days: "Terça a Sábado", hours: "09h às 12h • 13h às 18h" },
    { days: "Segunda", hours: "09h às 12h" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Ter a Sáb, 09h às 18h",
  paymentNote: "Valores para pagamento à vista ou via PIX. No cartão há um acréscimo.",

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamentos",
      title: "Alongamentos",
      short: "Alongamento",
      description: "Resistência e durabilidade para manter suas unhas sempre bonitas na correria do dia a dia.",
      image: "/images/marsala-dourado.webp",
      duration: "1h30 a 2h",
      maintenance: "Manutenção indicada de 25 a 30 dias",
      notes: [
        "Incluso esmaltação comum e cutilagem",
        "Valores não considerados para unhas extremas",
        "Unhas decoradas (glitter, baby color, artísticas): consultar valores",
      ],
      items: [
        { id: "fibra-classica", title: "Aplicação clássica na fibra", price: 150, popular: true },
        { id: "fibra-francesinha", title: "Aplicação na fibra com francesinha ou baby boomer", price: 190 },
        { id: "fibra-permanente", title: "Aplicação na fibra com esmaltação permanente", price: 190 },
        { id: "tip-classica", title: "Aplicação clássica na tip", price: 100 },
        { id: "tip-francesinha", title: "Aplicação na tip com francesinha ou baby boomer", price: 140 },
        { id: "tip-permanente", title: "Aplicação na tip com esmaltação permanente", price: 140 },
      ],
    },
    {
      id: "manutencao",
      title: "Manutenção",
      short: "Manutenção",
      description: "Manutenção do alongamento e do banho em gel. Feita no prazo certo, mantém as unhas sempre em dia.",
      image: "/images/preto-chamas.webp",
      duration: "1h30 a 2h",
      maintenance: "Indicada de 25 a 30 dias",
      notes: [
        "Incluso esmaltação comum e cutilagem",
        "Unha quebrada na tip: + R$ 10 • na fibra: + R$ 15",
        "Valores não considerados para unhas extremas",
      ],
      items: [
        { id: "manut-classica", title: "Manutenção clássica", price: 80, popular: true },
        { id: "manut-francesinha", title: "Manutenção com francesinha ou baby boomer", price: 120 },
        { id: "manut-permanente", title: "Manutenção com esmaltação permanente", price: 120 },
      ],
    },
    {
      id: "banho-gel",
      title: "Banho em Gel",
      short: "Banho em Gel",
      description: "Durabilidade e resistência para as unhas naturais, evitando quebras com os impactos do dia a dia.",
      image: "/images/nude-estrelas.webp",
      duration: "1h30 a 2h",
      maintenance: "Manutenção indicada de 25 a 30 dias",
      notes: [
        "Incluso esmaltação comum e cutilagem",
        "Unhas decoradas (glitter, baby color, artísticas): consultar valores",
      ],
      items: [
        { id: "banho-classico", title: "Banho clássico", price: 80 },
        { id: "banho-francesinha", title: "Banho com francesinha ou baby boomer", price: 120 },
        { id: "banho-permanente", title: "Banho em gel + esmaltação permanente", price: 120 },
      ],
    },
    {
      id: "esmaltacao-gel",
      title: "Esmaltação em Gel",
      short: "Esmaltação em Gel",
      description: "Protege a unha natural contra descamação e dura de 15 a 20 dias, a depender dos seus cuidados.",
      image: "/images/marsala-dourado.webp",
      duration: "1h30 a 2h",
      maintenance: "Refazer em 15 a 20 dias nas unhas naturais",
      notes: [
        "Serviço inclui cutilagem",
        "A unha natural não pode estar muito curta",
        "Francesinha na esmaltação permanente: + R$ 10",
      ],
      items: [
        { id: "perm-pe-simples", title: "Esmaltação permanente na mão + pé simples", price: 80, duration: "1h30" },
        { id: "perm-mao-pe", title: "Esmaltação permanente na mão e no pé", price: 100, duration: "2h" },
      ],
    },
    {
      id: "pe-e-mao",
      title: "Pé e Mão",
      short: "Pé e Mão",
      description: "O clássico bem feito, com todas as marcas de esmaltes comuns disponíveis no studio.",
      image: "/images/nude-estrelas.webp",
      duration: "",
      maintenance: "",
      notes: [
        "Em dezembro, o Pé e Mão clássico passa a ser R$ 50",
        "Pintura com as marcas de esmaltes comuns disponíveis",
      ],
      items: [
        { id: "pe-mao-simples", title: "Pé e mão simples", price: 45, popular: true },
        { id: "pe-mao-franc-1", title: "Pé e mão com francesinha na mão ou no pé", price: 50 },
        { id: "pe-mao-franc-2", title: "Pé e mão com francesinha na mão e no pé", price: 55 },
        { id: "esmaltar-mao", title: "Apenas esmaltação na mão (sem cutilagem)", price: 15 },
        { id: "esmaltar-pe-mao", title: "Apenas esmaltar pé e mão (sem cutilagem)", price: 30 },
        { id: "crianca-mao", title: "Pintura infantil na mão (sem cutilagem)", price: 15 },
      ],
    },
    {
      id: "spa-pes",
      title: "Spa dos Pés",
      short: "Spa dos Pés",
      description: "Esfoliação, hidratação e massagem. Indicado para pés ressecados ou rachados, intercalando os tipos de spa.",
      image: "/images/preto-chamas.webp",
      duration: "Varia conforme o spa",
      maintenance: "",
      notes: ["Serviço apenas de spa: não inclui cutilagem nem esmaltação"],
      items: [
        { id: "spa-express", title: "Sweet Express • esfoliação e hidratação", price: 15 },
        { id: "spa-classic", title: "Sweet Classic • Granado ou Natura, com massagem", price: 25 },
        { id: "spa-classic-plus", title: "Sweet Classic Plus • produtos Avatim, com massagem", price: 40 },
        { id: "spa-lavanda", title: "Spa Granado Lavanda • completo, com massagem nas mãos", price: 50 },
        { id: "spa-premium", title: "Sweet Premium • remoção de calosidades", price: 50 },
        { id: "spa-super-premium", title: "Sweet Super Premium • ofurô com sais ou geleia", price: 70, popular: true },
      ],
    },
    {
      id: "remocao",
      title: "Remoção de Gel",
      short: "Remoção",
      description: "Remoção cuidadosa de alongamentos ou banho em gel, preservando a sua unha natural.",
      image: "/images/marsala-dourado.webp",
      duration: "",
      maintenance: "",
      notes: [],
      items: [
        { id: "remocao-simples", title: "Remoção de alongamento / banho em gel (sem cutilagem)", price: 50 },
        { id: "remocao-mao", title: "Remoção com cutilagem da mão", price: 80 },
        { id: "remocao-pe-mao", title: "Remoção com cutilagem de pé e mão", price: 95 },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "francesinha-perm", name: "Francesinha na esmaltação permanente", price: 10 },
    { id: "quebrada-tip", name: "Unha quebrada na tip (por unha)", price: 10 },
    { id: "quebrada-fibra", name: "Unha quebrada na fibra (por unha)", price: 15 },
  ],

  // Informações importantes (tiradas dos cards oficiais do studio)
  policies: [
    {
      title: "Formas de pagamento",
      description: "Valores para pagamento à vista ou via PIX. No cartão há um acréscimo.",
    },
    {
      title: "Manutenção no prazo",
      description: "Alongamento e banho em gel pedem manutenção de 25 a 30 dias para durar bonito.",
    },
    {
      title: "Unhas decoradas",
      description: "Glitter, baby color e unhas artísticas têm valor sob consulta. É só chamar no WhatsApp.",
    },
    {
      title: "Unhas extremas",
      description: "Os valores da tabela não valem para unhas extremas. Consulte antes de agendar.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do studio)
  gallery: [
    { url: "/images/nude-estrelas.webp", tag: "Nude com estrelinhas" },
    { url: "/images/marsala-dourado.webp", tag: "Marsala com detalhe dourado" },
    { url: "/images/preto-chamas.webp", tag: "Preto fosco com chamas" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
