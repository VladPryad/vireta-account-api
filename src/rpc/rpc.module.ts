import { Module } from '@nestjs/common';
import { RpcService } from './rpc.service';
import { RpcController } from './rpc.controller';
import { AccountModule } from 'src/account/account.module';
import { PotModule } from 'src/remotes/pot/pot.module';
import PotController from 'src/remotes/pot/pot.controller';

@Module({
  imports: [AccountModule, PotModule],
  providers: [RpcService, PotController],
  controllers: [RpcController]
})
export class RpcModule {}
