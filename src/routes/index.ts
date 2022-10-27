import { Router } from 'express';
import * as MainController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', MainController.home);
router.get('/dogs', MainController.dogs);
router.get('/cats', MainController.cats);
router.get('/fishes', MainController.fishes);

router.get('/search', SearchController.search);

export default router;
