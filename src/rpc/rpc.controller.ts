import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AccountController } from 'src/account/account.controller';
import { AccountService } from 'src/account/account.service';
import Account from '../account/account.entity'

interface GetAllRequest {

}
interface GetAllResponse {
    account: Account[]
}

@Controller('rpc')
export class RpcController {
    constructor(private readonly accountService: AccountService) {}

    @GrpcMethod("RPC", "GetAll")
    async getAll(req: GetAllRequest): Promise<GetAllResponse> {
        const accounts = await this.accountService.getAll();
        return { account: accounts };
    }
}
