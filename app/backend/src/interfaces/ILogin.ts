import IUser from './IUser';

export default interface ILogin {
  login(body: IUser): Promise<string>;
}
