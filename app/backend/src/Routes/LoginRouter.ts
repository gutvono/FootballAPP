import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const router = Router();

const loginController = new LoginController();

router.post('/', (req, res) => loginController.login(req, res));
router.get('/validate', (req, res) => loginController.userAuth(req, res));

export default router;
