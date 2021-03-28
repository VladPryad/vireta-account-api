import { Module } from '@nestjs/common';
import { RpcService } from './rpc.service';
import { RpcController } from './rpc.controller';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AccountModule],
  providers: [RpcService],
  controllers: [RpcController]
})
export class RpcModule {}
