import { Request, Response } from 'express';
import db from '../config/knexfile'; // Assurez-vous que le chemin d'importation est correct

export const getSousGrpsByPromo = async (req: Request, res: Response) => {
    // get sousGrps by promo libetape 
    // sous grp is a child of promo with foreign key libetape
    const { libetape } = req.query;
    try {
        const sousGrps = await db('sous_grp').where({ libetape });
        return res.status(200).json(sousGrps);
    } catch (error) {
        return res.status(500).json(error);
    }
}
