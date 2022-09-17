import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1652744084754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'slug',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'original_price',
            type: 'float',
            isNullable: false,
            default: 0.0,
          },
          {
            name: 'discount',
            type: 'int',
            isNullable: true,
            default: null,
          },
          {
            name: 'discounted_price',
            type: 'float',
            isNullable: false,
            default: 0.0,
          },
          {
            name: 'stock_amount',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          {
            name: 'sold',
            type: 'int',
            isNullable: false,
            default: 0,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
