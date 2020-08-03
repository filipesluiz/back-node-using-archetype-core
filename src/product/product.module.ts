import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './model/product.model';
import { ProductService } from './service/product.service';
import { ProductDao } from './dao/product.dao';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
        ]),
    ],
    providers: [ProductService, ProductDao],
    controllers: [ProductController],
})
export class ProductModule {}
