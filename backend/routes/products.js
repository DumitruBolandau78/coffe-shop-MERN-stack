import { Router } from "express";
import Products from '../models/Product.js';
import Users from '../models/User.js';

const router = Router();

router.get('/latest-products', async (req, res) => {
    const products = await Products.find({type: 'latest-product'});
    res.json(products);
});

router.get('/menu-products', async (req, res) => {
    const products = await Products.find({type: 'menu-product'});
    res.json(products);
});

router.post('/get-product-info', async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await Products.findById(productId.id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
});

router.post('/user-products', async (req, res) => {
    try {
        const { userId } = req.body;
        const fullCart = await Users.findById(userId).select("cart").populate({path:"cart.productId", select:"_id imgUrl title newPrice price"})
        return res.status(200).json(fullCart)
    } catch (error) {
        console.error(error);
    }
});

router.post('/add-to-cart', async (req, res) => {
    try {
        const { productId, userId } = req.body;
        
        const product = await Products.findById(productId);
        const user = await Users.findById(userId);

        await user.addToCart(product);

        const fullCart = await Users.findById(userId).select("cart").populate({path:"cart.productId", select:"_id imgUrl title newPrice price"})
        return res.status(200).json(fullCart)
    } catch (error) {
        console.error(error);
    }
});

router.post('/delete-from-cart', async (req, res) => {
    try {
        const { productId, userId } = req.body;
        const user = await Users.findById(userId);
        await user.deleteFromCart(productId);
        const fullCart = await Users.findById(userId).select("cart").populate({path:"cart.productId", select:"_id imgUrl title newPrice price"})
        return res.status(200).json(fullCart);
    } catch (error) {
        console.error(error);
    }
});

export default router;