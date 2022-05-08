import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogisticEntity } from 'src/entities/logistic.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, LogisticEntity])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class ApiModule {}
