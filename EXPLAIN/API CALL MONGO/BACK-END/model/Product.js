import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    img:String,
    title: String,
    price: Number,
    dec: String,
    setPrice: String
})

export const ProductDAta = mongoose.model("products", ProductSchema)