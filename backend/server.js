import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connect from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// middleware section
app.use(express.json()); //parse incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); //parse cookie
app.use(cors({ oridin: "http://localhost:3000"}));
// routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);



// start listening
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on: http://localhost:${PORT}/`);
});
