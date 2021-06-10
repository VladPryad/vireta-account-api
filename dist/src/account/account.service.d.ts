import { Repository } from 'typeorm';
import Account from './account.entity';
import CreateAccountDTO from './dto/create-account.dto';
export declare class AccountService {
    private accountRepository;
    constructor(accountRepository: Repository<Account>);
    getById(id: string): Promise<Account>;
    findOne(username: string): Promise<Account>;
    logIn(username: String, password: String): Promise<{
        isLoggedIn: Boolean;
        token: String;
        login: String;
        id: String;
    }>;
    create(dto: CreateAccountDTO): Promise<Account>;
    getAll(): Promise<Account[]>;
}
