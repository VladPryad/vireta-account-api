import { OnModuleInit } from '@nestjs/common';
import CreatePotDto from './dto/create-pot.dto';
import Pot from './entity_interface/pot.entity';
export default class PotController implements OnModuleInit {
    private client;
    private potService;
    onModuleInit(): void;
    getAllPotsByAccountId(id: string): Promise<Pot[]>;
    createPot(dto: CreatePotDto): Promise<Pot>;
}
