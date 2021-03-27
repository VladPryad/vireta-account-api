import { Repository } from 'typeorm';
import Account from './account.entity';
import CreateAccountDTO from './dto/create-account.dto';
export declare class AccountService {
    private accountRepository;
    constructor(accountRepository: Repository<Account>);
    getById(id: string): Account;
    create(dto: CreateAccountDTO): Account;
    getAll(): Promise<Account[]>;
}
