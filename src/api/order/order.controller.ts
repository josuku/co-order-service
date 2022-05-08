import { Body, Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('all')
  public async getOrders(): Promise<OrderEntity[]> {
    Logger.log('received order/all request', 'getOrders')
    return this.orderService.getOrders();
  }

  @Get('products')
  public async getProductsOfOrder(@Query() query: { orderId: number }): Promise<ProductEntity[]> {
    Logger.log('received order/products request', 'getProductsOfOrder');
    return this.orderService.getProductsOfOrder(Number(query.orderId));
  }
}
