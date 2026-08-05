export type Category =
	| "Cumpleaños infantil"
	| "Bautizo"
	| "Fiesta temática"
	| "A medida";

export interface Product {
	name: string;
	price: string;
	category: Category;
}

export const CATEGORIES = [
	"Todas",
	"Cumpleaños infantil",
	"Bautizo",
	"Fiesta temática",
	"A medida",
] as const;

export const FEATURED_PRODUCTS: Product[] = [
	{ name: "Piñata Estrella Clásica", price: "$420 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Unicornio", price: "$650 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Dinosaurio", price: "$680 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Personaje a medida", price: "$750 MXN", category: "A medida" },
];

export const ALL_PRODUCTS: Product[] = [
	{ name: "Piñata Estrella Clásica", price: "$420 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Unicornio", price: "$650 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Dinosaurio", price: "$680 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Números y Letras", price: "$500 MXN", category: "Cumpleaños infantil" },
	{ name: "Piñata Paloma", price: "$580 MXN", category: "Bautizo" },
	{ name: "Piñata Cuna", price: "$620 MXN", category: "Bautizo" },
	{ name: "Piñata Superhéroe", price: "$700 MXN", category: "Fiesta temática" },
	{ name: "Piñata Princesa", price: "$700 MXN", category: "Fiesta temática" },
	{ name: "Piñata Cactus Fiesta", price: "$560 MXN", category: "Fiesta temática" },
	{ name: "Piñata Personaje a medida", price: "$750 MXN", category: "A medida" },
];

export interface ProductModel {
	name: string;
	height: string;
	price: string;
	idealFor: string;
	color: string;
}

export const PRODUCT_MODELS: ProductModel[] = [
	{
		name: "Mini / Dulcero",
		height: "Altura: 40 - 45 cm",
		price: "$90 - $180 MXN",
		idealFor: "Ideal para: centros de mesa / recuerdos",
		color: "#9C93E5",
	},
	{
		name: "Tambor Mediana",
		height: "Altura: 60 - 80 cm",
		price: "$250 - $450 MXN",
		idealFor: "Ideal para: fiestas en casa / 15 a 20 niños",
		color: "#BA8CBE",
	},
	{
		name: "Especial / Temática Grande",
		height: "Altura: —",
		price: "—",
		idealFor: "Ideal para: —",
		color: "#7F4EA8",
	},
];
