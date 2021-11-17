import { Timestamp } from 'src/Entity/global.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
@Entity()
export class ProductImage extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  url: string;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @ManyToOne(() => Product, (product) => product.images, { nullable: false })
  product: Product;
}
