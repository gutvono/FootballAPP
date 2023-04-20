// @ts-ignore
import chaiHttp = require('chai-http');
import * as chai from 'chai';
import App from '../app';
import { invalidLogin, loginTests } from "./mocks/userMock";

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota login', () => {
  it('Permite acesso com dados válidos', async () => {
    const { status, body: { token } } = await chai.request(app).post('/login').send(loginTests);
    expect(status).to.be.equal(200);
  });

  it('Nega acesso sem email', async () => {
    const response = await chai.request(app).post('/login').send(invalidLogin[0]);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' })
  });

  it('Nega acesso sem senha', async () => {
    const response = await chai.request(app).post('/login').send(invalidLogin[1]);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({ message: 'All fields must be filled' })
  });

  it('Nega acesso com dados inválidos', async () => {
    const response = await chai.request(app).post('/login').send(invalidLogin[2]);
    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Incorrect email or password' })
  });
});