
import express from "express"
import {loginUser, logoutUser, signinUser} from "../controllers/auth.controllers.js"

const router = express.Router();

router.get("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/signup", signinUser);

export default router