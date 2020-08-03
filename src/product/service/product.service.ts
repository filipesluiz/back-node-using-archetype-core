import { Injectable } from "@nestjs/common";
import { ProductDao } from "../dao/product.dao";
import { Product } from "../model/product.model";
import { ProductDto } from "../model/product.dto";

@Injectable()
export class ProductService {
    constructor(
        private readonly productDao: ProductDao
    ) {}

    async findAll(): Promise<Product[]> {
        return this.productDao.findAll();
    }
    
    findById(id: string): Promise<Product> {
        return this.productDao.findOneById(id);
    }

    create(product: ProductDto): Promise<Product> {
        return this.productDao.create(product);
    }

    update(product: ProductDto): Promise<Product> {
        return this.productDao.update(product);
    }
}