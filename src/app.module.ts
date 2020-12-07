import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import keys from './config/keys'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
