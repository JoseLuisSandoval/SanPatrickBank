import request from 'supertest';
import { Given, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import assert from 'assert';
import { BackendApp } from '../../../../../../src/apps/SPWeb/backend/backendApp';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;

BeforeAll(async () => {
  application = new BackendApp();
  await application.start();
});

Given('I send a GET request to {string}', (route: string) => {
    if (application.httpServer) {
		_request = request(application.httpServer).get(route);
	  }
});

Then('The response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
	if (application.httpServer) {
		_request = request(application.httpServer)
		  .put(route)
		  .send(JSON.parse(body) as object);
	  }
});

Then('The response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

AfterAll(async () => {
  await application.stop();
});
