import express from 'express'
import { ProductDAta } from '../model/Product.js'


const route = express.Router()

route.get("/products", async (req, res) => {
    try {
        const data = await ProductDAta.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({ msg: "Error fetching products" });
    }
})


export default route