import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogisticEntity } from 'src/entities/logistic.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
    @InjectRepository(LogisticEntity) private logisticRepository: Repository<LogisticEntity>
  ) {}

  public async getOrders(): Promise<OrderEntity[]> {
    return await this.orderRepository.find();
  }

  public async getProductsOfOrder(_orderId: number): Promise<ProductEntity[]> {
    return await this.productRepository.find({ where: { orderId: _orderId } });
  }

  public async getLogisticOfOrder(_orderId: number): Promise<LogisticEntity[]> {
    return await this.logisticRepository.find({ where: { orderId: _orderId } });
  }
}
