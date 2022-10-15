import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export default class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  slug: string;

  @Column('varchar')
  description: string;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  original_price: number;

  @Column({ nullable: true, type: 'int', default: null })
  discount: number;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  discounted_price: number;

  @Column({ nullable: false, type: 'int', default: 0 })
  stock_amount: number;

  @Column({ nullable: false, type: 'int', default: 0 })
  sold: number;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}
