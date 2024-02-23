import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path"

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { app, server } from "./socket/socket.js";
import connect from "./db/connectToMongoDb.js";

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

// middleware section
app.use(express.json()); //parse incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); //parse cookie

// routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// start listening
server.listen(PORT, () => {
    connect();
    console.log(`Server is running on: http://localhost:${PORT}/`);
});
