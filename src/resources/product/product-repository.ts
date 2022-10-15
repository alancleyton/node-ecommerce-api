import { Repository } from 'typeorm';
import { AppDataSource } from '../../database/data-source';
import ProductEntity from './product-entity';
import { CreateProductDTO } from './interfaces/create-product-dto';
import { IProductRepository } from './interfaces/product-repository';

export class ProductRepository implements IProductRepository {
  private repository: Repository<ProductEntity>;

  constructor() {
    this.repository = AppDataSource.getRepository(ProductEntity);
  }

  async create(product: CreateProductDTO): Promise<ProductEntity | undefined> {
    const newProduct = await this.repository.create(product);
    this.repository.save(newProduct);
    return newProduct;
  }
}
