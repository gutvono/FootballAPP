import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/', (req, res) => matchesController.getAll(req, res));

export default router;
