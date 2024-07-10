import { body } from 'express-validator';
import User from '../models/User.js';

export default [
    body('email', 'Please use a valid email address.').isEmail().normalizeEmail().custom(async (value, {req}) => {
        try {
            const user = await User.findOne({email: value});

            if(user){
                return Promise.reject('This email is used by another user!');
            }
        } catch (error) {
            console.log(error);
        }
    }),
    body('password', 'Password should be at least 6 characters.').isLength({min: 6, max: 20}).isAlphanumeric()
]