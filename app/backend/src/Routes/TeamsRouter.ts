import { Router } from 'express';
import TeamsController from '../controllers/TeamController';

const router = Router();

const teamsController = new TeamsController();

router.get('/', (req, res) => teamsController.getAll(req, res));
router.get('/:id', (req, res) => teamsController.getById(req, res));

export default router;
