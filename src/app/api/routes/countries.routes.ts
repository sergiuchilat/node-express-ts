import { Router } from 'express';
import CountriesController from "../modules/countries/countries.controller";

const router = Router();

const countriesController = new CountriesController();

router.get('/', countriesController.get);
router.get('/:id', countriesController.getById);
router.post('/', countriesController.create);
router.put('/:id', countriesController.update);
router.delete('/:id', countriesController.delete);


export default router;
