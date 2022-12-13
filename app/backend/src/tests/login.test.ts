import chaiHttp from "chai-http";
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as bcryptjs from 'bcryptjs';
import * as jsonwebtoken from 'jsonwebtoken';
import { Response } from 'superagent';
import App from '../app';
import User from '../database/models/User';
import { invalidLogin, userTests, loginTests } from "./mocks/userMock";
import { before } from "node:test";

chai.use(chaiHttp);

const { app } = new App();
const { expect } = chai;

describe('Testes da rota login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, 'findOne'). resolves (userTests as User)
  })
})