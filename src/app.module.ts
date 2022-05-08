import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';
import { sqlDb, sqlHost, sqlPass, sqlPort, sqlUser } from './config';
import { MicroServiceModule } from './microservice/microservice.module';
import { OrderEntity } from './entities/order.entity';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [
    ApiModule,
    MicroServiceModule,
    TypeOrmModule.forRoot(
      {
        "type": "mysql",
        "host": sqlHost,
        "port": Number(sqlPort),
        "username": sqlUser,
        "password": sqlPass,
        "database": sqlDb,
        "entities": [ OrderEntity, ProductEntity ],
        "synchronize": true
      }
    )
  ]
})
export class AppModule {}
