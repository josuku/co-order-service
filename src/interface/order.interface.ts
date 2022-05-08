export interface Order {
    clientId: number;
    date: Date;
    direction: string;
    products: Product[];
    confirmed: boolean;
    id: number;
    total: number;
    logisticId: number;
}

export interface Product {
    productId: number;
    orderId: number;
    quantity: number;
    cost: number;
}

export interface SaveOrderResponse {
    id: number;
    errorMessage: string;
}

export interface ModifyOrderResponse {
    success: boolean;
    errorMessage: string;
}

