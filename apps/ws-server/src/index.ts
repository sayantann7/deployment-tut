import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on("connection", (ws) => {
  console.log("New client connected");

  prisma.user.create({
    data: {
        username: Math.random().toString(36).substring(2, 15),
        password: Math.random().toString(36).substring(2, 15),
    },
  });
        

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});