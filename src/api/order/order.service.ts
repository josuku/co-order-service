import { Injectable } from '@nestjs/common';
import { Order } from 'src/interface/order.interface';

@Injectable()
export class OrderService {
  public getOrders(): Order[] {
    return [];
  }
}
