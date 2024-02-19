import express from "express";
import { send, get } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, send);
router.get("/:id", protectRoute, get);

export default router;