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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_pot_dto_1 = require("./dto/create-pot.dto");
const microservices_1 = require("@nestjs/microservices");
const grpc_options_1 = require("./grpc.options");
let PotController = class PotController {
    onModuleInit() {
        this.potService = this.client.getService('RPC');
    }
    async getAllPotsByAccountId(id) {
        return this.potService.getAllPotsByAccountId({ id });
    }
    async createPot(dto) {
        return this.potService.createPot(dto);
    }
};
__decorate([
    microservices_1.Client(grpc_options_1.microserviceOptions),
    __metadata("design:type", Object)
], PotController.prototype, "client", void 0);
__decorate([
    common_1.Get("user/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PotController.prototype, "getAllPotsByAccountId", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pot_dto_1.default]),
    __metadata("design:returntype", Promise)
], PotController.prototype, "createPot", null);
PotController = __decorate([
    common_1.Controller('pot'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor)
], PotController);
exports.default = PotController;
//# sourceMappingURL=pot.controller.js.map