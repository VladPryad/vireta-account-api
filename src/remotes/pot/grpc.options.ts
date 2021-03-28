import { GrpcOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export  const microserviceOptions: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
      package: "rpc",
      url: process.env.GRPC_CONNECTION_URL_POT,
      protoPath: join(process.cwd(), 'src/remote_proto/rpc_pot/rpc.proto')
    }
  };