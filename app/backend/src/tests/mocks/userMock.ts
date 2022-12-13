import IUser from '../../interfaces/IUser'

export const userTests = {
  id: 1,
  username: 'test',
  role: 'admin',
  email: 'admin@gmail.com',
  password: 'admin',
};

export const loginTests: IUser = {
  email: 'admin@gmail.com',
  password: 'admin',
};

export const invalidLogin: IUser[] = [
  {
    email: '',
    password: 'sem email',
  },
  {
    email: 'semsenha@gmail.com',
    password: '',
  },
  {
    email: 'naotem@gmail.com',
    password: 'senha1',
  },
];