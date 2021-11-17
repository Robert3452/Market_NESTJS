import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoryController } from './controllers/category.controller';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { ProductImage } from './entity/image.entity';

@Module({
  controllers: [ProductsController, CategoryController],
  providers: [ProductService, CategoryService],
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
})
export class ProductsModule {}
