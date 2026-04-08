import express from 'express'
import Product from '../model/Product.js'

const router = express.Router()

// GET all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: "Error fetching products" })
    }
})

export default router