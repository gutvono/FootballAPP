import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app'
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /', () => {
  it('requisição feita com sucesso', async () => {
    const res = await chai.request(app).get('/');
    expect(res.body).to.deep.equal({ ok: true })
  });
});
