import PotController from '../remotes/pot/pot.controller';
import { AccountService } from 'src/account/account.service';
import Pot from 'src/remotes/pot/entity_interface/pot.entity';
import Account from '../account/account.entity';
interface GetAllRequest {
}
interface GetAllResponse {
    account: Account[];
}
export declare class RpcController {
    private readonly accountService;
    private readonly potController;
    constructor(accountService: AccountService, potController: PotController);
    getAll(req: GetAllRequest): Promise<GetAllResponse>;
    getAllPotsByAccountId(id: string): Promise<Pot[]>;
}
export {};
