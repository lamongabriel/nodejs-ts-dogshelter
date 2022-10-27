import { Request, Response } from 'express';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
	res.render('pages/home.ejs', {
		banner: {
			title: 'Get a look to all of our breeds',
			url: '/images/allanimals.jpg',
		},
		petsToShow: Pet.getAll(),
		allActive: 'active',
	});
};

export const dogs = (req: Request, res: Response) => {
	res.render('pages/home.ejs', {
		banner: {
			title: 'Dogs',
			url: '/images/banner_dog.jpg',
		},
		petsToShow: Pet.getPetByType('dog'),
		dogsActive: 'active',
	});
};

export const cats = (req: Request, res: Response) => {
	res.render('pages/home.ejs', {
		banner: {
			title: 'Cats',
			url: '/images/banner_cat.jpg',
		},
		petsToShow: Pet.getPetByType('cat'),
		catsActive: 'active',
	});
};

export const fishes = (req: Request, res: Response) => {
	res.render('pages/home.ejs', {
		banner: {
			title: 'Fishes',
			url: '/images/banner_fish.jpg',
		},
		petsToShow: Pet.getPetByType('fish'),
		fishesActive: 'active',
	});
};
