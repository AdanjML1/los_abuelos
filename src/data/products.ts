export type Category =
    | "Cumpleaños infantil"
    | "Bautizo"
    | "Fiesta temática"
    | "A medida";

export interface Product {
    name: string;
    price: string;
    category: Category;
    image?: string;
}

export const CATEGORIES = [
    "Todas",
    "Cumpleaños infantil",
    "Bautizo",
    "Fiesta temática",
    "A medida",
] as const;

export const FEATURED_PRODUCTS: Product[] = [
    {
        name: "Piñata Abejita",
        price: "$420 MXN",
        category: "Cumpleaños infantil",
        image: "/images/pinata2.png",
    },
    {
        name: "Piñata Mestiza / Regional",
        price: "$650 MXN",
        category: "Fiesta temática",
        image: "/images/pinata3.png",
    },
    {
        name: "Piñata Número 1 Abeja",
        price: "$680 MXN",
        category: "Cumpleaños infantil",
        image: "/images/piñata1new.png",
    },
    { 
        name: "Piñata Personaje a medida", 
        price: "$750 MXN", 
        category: "A medida",
        image: "/images/pinata6.png",
    },
];

export const ALL_PRODUCTS: Product[] = [
    { name: "Piñata Abejita", price: "$420 MXN", category: "Cumpleaños infantil", image: "/images/pinata2.png" },
    { name: "Piñata Mestiza / Regional", price: "$650 MXN", category: "Fiesta temática", image: "/images/pinata3.png" },
    { name: "Piñata Número 1 Abeja", price: "$680 MXN", category: "Cumpleaños infantil", image: "/images/pinata1.png" },
    { name: "Piñata Estrella Clásica", price: "$420 MXN", category: "Cumpleaños infantil", image: "/images/pinata-estrella-clasica.png" },
    { name: "Piñata Unicornio", price: "$650 MXN", category: "Cumpleaños infantil", image: "/images/pinata-unicornio.png" },
    { name: "Piñata Dinosaurio", price: "$1200 MXN", category: "Cumpleaños infantil", image: "/images/pinata-pinata2x1.png" },
    { name: "Piñata Números y Letras", price: "$500 MXN", category: "Cumpleaños infantil" },
    { name: "Piñata Paloma", price: "$580 MXN", category: "Bautizo" },
    { name: "Piñata 2x1", price: "$1100 MXN", category: "Bautizo" },
    { name: "Piñata Superhéroe", price: "$700 MXN", category: "Fiesta temática" },
    { name: "Piñata Princesa", price: "$700 MXN", category: "Fiesta temática" },
    { name: "Piñata Cactus Fiesta", price: "$560 MXN", category: "Fiesta temática" },
    { name: "Piñata Personaje a medida", price: "$750 MXN", category: "A medida", image: "/images/pinata6.png" },
];

export interface ProductModel {
    name: string;
    height: string;
    price: string;
    idealFor: string;
    color: string;
    hoverTextColor: string;
}

export const PRODUCT_MODELS: ProductModel[] = [
    {
        name: "Mini / Dulcero",
        height: "Altura: 40 - 45 cm",
        price: "$90 - $180 MXN",
        idealFor: "Ideal para: centros de mesa / recuerdos",
        color: "#9C93E5",
        hoverTextColor: "var(--color-text)",
    },
    {
        name: "Tambor Mediana",
        height: "Altura: 60 - 80 cm",
        price: "$250 - $450 MXN",
        idealFor: "Ideal para: fiestas en casa / 15 a 20 niños",
        color: "#BA8CBE",
        hoverTextColor: "var(--color-text)",
    },
    {
        name: "Especial / Temática Grande",
        height: "Altura: —",
        price: "—",
        idealFor: "Ideal para: —",
        color: "#7F4EA8",
        hoverTextColor: "var(--color-on-accent)",
    },
];