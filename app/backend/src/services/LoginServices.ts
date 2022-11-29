import { ModelStatic } from 'sequelize';
import * as bCrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';
import Exception from '../utils/http.exception';
import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import Jwt from '../utils/JwtToken';
import IUser from '../interfaces/IUser';

export default class LoginService implements ILogin {
  constructor(
    private userModel: ModelStatic<User> = User,
    private jwtServices = new Jwt(),
  ) {}

  static validateLogin(email: string, password: string): void {
    // const rgx = /\S+@\S+\.\S+/; rgx.test(email)
    if (!email || !password) {
      throw new Exception(400, 'All fields must be filled');
    }
  }

  static validateUser(password: string, user: User | null): void {
    if (!user || !bCrypt.compareSync(password, user.password)) {
      throw new Exception(401, 'Incorrect email or password');
    }
  }

  public async login({ email, password }: IUser): Promise<string> {
    LoginService.validateLogin(email, password);
    const user = await this.userModel.findOne({ where: { email } });
    LoginService.validateUser(password, user);
    const { id, role, username } = user as User;
    const token = this.jwtServices.sign({ id, role, username });
    return token;
  }

  public authLogin(auth: string): JwtPayload {
    const verify = this.jwtServices.verify(auth);
    return verify.role;
  }
}
