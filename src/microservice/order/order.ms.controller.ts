import { BadRequestException, Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SaveOrderResponse, Order, ModifyOrderResponse } from '../../interface/order.interface';
import { OrderMsService } from './order.ms.service';

@Controller()
export class OrderMsController {
  constructor(private readonly orderService: OrderMsService) {}

  @MessagePattern('create')
  public async createOrder(@Body() order: Order): Promise<SaveOrderResponse> {
    Logger.log('received create request', 'createOrder')
    if (!this.orderService.checkOrderIsValid(order)) {
      Logger.error('Bad Request', order);
      return {
        id: 0,
        errorMessage: 'Bad Request'
      };
    }
    return this.orderService.createOrder(order);
  }

  @MessagePattern('modify')
  public async modifyOrder(@Body() order: Order): Promise<ModifyOrderResponse> {
    Logger.log('received modify request', 'modifyOrder')
    if (!this.orderService.checkOrderIsValid(order)) {
      Logger.error('Bad Request', order);
      return {
        success: false,
        errorMessage: 'Bad Request'
      };
    }
    return this.orderService.modifyOrder(order);
  }
}
