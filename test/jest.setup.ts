import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {

  const server = new SetupServer();
  console.log({server})
  server.init();
  global.testRequest = supertest(server.getApp());
});
