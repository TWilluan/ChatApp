import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        method: ["GET", "POST"],
    },
});

export const getRecieverSocketId = (recieverId) => {
    return usersSocketMap[recieverId];
}

const usersSocketMap = {};

io.on("connection", (socket) => {
    console.log("a user connected: ", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined")
    {
        usersSocketMap[userId] = socket.id;
    }

    // send events to all online users
    io.emit("getOnlineUsers", Object.keys(usersSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete usersSocketMap[userId];
        io.emit("removeUsers", Object.keys(usersSocketMap));
    });
});


export { app, server, io };
