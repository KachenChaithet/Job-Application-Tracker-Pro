import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import test from './Routers/JobRouter.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use('/api', test)


app.listen(port, () => {
    console.log('server run on port', port);
})