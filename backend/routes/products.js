import { Router } from "express";
import Products from '../models/Product.js';

const router = Router();

router.get('/latest-products', async (req, res) => {
    const products = await Products.find({type: 'latest-product'});
    res.json(products);
});

router.get('/menu-products', async (req, res) => {
    const products = await Products.find({type: 'menu-product'});
    res.json(products);
});


export default router;