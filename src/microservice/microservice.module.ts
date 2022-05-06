import { Module } from '@nestjs/common';
import { OrderMsController } from './order/order.ms.controller';
import { OrderMsService } from './order/order.ms.service';

@Module({
  imports: [],
  controllers: [OrderMsController],
  providers: [OrderMsService],
})
export class MicroServiceModule {}
