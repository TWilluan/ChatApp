
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connect from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// middleware section
app.use(express.json()); //parse incoming requests with JSON payloads(from req.body)
app.use("/api/auth", authRoutes);

// start listening
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port: ${PORT}`);
});