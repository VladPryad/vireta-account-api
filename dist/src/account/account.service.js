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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const account_entity_1 = require("./account.entity");
let AccountService = class AccountService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    getById(id) {
        return this.accountRepository.findOne({
            where: {
                id
            }
        });
    }
    async findOne(username) {
        return this.accountRepository.findOne({
            where: {
                login: username
            }
        });
    }
    async logIn(username, password) {
        const user = await this.accountRepository.findOne({
            where: {
                login: username,
                password: password
            }
        });
        if (!user)
            return { isLoggedIn: false, token: null, login: null, id: null };
        return {
            isLoggedIn: true,
            token: user.googleId,
            login: user.login,
            id: user.id
        };
    }
    create(dto) {
        const acc = new account_entity_1.default();
        acc.login = dto.login;
        acc.password = dto.password;
        acc.googleId = dto.googleId || "";
        return this.accountRepository.save(acc);
    }
    async getAll() {
        return this.accountRepository.find();
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(account_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map