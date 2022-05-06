import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MicroServiceModule } from './microservice/microservice.module';

@Module({
  imports: [
    ApiModule,
    MicroServiceModule
  ]
})
export class AppModule {}
