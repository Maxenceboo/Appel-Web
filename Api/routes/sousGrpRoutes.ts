import express from 'express';
import * as sousGrpController from '../controllers/sousGrpController';

const router = express.Router();

router.get('/', sousGrpController.getSousGrpsByPromo);



export default router;
