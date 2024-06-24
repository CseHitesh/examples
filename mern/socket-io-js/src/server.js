import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("chat message", (msg) => {
    const data = {
      username: socket.id,
      message: msg,
    };
    io.emit("chat message", data);
  });

  //   socket.on("chat message", (msg) => {
  //     const data = {
  //       username: socket.id,
  //       message: msg,
  //     };

  //     socket.broadcast.emit(data);
  //     console.log({ data });
  //     // io.in("public-room").emit("chat message", data); // Broadcast message with username
  //   });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
