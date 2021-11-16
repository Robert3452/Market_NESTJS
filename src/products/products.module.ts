import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoryController } from './controllers/category.controller';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [ProductsController, CategoryController],
  providers: [ProductService, CategoryService],
})
export class ProductsModule {}
