import { Router } from "express";
import { registerUser } from "../contorollers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)


export default router