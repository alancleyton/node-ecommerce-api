import { Product } from '../product-entity';
import { CreateProductDTO } from './create-product-dto';

export interface IProductRepository {
  create(product: CreateProductDTO): Promise<Product | undefined>;
}
