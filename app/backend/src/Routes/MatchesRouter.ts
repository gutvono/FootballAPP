import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const router = Router();

const matchesController = new MatchesController();

router.get('/', (req, res) => matchesController.getAll(req, res));
router.post('/', (req, res) => matchesController.changeMatchStatus(req, res));
router.patch('/:id/finish', (req, res) => matchesController.finishMatch(req, res));

export default router;
