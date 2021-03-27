import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule, TypeOrmModule.forRoot(ormconfig)]
})
export class AppModule {}
