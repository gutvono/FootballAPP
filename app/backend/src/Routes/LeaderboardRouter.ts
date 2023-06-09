import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/home', (req, res) => leaderboardController.getAll(req, res));
router.get('/away', (req, res) => leaderboardController.getAll(req, res));
router.get('/', (req, res) => leaderboardController.getAll(req, res));

export default router;
