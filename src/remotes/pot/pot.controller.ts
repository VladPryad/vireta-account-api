import {
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor, Inject, OnModuleInit, Param,
  } from '@nestjs/common';
  import CreatePotDto from './dto/create-pot.dto';
  import { Client, ClientGrpc } from '@nestjs/microservices';
  import PotService from './pot.service.interface';
  import Pot from './entity_interface/pot.entity';
import { microserviceOptions } from './grpc.options';
   
  @Controller('pot')
  @UseInterceptors(ClassSerializerInterceptor)
  export default class PotController implements OnModuleInit {

    @Client(microserviceOptions)
    private client: ClientGrpc;

    private potService: PotService;
   
    onModuleInit() {
      this.potService = this.client.getService<PotService>('RPC');
    }
   
    @Get("user/:id")
    async getAllPotsByAccountId(@Param("id") id: string): Promise<Pot[]> {
      return this.potService.getAllPotsByAccountId({ id });
    }
   
    @Post()
    async createPot(@Body() dto: CreatePotDto): Promise<Pot> {
      return this.potService.createPot(dto);
    }
  }