import { Router } from 'express';
import RegionsController from "../modules/regions/regions.controller";

const router = Router();

const regionsController = new RegionsController();

router.get('/', regionsController.get);
router.get('/:id', regionsController.getById);
router.post('/', regionsController.create);
router.put('/:id', regionsController.update);
router.delete('/:id', regionsController.delete);


export default router;
