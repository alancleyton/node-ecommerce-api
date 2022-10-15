import ProductEntity from '../product-entity';
import { CreateProductDTO } from './create-product-dto';

export interface IProductRepository {
  create(product: CreateProductDTO): Promise<ProductEntity | undefined>;
}
