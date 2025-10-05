import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const CreateJob = async (req, res) => {
    const { company, title, status, date, salary, location, email, notes } = req.body
    if (!company || !title || !status || !location) {
        return res.status(400).json({ message: "Fill out all the details." })
    }
    try {
        const Createjob = await prisma.job.create({
            data: {
                company,
                title,
                status,
                date,
                salary,
                location,
                email,
                notes
            }
        })

        res.status(201).json({ Create: Createjob, message: 'Create Successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })

    }

}

export const UpdateJob = async (req, res) => {
    const { id } = req.params
    const { company, title, status, date, salary, location, email, notes } = req.body
    try {
        const update = await prisma.job.update({
            where: { id: parseInt(id) },
            data: { company, title, status, date, salary, location, email, notes }
        })

        res.status(201).json({ Create: update, message: 'Update Successfully' })

    } catch (error) {

        res.status(500).json({ error: error.message })
    }

}

export const GetAllJob = async (req, res) => {
    try {
        const JobAll = await prisma.job.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        res.status(201).json({ AllJob: JobAll })

    } catch (error) {

        res.status(500).json({ error: error.message })
    }

}


export const GetById = async (req, res) => {
    const { id } = req.params
    try {
        const JobId = await prisma.job.findUnique({
            where: { id: parseInt(id) }
        })

        res.status(201).json({ GetById: JobId })

    } catch (error) {

        res.status(500).json({ error: error.message })
    }

}

export const DeleteJob = async (req, res) => {
    const { id } = req.params
    try {
        const JobId = await prisma.job.findUnique({
            where: { id: parseInt(id) }
        })

        if (!JobId) {
            return res.status(500).json({ message: "NOt found id !!!" })

        }

        const remove = await prisma.job.delete({
            where: { id: parseInt(id) }
        })

        res.status(201).json({ delete: remove, message: "Delete Successfully" })

    } catch (error) {

        res.status(500).json({ error: error.message })
    }

}