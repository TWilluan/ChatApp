
import express from "express"
import {loginUser, logoutUser, signinUser} from "../controllers/auth.controllers.js"

const router = express.Router();

router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.post("/signin", signinUser);

export default router