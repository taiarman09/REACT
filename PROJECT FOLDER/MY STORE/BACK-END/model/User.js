import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("Registration", userSchema)

export default User