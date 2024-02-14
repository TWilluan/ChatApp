import express from "express";
import { login, logout, signin } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.post("/signin", signin);

export default router;
