import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import Teams from '../database/models/Teams';

import { Response } from 'superagent';
import { getTeamsMock, getTeamByIdMock } from './mocks/teamMock';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota /teams', () => {
  let chaiHttpResponse: Response;

  it('Busca todos os times', async () => {
    sinon.stub(Teams, 'findAll').resolves(getTeamsMock as Teams[])

    chaiHttpResponse = await chai.request(app).get('/teams');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getTeamsMock);
  });

  it('Busca times pelo ID', async () => {
    sinon.stub(Teams, 'findByPk').resolves(getTeamByIdMock as Teams)

    chaiHttpResponse = await chai.request(app).get('/teams/2');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getTeamByIdMock);
  });

  afterEach(() => {sinon.restore()});
});