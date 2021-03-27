import Account from './account.entity';
import { AccountService } from './account.service';
import CreateAccountDTO from './dto/create-account.dto';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getById(id: string): Account;
    getAll(): Promise<Account[]>;
    create(createAccountDto: CreateAccountDTO): Account;
}
