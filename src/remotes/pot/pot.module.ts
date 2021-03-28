import { Module } from '@nestjs/common';
import PotController from './pot.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { join } from "path";
 
@Module({
  imports: [],
  controllers: [PotController],
  providers: [],
})
export class PotModule {}