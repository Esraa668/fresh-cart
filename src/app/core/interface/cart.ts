export interface Cart {
  _id?: string;
  cartOwner?: string;
  products: Product[];

  totalCartPrice: number;
}

export interface Product {
  count: number;
  _id: string;
  product: Product2;
  price: number;
}

export interface Product2 {
  _id: string;
  title: string;

  imageCover: string;

  id?: string;
}
