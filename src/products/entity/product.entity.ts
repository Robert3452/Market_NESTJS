import { Timestamp } from 'src/Entity/global.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductImage } from './image.entity';

@Entity()
export class Product extends Timestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'text', nullable: false })
  longDescription: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'integer', nullable: false })
  stock: number;

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    nullable: false,
  })
  images: ProductImage[];
}
