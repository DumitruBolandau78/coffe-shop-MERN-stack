import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';

import authRoutes from './routes/auth.js';
import emailRoutes from './routes/email.js';
import productsRoutes from './routes/products.js';

env.config();
const PORT = 5500 || process.env.PORT;

const app = express();

const MongoDBStoreSession = MongoDBStore(session);
const store = new MongoDBStoreSession({
    uri: process.env.MONGODB_URI,
    collection: 'sessions' // MongoDB collection to store sessions
});

app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        store,
        cookie: {
            maxAge: 1000 * 60 * 30 // Session expiry time (optional)
        }
    })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['get', 'post', 'put', 'delete'],
    allowedHeaders: ['Content-type']
}));

app.get('/', (req, res) => {
    res.send('Hi');
});
app.use('/auth', authRoutes);
app.use('/send-email', emailRoutes);
app.use('/products', productsRoutes);

async function start() {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            app.listen(PORT);
        });
    } catch (error) {
        console.log(error);
    }
}

start();