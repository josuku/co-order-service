import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { host, port, msport } from './config';

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: host,
    port: msport
  },
};

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const microservice = app.connectMicroservice(microserviceOptions);
  
  Logger.log('Running Microservice in ' + microserviceOptions.options.host.toString() + 
             ':' + microserviceOptions.options.port.toString(), 'bootstrap');
  Logger.log('Running API in ' + host + ':' + port.toString(), 'bootstrap');
  await app.startAllMicroservices();
  await app.listen(port);
}
bootstrap();
