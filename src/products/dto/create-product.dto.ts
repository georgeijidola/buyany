import { Document } from 'mongoose'

export class CreateProductDto extends Document {
  readonly name: string
  readonly description: string
  readonly price: number
}
