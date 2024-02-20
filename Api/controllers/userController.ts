import { Request, Response } from 'express';
import db from '../config/knexfile'; // Assurez-vous que le chemin d'importation est correct

// Obtenir tous les utilisateurs
export const getAllUser = async (req: Request, res: Response) => {
	try {
		const user = await db('user').select('*'); // Remplacez 'user' par votre nom de table réel
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

// Obtenir un utilisateur par ID
export const getUserById = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const user = await db('user').where({ id }).first();
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ message: 'Utilisateur non trouvé' });
		}
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

// Créer un nouvel utilisateur
export const createUser = async (req: Request, res: Response) => {
	try {
		const newUser = req.body;
		const ids = await db('user').insert(newUser).returning('id');
		res.status(201).json({ id: ids[0] });
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

// Mettre à jour un utilisateur
export const updateUser = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const changes = req.body;
		const count = await db('user').where({ id }).update(changes);
		if (count) {
			res.json({ message: `Utilisateur ${id} mis à jour` });
		} else {
			res.status(404).json({ message: 'Utilisateur non trouvé' });
		}
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

// Supprimer un utilisateur
export const deleteUser = async (req: Request, res: Response) => {
	try {
		const id = req.params.id;
		const count = await db('user').where({ id }).del();
		if (count) {
			res.json({ message: `Utilisateur ${id} supprimé` });
		} else {
			res.status(404).json({ message: 'Utilisateur non trouvé' });
		}
	} catch (error) {
		res.status(500).json({ message: (error as Error).message });
	}
};

