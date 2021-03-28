"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microserviceOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: "rpc",
        url: process.env.GRPC_CONNECTION_URL_POT,
        protoPath: path_1.join(process.cwd(), 'src/remote_proto/rpc_pot/rpc.proto')
    }
};
//# sourceMappingURL=grpc.options.js.map