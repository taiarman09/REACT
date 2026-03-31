import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose.connect("mongodb://localhost:27017/compass/")
.then(()=> console.log("Mongo DB is Connect"))
.catch(()=> console.log("Mongo DB is Not Connect"))


app.listen(8080, ()=>{
    console.log("Server runnig on 8080")
})