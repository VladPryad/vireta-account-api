"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const pot_controller_1 = require("../remotes/pot/pot.controller");
const account_service_1 = require("../account/account.service");
const pot_entity_1 = require("../remotes/pot/entity_interface/pot.entity");
let RpcController = class RpcController {
    constructor(accountService, potController) {
        this.accountService = accountService;
        this.potController = potController;
    }
    async getAll(req) {
        const accounts = await this.accountService.getAll();
        return { account: accounts };
    }
    async getAllPotsByAccountId(id) {
        return this.potController.getAllPotsByAccountId(id);
    }
};
__decorate([
    microservices_1.GrpcMethod("RPC", "GetAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RpcController.prototype, "getAll", null);
__decorate([
    microservices_1.GrpcMethod("RPC", "GetAllPotsByAccountId"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RpcController.prototype, "getAllPotsByAccountId", null);
RpcController = __decorate([
    common_1.Controller('rpc'),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        pot_controller_1.default])
], RpcController);
exports.RpcController = RpcController;
//# sourceMappingURL=rpc.controller.js.map