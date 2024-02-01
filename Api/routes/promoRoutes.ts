import express from 'express';
import * as promoController from '../controllers/promoController';
const router = express.Router();

router.get('/getAllPromo', promoController.getAllPromo);



export default router;
