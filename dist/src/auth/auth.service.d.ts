import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private accountService;
    private jwtService;
    constructor(accountService: AccountService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
