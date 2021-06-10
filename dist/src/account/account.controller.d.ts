import Account from './account.entity';
import { AccountService } from './account.service';
import CreateAccountDTO from './dto/create-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getById(id: string): Promise<Account>;
    logIn(req: any): Promise<{
        isLoggedIn: Boolean;
        token: String;
        login: String;
        id: String;
    }>;
    create(createAccountDto: CreateAccountDTO): Promise<Account>;
}
