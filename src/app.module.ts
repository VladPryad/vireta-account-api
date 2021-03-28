import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';
import { AccountModule } from './account/account.module';
import { RpcModule } from './rpc/rpc.module';

@Module({
  imports: [AccountModule, TypeOrmModule.forRoot(ormconfig), RpcModule]
})
export class AppModule {}
