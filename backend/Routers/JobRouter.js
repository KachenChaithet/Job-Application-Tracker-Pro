import express from "express"
import { helloworld } from "../Controllers/jobController.js"

const router = express.Router()

router.get('/job', helloworld)

export default router