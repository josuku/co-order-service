import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
import { ModifyOrderResponse, Order, Product, SaveOrderResponse } from '../../interface/order.interface';

@Injectable()
export class OrderMsService {

  constructor(
    @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>
  ) {}

  public async createOrder(order: Order): Promise<SaveOrderResponse> {
    let result: SaveOrderResponse = {
      id: 0,
      errorMessage: null
    };

    try {
      const newOrder = this.orderRepository.save(order);
      for (const p in order.products) {
        order.products[p].orderId = (await newOrder).id;
        this.productRepository.save(order.products[p]);
      }
      result.id = (await newOrder).id;
    } catch (error) {
      result.errorMessage = error.sqlMessage;
    }
    
    return result;
  }

  public async modifyOrder(order: Order): Promise<ModifyOrderResponse> {
    let result: ModifyOrderResponse = {
      success: true,
      errorMessage: null
    };

    try {
      this.orderRepository.save(order);
    } catch (error) {
      result.errorMessage = error.sqlMessage;
      result.success = false;
    }
    return result;
  }

  public checkOrderIsValid(order: Order): boolean {
    if (!order.clientId || !order.date || !order.direction || !order.products || order.products.length === 0) {
      return false;
    }
    for (const product in order.products) {
      if (!order.products[product].productId || !order.products[product].cost || !order.products[product].quantity) {
        return false;
      }
    }
    return true;
  }
}
