import express from "express"

import { emailChecker, login, register } from "../controllers/authentication.js"

const router = express.Router()

router.post("/checkEmail",emailChecker)
router.post("/login",login)
router.post("/register",register)

export default router