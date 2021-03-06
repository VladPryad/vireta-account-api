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

    getById(id: string): Promise<Account> {
        return this.accountRepository.findOne({
            where: {
                id
            }
        });
    }

    async findOne(username: string): Promise<Account> {
        return this.accountRepository.findOne({
            where: {
                login: username
            }
        });
    }

    async logIn(username: String, password: String): Promise<{ isLoggedIn: Boolean, token: String, login:String, id: String}> {
        const user = await this.accountRepository.findOne({
            where: {
                login: username,
                password: password
            }
        });

        if(!user) return { isLoggedIn: false, token: null, login: null, id: null };
        return {
            isLoggedIn: true,
            token: user.googleId,
            login: user.login,
            id: user.id
        }
    }

    create(dto: CreateAccountDTO): Promise<Account> {
        const acc = new Account();
        acc.login = dto.login;
        acc.password = dto.password;
        acc.googleId = dto.googleId || ""; 
        return this.accountRepository.save(acc);
    }

    async getAll(): Promise<Account[]> {
        return this.accountRepository.find();
    }
 }
