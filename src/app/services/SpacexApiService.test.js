/* eslint-disable no-return-assign */
const {
  expect, test, beforeEach, afterEach,
} = require('@jest/globals');

const SpacexApiService = require('./SpacexApiService');
let { env } = require('../config/env');

const oldProcessEnv = env;

beforeEach(() => env = { SPACEX_API_URL: 'https://api.spacexdata.com/v5/launches' });

afterEach(() => env = oldProcessEnv);

test('test latest launcher', async () => {
  const { data } = await SpacexApiService.latestLauncher();
  expect(data).toBeDefined();
  expect(data).toHaveProperty('id');
});

test('test next launcher', async () => {
  const { data } = await SpacexApiService.nextLauncher();
  expect(data).toBeDefined();
  expect(data).toHaveProperty('id');
});

test('test upcoming launches', async () => {
  const { data } = await SpacexApiService.upcomingLaunches();
  expect(data).toBeDefined();
  expect(data).not.toHaveLength(0);
});

test('test past launches', async () => {
  const { data } = await SpacexApiService.pastLaunches();
  expect(data).toBeDefined();
  expect(data).not.toHaveLength(0);
});
