import express from "express";
import { send } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", send);

export default router;
