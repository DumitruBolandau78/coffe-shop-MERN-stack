import { Router } from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";
const router = Router();

router.post('/toggle-product', async (req, res) => {
    try {
        const { productId, method, userId } = req.body;

        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if(method === 'add'){
            user.addToFavorites(product._id);
        } else if(method === 'remove'){
            user.deleteFromFavorites(product._id);
        }
        
        return res.status(200).json(user.favorites)
    } catch (error) {
        console.log(error);
    }
});

export default router;