import { Router } from "express";
import User from '../models/User.js';
import signupValidator from '../utils/signupValidator.js';
import loginValidator from '../utils/loginValidator.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

const router = Router();

router.post('/signup', signupValidator, async (req, res) => {
    const {email, password} = req.body;
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.json({error: errors.array()[0].msg});
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashPassword, cart: [] });
        user.save();
        return res.json({signup: 'Successful'})
    } catch (error) {
        return res.json({error: error});
    }
});

router.post('/login', loginValidator, async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email});

        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.json({error: errors.array()[0].msg});
        }

        req.session.user = user;
        req.session.isAuth = true;
        req.session.save(err => {
            if(err) throw new err;
            return res.json({logged: 'Successful', session: req.session.user});
        });

    } catch (error) {
        return res.json({error: error});
    }

})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) throw err;
        return res.json({logout: 'Successful'});
    });
});

export default router;