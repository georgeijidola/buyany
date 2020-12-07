import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './interfaces/product.interface'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find()
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id })
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product)

    return await newProduct.save()
  }

  async delete(id: string): Promise<string> {
    await this.productModel.findByIdAndDelete(id)

    return 'Product deleted.'
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, { new: true })
  }
}
