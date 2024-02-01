import express from 'express';
import * as authController from '../controllers/authController';

const router = express.Router();

router.get('/signin', authController.signin);



export default router;
