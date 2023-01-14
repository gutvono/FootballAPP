// @ts-ignore
import chaiHttp = require('chai-http');
import * as chai from 'chai';
import App from '../app';
import { invalidLogin, userTests, loginTests } from "./mocks/userMock";
// import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota login', () => {
  // let chaiHttpResponse: Response;

  it('Permite acesso com dados válidos', async () => {
    const { status, body: { token } } = await chai.request(app).post('/login').send(loginTests);
    expect(status).to.be.equal(200);

    // const response = await chai.request(app).get('/login/validation').auth(token, { type: 'bearer' })
    // expect(response.status).to.be.equal(200);
    // expect(response.body).to.deep.equal(userTests.role);
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

  // it('Retorno da role do usuario', async () => {
  //   const response = await chai.request(app).get('/login/validate').auth('accessToken', { type: 'bearer' });
  //   console.log(response);    
  //   expect(response.body).to.be.equal({ role: userTests.role });
  // })
});