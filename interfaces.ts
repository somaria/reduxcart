export interface Product {
    id: number;
    name: string;
    price: number;
    imagePath: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}