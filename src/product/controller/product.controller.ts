import { Controller, Get, UseInterceptors, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { RequestLoggingInterceptor } from "fibra-backend-core";
import { ProductService } from "../service/product.service";
import { Product } from "../model/product.model";
import { ProductDto } from "../model/product.dto";

@Controller('product')
@UseInterceptors(RequestLoggingInterceptor)
export class ProductController {

    constructor(
        private readonly productService: ProductService,
    ) {}

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Product> {
        return this.productService.findById(id);
    }

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post()
    create(@Body() product: ProductDto): Promise<Product> {
        return this.productService.create(product);
    }

    @Put()
    update(@Body() product: ProductDto): Promise<Product> {
        return this.productService.update(product);
    }

    @Delete()
    delete(): string {
        return "123";
    }
}