import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage("chat")
  handleMessage(@MessageBody() message: string) {
    this.server.emit("chat", message);
  }
}
