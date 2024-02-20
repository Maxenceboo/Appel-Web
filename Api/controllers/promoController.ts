import { Request, Response } from 'express';
import db from '../config/knexfile'; // Assurez-vous que le chemin d'importation est correct


export const getAllPromo = async (req: Request, res: Response) => {
  // get libetape from promo
  try {
    const promo = await db('promo').select('libetape');
    res.status(200).json(promo);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
