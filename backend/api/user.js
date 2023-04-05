import express from "express"
import { getUsers } from "../controller/userController.js"

const router = express.Router()

router.get('/', getUsers)
router.post('/', postUser)

export default router