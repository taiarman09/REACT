import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.js'
import router from './route/authRoutes.js'


const app = express()

app.use(express.json())


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


dbConnect()


app.use("/api", router)


app.listen(8080, () => {
    console.log("Server running on port 8080")
})