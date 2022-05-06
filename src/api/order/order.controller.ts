import { Controller, Get } from '@nestjs/common';
import { Order } from 'src/interface/order.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('all')
  public async getOrders(): Promise<Order[]> {
    return this.orderService.getOrders();
  }
}
