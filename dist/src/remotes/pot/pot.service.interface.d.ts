import CreatePotDTO from './dto/create-pot.dto';
import Pot from './entity_interface/pot.entity';
interface PotService {
    createPot(dto: CreatePotDTO): Promise<Pot>;
    getAllPotsByAccountId({ id }: {
        id: any;
    }): Promise<Pot[]>;
}
export default PotService;
