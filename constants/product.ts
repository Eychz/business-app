export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    availability: string; //Sold or In Stock
};

export const products: Product[] = [
    {
        id: "1",
        slug: "iPhone-17-pro",
        name: "iPhone 17 Pro",
        description: "The latest iPhone with advanced features and sleek design.",
        price: "$999",
        imageUrl: "./Products/iphone17pro.jpg",
        availability: "In Stock"
    },
    {
        id: "2",
        slug: "iPhone-Air",
        name: "iPhone Air",
        description: "A lightweight iPhone with powerful performance and long battery life.",
        price: "$799",
        imageUrl: "./Products/iphone17pro.jpg",
        availability: "Sold"
    },
    {
        id: "3",
        slug: "iPhone-SE-3rd-gen",
        name: "iPhone SE (3rd Gen)",
        description: "Compact and affordable iPhone with impressive features.",
        price: "$499",
        imageUrl: "./Products/iphone17pro.jpg",
        availability: "In Stock"
    },
    {
        id: "4",
        slug: "iPhone-14-plus",
        name: "iPhone 14 Plus",
        description: "A larger iPhone with enhanced display and camera capabilities.",
        price: "$899",
        imageUrl: "./Products/iphone17pro.jpg",
        availability: "In Stock"
    },
    {
        id: "5",
        slug: "iPhone-13-mini",
        name: "iPhone 13 Mini",
        description: "A compact iPhone with powerful features and great performance.",
        price: "$699",
        imageUrl: "./Products/iphone17pro.jpg",
        availability: "Sold"
    }
];