import 'dotenv/config';
import { JsonWebTokenError, JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

interface IJwt {
  sign(payload: JwtPayload): string;
  verify(token:string): JwtPayload;
}

export default class Jwt implements IJwt {
  private secret: Secret;
  private jwtConfig: SignOptions;
  constructor() {
    this.secret = process.env.JWT_SECRET || '';
    this.jwtConfig = {
      expiresIn: '15d',
      algorithm: 'HS256',
    };
  }

  sign(payload: JwtPayload): string {
    return sign({ ...payload }, this.secret, this.jwtConfig);
  }

  verify(token: string): JwtPayload {
    try {
      const payload = verify(token, this.secret);
      return payload as JwtPayload;
    } catch (error) {
      throw new JsonWebTokenError('Token inválido');
    }
  }
}
