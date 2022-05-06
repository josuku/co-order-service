import { Injectable, Logger } from '@nestjs/common';
import { ModifyOrderResponse, Order, SaveOrderResponse } from '../../interface/order.interface';

@Injectable()
export class OrderMsService {

  public async createOrder(order: Order): Promise<SaveOrderResponse> {
    let result: SaveOrderResponse = {
      id: 1,
      errorMessage: null
    };

    // 1. SAVE ORDER TO DATABASE

    // 2. RETURN ID
    return result;
  }

  public async modifyOrder(order: Order): Promise<ModifyOrderResponse> {
    let result: ModifyOrderResponse = {
      success: true,
      errorMessage: null
    };

    // 1. UPDATE ORDER INTO DATABASE

    // 2. RETURN TRUE IF SUCCESS
    return result;
  }

  public checkOrderIsValid(order: Order): boolean {
    if (!order.clientId || !order.date || !order.products || order.products.length === 0) {
      return false;
    }
    for (const product in order.products) {
      if (!order.products[product].id || !order.products[product].cost || !order.products[product].quantity) {
        return false;
      }
    }
    return true;
  }
}
