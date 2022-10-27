import { Request, Response } from 'express';
import { Pet } from '../models/Pet';

export const search = (req: Request, res: Response) => {
	const searchParam = (req.query.q as string) || false;

	if (!searchParam) {
		res.redirect('/');
		return;
	}

	const petsToShow = Pet.getPetBySearch(searchParam);

	res.render('pages/home', {
		petsToShow,
		searchParam,
	});
};
