import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/db.js'
import productRoutes  from './routes/productRoutes.js'
dotenv.config()


const app = express()
app.use(express.json())

await dbConnect()

app.use("/api", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})