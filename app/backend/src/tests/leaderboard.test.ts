import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota /leaderboard', () => {
  let chaiHttpResponse: Response;

  it('Busca a tabela pelos jogos que os times realizaram em casa', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.equal(200);
  })

  it('Busca a tabela pelos jogos que os times realizaram fora de casa', async () => {
    chaiHttpResponse = await chai.request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.equal(200);
  })

  afterEach(() => {sinon.restore()});
});