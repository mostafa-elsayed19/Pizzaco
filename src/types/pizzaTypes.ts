export interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  totalPrice?: number;
  quantity?: number;
  ingredients: [];
}

export interface CartOrder {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  ingredients: string[];
}
