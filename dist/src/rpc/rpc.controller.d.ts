import { AccountService } from 'src/account/account.service';
import Account from '../account/account.entity';
interface GetAllRequest {
}
interface GetAllResponse {
    account: Account[];
}
export declare class RpcController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getAll(req: GetAllRequest): Promise<GetAllResponse>;
}
export {};
