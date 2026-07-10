export interface Gift {
  id: string;
  emoji: string;
  image: string;
  name: string;
  price: number;
  cardLink: string;
}

export const GIFTS: Gift[] = [
  {
    id: "museu",
    emoji: "🏛️",
    image: "/fotos/presentes/museu.jpeg",
    name: "Visita ao museu",
    price: 150,
    cardLink: "",
  },
  {
    id: "degustacao",
    emoji: "🥃",
    image: "/fotos/presentes/degustacao.jpeg",
    name: "Degustação de vinhos",
    price: 250,
    cardLink: "",
  },
  {
    id: "pasta",
    emoji: "🍝",
    image: "/fotos/presentes/pasta.jpeg",
    name: "Pasta con la nona",
    price: 300,
    cardLink: "",
  },
  {
    id: "queijos",
    emoji: "🧀",
    image: "/fotos/presentes/queijos.jpeg",
    name: "Queijos e vinhos",
    price: 320,
    cardLink: "",
  },
  {
    id: "jantar",
    emoji: "🍽️",
    image: "/fotos/presentes/jantar.jpeg",
    name: "Jantar na lua de mel",
    price: 350,
    cardLink: "",
  },
  {
    id: "oyster",
    emoji: "🦪",
    image: "/fotos/presentes/ostras.jpeg",
    name: "Oyster and Champagne",
    price: 350,
    cardLink: "",
  },
  {
    id: "barranco",
    emoji: "🏖️",
    image: "/fotos/presentes/barranco.jpeg",
    name: "Dia no Barranco",
    price: 400,
    cardLink: "",
  },
  {
    id: "festival",
    emoji: "🎶",
    image: "/fotos/presentes/festival.jpeg",
    name: "Festival em Barcelona",
    price: 450,
    cardLink: "",
  },
  {
    id: "marimekko",
    emoji: "🏠",
    image: "/fotos/presentes/marimekko.webp",
    name: "Casa dos sonhos Marimekko",
    price: 500,
    cardLink: "",
  },
  {
    id: "jamon",
    emoji: "🍖",
    image: "/fotos/presentes/jamon.jpeg",
    name: "Pata de Jamon",
    price: 600,
    cardLink: "",
  },
  {
    id: "barco",
    emoji: "⛵",
    image: "/fotos/presentes/barco.jpeg",
    name: "Passeio de barco",
    price: 1000,
    cardLink: "",
  },
  {
    id: "hotel",
    emoji: "🏨",
    image: "/fotos/presentes/hotel.jpeg",
    name: "Noite em hotel boutique",
    price: 1200,
    cardLink: "",
  },
  {
    id: "executiva",
    emoji: "✈️",
    image: "/fotos/presentes/executiva.jpeg",
    name: "Executiva",
    price: 2000,
    cardLink: "",
  },
];

export function getGift(id: string): Gift | undefined {
  return GIFTS.find((g) => g.id === id);
}

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
