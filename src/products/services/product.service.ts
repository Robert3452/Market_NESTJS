import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../entity/product.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOneById(id: number) {
    const productFound: Product = await this.productRepo.findOne(id);
    if (!productFound) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return productFound;
  }

  create(product: CreateProductDto) {
    const createdProduct = this.productRepo.create(product);
    if (!createdProduct) {
      throw new BadRequestException(`there was an error`);
    }
    return this.productRepo.save(createdProduct);
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }

  async remove(id: number) {
    const productFound: Product = await this.productRepo.findOne(id);
    if (!productFound) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    await this.productRepo.delete(id);
    return productFound;
  }
}
