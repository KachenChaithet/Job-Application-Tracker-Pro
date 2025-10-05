import express from "express"
import { CreateJob, DeleteJob, GetAllJob, GetById, UpdateJob } from '../Controllers/JobController.js'
const router = express.Router()

router.post('/create', CreateJob)

router.put('/update/:id', UpdateJob)

router.get('/getall', GetAllJob)
router.get('/getById/:id', GetById)

router.delete('/delete/:id', DeleteJob)

export default router