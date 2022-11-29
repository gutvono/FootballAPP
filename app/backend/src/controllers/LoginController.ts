import { Request, Response } from 'express';
import LoginService from '../services/LoginServices';

export default class LoginController {
  constructor(
    private services = new LoginService(),
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const token = await this.services.login(req.body);
    return res.status(200).json({ token });
  }

  public async userAuth(req: Request, res: Response): Promise<Response> {
    const { authorization } = req.headers;
    console.log(req.headers);

    const role = await this.services.authLogin(authorization as string);
    return res.status(200).json({ role });
  }
}
