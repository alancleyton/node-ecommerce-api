import { Repository } from 'typeorm';
import { AppDataSource } from '../../database/data-source';
import { Product } from './product-entity';
import { CreateProductDTO } from './interfaces/create-product-dto';
import { IProductRepository } from './interfaces/product-repository';

export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  async create(product: CreateProductDTO): Promise<Product | undefined> {
    const newProduct = await this.repository.create(product);
    this.repository.save(newProduct);
    return newProduct;
  }
}
