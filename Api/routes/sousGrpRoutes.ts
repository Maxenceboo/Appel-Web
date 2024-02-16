import express from 'express';
import * as sousGrpController from '../controllers/sousGrpController';

const router = express.Router();

router.post('/getSousGrpsByPromo', sousGrpController.getSousGrpsByPromo);



export default router;
