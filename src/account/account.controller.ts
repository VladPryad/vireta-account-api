import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import Account from './account.entity';
import { AccountService } from './account.service';
import CreateAccountDTO from './dto/create-account.dto';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get(':id')
    getById(@Param('id') id: string): Account {
        return this.accountService.getById(id);
    }

    getAll(): { account: Promise<Account[]> } {
        return { account: this.accountService.getAll() };
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createAccountDto: CreateAccountDTO): Account {
        return this.accountService.create(createAccountDto);
    }
}
