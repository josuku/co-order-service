import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  booksRepository: any;

  constructor(
    @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>
  ) {}

  public async getOrders(): Promise<OrderEntity[]> {
    return await this.orderRepository.find();
  }

  public async getProductsOfOrder(_orderId: number): Promise<ProductEntity[]> {
    return await this.productRepository.find({ where: { orderId: _orderId } });
  }
}
