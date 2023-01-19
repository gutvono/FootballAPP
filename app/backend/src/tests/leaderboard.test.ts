import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';

import { Response } from 'superagent';
import { homeLeaderboard, awayLeaderboard, teamsForLeaderboard } from './mocks/leaderboardMocks';
import Matches from '../database/models/Matches';
import { getMatches } from './mocks/matchesMocks';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota /leaderboard', () => {
  let chaiHttpResponse: Response;

  it('Busca a tabela pelos jogos que os times realizaram em casa', async () => {
    sinon.stub(Matches, 'findAll').resolves(getMatches as unknown as Matches[]);
    sinon.stub(Teams, 'findAll').resolves(teamsForLeaderboard as Teams[]);

    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(homeLeaderboard);
  })

  afterEach(() => {sinon.restore()});
})