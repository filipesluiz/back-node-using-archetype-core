import { Injectable } from "@nestjs/common";
import { Product } from "../model/product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseDao } from "fibra-backend-core";
import { ProductDto } from "../model/product.dto";

@Injectable()
export class ProductDao extends BaseDao<Product, ProductDto> {
    constructor(@InjectModel(Product.name) model: Model<Product>) {
        super(model);
    }
}