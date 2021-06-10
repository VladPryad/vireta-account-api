import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import Account from './account.entity';
import { AccountService } from './account.service';
import CreateAccountDTO from './dto/create-account.dto';
//import { AuthService } from '../auth/auth.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get(':id')
    getById(@Param('id') id: string): Promise<Account> {
        return this.accountService.getById(id);
    }

    @Get()
    logIn(@Req() req): Promise<{isLoggedIn: Boolean, token: String, login: String, id: String}> {
        return this.accountService.logIn(req.query.username, req.query.password);
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createAccountDto: CreateAccountDTO): Promise<Account> {
        return this.accountService.create(createAccountDto);
    }

    
}
