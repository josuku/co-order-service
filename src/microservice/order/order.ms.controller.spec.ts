import { Test, TestingModule } from '@nestjs/testing';
import { OrderMsController } from './order.ms.controller';
import { OrderMsService } from './order.ms.service';

describe('AppController', () => {
  let appController: OrderMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderMsController],
      providers: [OrderMsService],
    }).compile();

    appController = app.get<OrderMsController>(OrderMsController);
  });
});
