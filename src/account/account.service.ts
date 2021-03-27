import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Account from './account.entity';
import CreateAccountDTO from './dto/create-account.dto';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
      ) {}

    getById(id: string): Account {
        return new Account();
    }

    create(dto: CreateAccountDTO): Account {
        const acc = new Account();
        acc.login = dto.login;
        acc.password = dto.password;
        return acc;
    }

    async getAll(): Promise<Account[]> {
        return this.accountRepository.find();
    }
 }
