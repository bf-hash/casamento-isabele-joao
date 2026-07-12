export interface Gift {
  id: string;
  emoji: string;
  image: string;
  name: string;
  price: number;
  cardLink: string;
  // Presente sem valor fixo: quem presenteia escolhe o valor no checkout.
  custom?: boolean;
}

export const GIFTS: Gift[] = [
  {
    id: "museu",
    emoji: "🏛️",
    image: "/fotos/presentes/museu.jpeg",
    name: "Visita ao museu",
    price: 150,
    cardLink: "https://mpago.la/31HKgyi",
  },
  {
    id: "degustacao",
    emoji: "🥃",
    image: "/fotos/presentes/degustacao.jpeg",
    name: "Degustação de vinhos",
    price: 250,
    cardLink: "https://mpago.la/2zy1zUV",
  },
  {
    id: "pasta",
    emoji: "🍝",
    image: "/fotos/presentes/pasta.jpeg",
    name: "Pasta con la nona",
    price: 300,
    cardLink: "https://mpago.la/1AM4Tuv",
  },
  {
    id: "queijos",
    emoji: "🧀",
    image: "/fotos/presentes/queijos.jpeg",
    name: "Queijos e vinhos",
    price: 350,
    cardLink: "https://mpago.la/31L7TKv",
  },
  {
    id: "oyster",
    emoji: "🦪",
    image: "/fotos/presentes/ostras.jpeg",
    name: "Oyster and Champagne",
    price: 400,
    cardLink: "https://mpago.la/1nxap9M",
  },
  {
    id: "festival",
    emoji: "🎶",
    image: "/fotos/presentes/festival.jpeg",
    name: "Festival em Barcelona",
    price: 450,
    cardLink: "https://mpago.la/2JBSmv3",
  },
  {
    id: "jantar",
    emoji: "🍽️",
    image: "/fotos/presentes/jantar.jpeg",
    name: "Jantar na lua de mel",
    price: 600,
    cardLink: "https://mpago.la/2YQTtk4",
  },
  {
    id: "barranco",
    emoji: "🏖️",
    image: "/fotos/presentes/barranco.jpeg",
    name: "Dia no Barranco",
    price: 700,
    cardLink: "https://mpago.la/1b7zy6Q",
  },
  {
    id: "marimekko",
    emoji: "🏠",
    image: "/fotos/presentes/marimekko.webp",
    name: "Casa dos sonhos Marimekko",
    price: 800,
    cardLink: "https://mpago.la/2da7a44",
  },
  {
    id: "jamon",
    emoji: "🍖",
    image: "/fotos/presentes/jamon.jpeg",
    name: "Pata de Jamon",
    price: 1000,
    cardLink: "https://mpago.la/1sv6Ugr",
  },
  {
    id: "barco",
    emoji: "⛵",
    image: "/fotos/presentes/barco.jpeg",
    name: "Passeio de barco",
    price: 1200,
    cardLink: "https://mpago.la/34kd34u",
  },
  {
    id: "hotel",
    emoji: "🏨",
    image: "/fotos/presentes/hotel.jpeg",
    name: "Noite em hotel boutique",
    price: 2000,
    cardLink: "https://mpago.la/1LorZ9g",
  },
  {
    id: "executiva",
    emoji: "✈️",
    image: "/fotos/presentes/executiva.jpeg",
    name: "Executiva",
    price: 2500,
    cardLink: "https://mpago.la/28cjHsw",
  },
  {
    id: "customizado",
    emoji: "🎁",
    image: "/fotos/presentes/tacas.webp",
    name: "Presente customizado",
    price: 0,
    cardLink: "https://link.mercadopago.com.br/isabeleejoao",
    custom: true,
  },
];

export function getGift(id: string): Gift | undefined {
  return GIFTS.find((g) => g.id === id);
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
