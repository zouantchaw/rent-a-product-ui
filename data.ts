export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Deluxe Plastic Folding Chair - White",
    description:
      "A convenient option for both indoor and outdoor events, this folding chair features a lightweight design and a comfortable contoured seat and back.",
    price: 2.99,
    image: "/folding-chair-white.png",
  },
  {
    id: "2",
    name: "Wedding Chiavari Chair - Gold",
    description:
      "The Chiavari chair is the most popular and most elegant ballroom chair in today's market. Chiavari chairs provide a touch of elegance. It is very great for weddings, corporate events, elegant parties, anniversaries, birthday parties and so much more!",
    price: 4.99,
    image: "/chiavari-chair-gold.png",
  },
  {
    id: "3",
    name: "Wedding Chiavari Chair - Silver",
    description:
      "The Chiavari chair is the most popular and most elegant ballroom chair in today's market. Chiavari chairs provide a touch of elegance. It is very great for weddings, corporate events, elegant parties, anniversaries, birthday parties and so much more!",
    price: 4.99,
    image: "/chiavari-chair-silver.png",
  },
  {
    id: "4",
    name: 'Round Plastic Folding Table - Granite White',
    description:
      "This round folding table is 4 feet long and is beneficial in a multitude of settings that include banquet halls, conference centers, cafeterias, schools and in the home. The table can be used as a temporary seating solution or be setup for everyday use. The durable blow molded top is low maintenance and cleans easily. The table legs fold under the table to make storage more convenient and for better portability.",
    price: 4.99,
    image: "/round-folding-table.png",
  },
  {
    id: "5",
    name: 'Rectangle Plastic Folding Table - Granite White',
    description:
      "This round folding table is 4 feet long and is beneficial in a multitude of settings that include banquet halls, conference centers, cafeterias, schools and in the home. The table can be used as a temporary seating solution or be setup for everyday use. The durable blow molded top is low maintenance and cleans easily. The table legs fold under the table to make storage more convenient and for better portability.",
    price: 4.99,
    image: "/rectangle-folding-table.png",
  },
  {
    id: "6",
    name: 'Queen Chair - White with Gold Trim',
    description:
      "This round folding table is 4 feet long and is beneficial in a multitude of settings that include banquet halls, conference centers, cafeterias, schools and in the home. The table can be used as a temporary seating solution or be setup for everyday use. The durable blow molded top is low maintenance and cleans easily. The table legs fold under the table to make storage more convenient and for better portability.",
    price: 200,
    image: "/king-chair.png",
  },
];