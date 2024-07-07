import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoDBStore from 'connect-mongodb-session';

env.config();
const PORT = 5500 || process.env.PORT;

const app = express();

const MongoDBStoreSession = MongoDBStore(session);
const store = new MongoDBStoreSession({
  uri: process.env.MONGODB_URI,
  collection: 'sessions'
});
const Store = MongoDBStoreSession.default || MongoDBStoreSession.Store;

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: Store
}));

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['get', 'post', 'put', 'delete'],
    allowedHeaders: ['Content-type']
}));

app.get('/', (req, res) => {
    return res.status(200).send('Hi');
});

async function start(){
    try {        
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            app.listen(PORT);
        });
    } catch (error) {
        console.log(error);
    }
}

start();