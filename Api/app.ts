
// import db from './config/knexfile';

import morgan from 'morgan';
// import chalk from 'chalk';

import cors from 'cors';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import promoRoutes from './routes/promoRoutes';

interface ErrorWithStatus extends Error {
    status?: number;
}


// Création de l'application Express
const app = express();

app.use(morgan('dev')); // Use morgan to log requests

app.use(express.urlencoded({extended: false})); // Use express.urlencoded to parse the body of the request

app.use(express.json()); // Use express.json to parse JSON bodies   

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
)); // Use cors to allow cross-origin requests



app.use('/api/users', userRoutes); // Use the userRoutes router for all routes starting with /users
app.use('/api/auth', authRoutes); // Use the authRoutes router for all routes starting with /auth
app.use('/api/promo', promoRoutes); // Use the promoRoutes router for all routes starting with /promo
app.use('/api/sousgrp', promoRoutes); // Use the promoRoutes router for all routes starting with /promo



app.use((req: Request, res: Response, next: NextFunction) => { // Handle 404 errors
    const error: ErrorWithStatus = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => { // Handle other errors
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});


export default app; // Export par défaut
