import mongoose from "mongoose";


export const dbConnect = () => {
    mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/mydatabase")
        .then(() => console.log("Mongo DB is Connect"))
        .catch((error) => console.log("Mongo DB Error:", error.message))
}

export default dbConnect