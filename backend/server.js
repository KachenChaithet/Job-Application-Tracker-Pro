import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import job from './Routers/JobRouter.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())
app.use('/job', job)


app.listen(port, () => {
    console.log('server run on port', port);
})