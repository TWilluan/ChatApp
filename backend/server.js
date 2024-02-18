import express from "express";
import dotenv from "dotenv";
import cookie from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connect from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// middleware section
app.use(express.json()); //parse incoming requests with JSON payloads(from req.body)
app.use(cookie());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// start listening
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on: http://localhost:${PORT}/`);
});
