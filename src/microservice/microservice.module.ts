import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { OrderMsController } from './order/order.ms.controller';
import { OrderMsService } from './order/order.ms.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity])],
  controllers: [OrderMsController],
  providers: [OrderMsService],
})
export class MicroServiceModule {}
