import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcOptions, MicroserviceOptions, Transport } from '@nestjs/microservices'
import * as dotenv from 'dotenv';

dotenv.config({path: '../.env'});

const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: "app",
    protoPath: "./proto/app.proto"
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, microserviceOptions);
  await app.listen(() => {});
}
bootstrap();
