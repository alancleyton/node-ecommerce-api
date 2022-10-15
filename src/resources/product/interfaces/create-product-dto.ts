export interface CreateProductDTO {
  title: string;
  slug: string;
  description: string;
  original_price: number;
  discount: number;
  discounted_price: number;
  stock_amount: number;
  sold: number;
}
