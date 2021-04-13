import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import PotController  from '../remotes/pot/pot.controller';
import { AccountService } from 'src/account/account.service';
import Pot from 'src/remotes/pot/entity_interface/pot.entity';
import Account from '../account/account.entity'

interface GetAllRequest {

}
interface GetAllResponse {
    account: Account[]
}

@Controller('rpc')
export class RpcController {
    constructor(private readonly accountService: AccountService,
        private readonly potController: PotController) {}

    @GrpcMethod("RPC", "GetAll")
    async getAll(req: GetAllRequest): Promise<GetAllResponse> {
        const accounts = await this.accountService.getAll();
        return { account: accounts };
    }

    @GrpcMethod("RPC", "GetAllPotsByAccountId")
    async getAllPotsByAccountId(id: string): Promise<Pot[]> {
        return await this.potController.getAllPotsByAccountId(id);
    }
}
