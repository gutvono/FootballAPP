// @ts-ignore
import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import App from '../app';
import Matches from '../database/models/Matches';
import { Response } from 'superagent';
import { getMatches } from './mocks/matchesMocks';

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota /matches', () => {
  let chaiHttpResponse: Response;

  afterEach(() => {(Matches.findAll as sinon.SinonStub).restore()});

  it('Busca todas as partidas', async () => {
    sinon.stub(Matches, 'findAll').resolves(getMatches as unknown[] as Matches[]);
  
    chaiHttpResponse = await chai.request(app).get('/matches');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal(getMatches);
  });

  it('Retorna partidas em progresso', async () => {
    sinon.stub(Matches, 'findAll').resolves([getMatches[1]] as unknown[] as Matches[])
    
    chaiHttpResponse = await chai.request(app).get('/matches?inProgress=true');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([getMatches[1]]);
  });

  it('Retorna partidas que não estão em progresso', async () => {
    sinon.stub(Matches, 'findAll').resolves([getMatches[0]] as unknown[] as Matches[])
    
    chaiHttpResponse = await chai.request(app).get('/matches?inProgress=false');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.deep.equal([getMatches[0]]);
  });
});