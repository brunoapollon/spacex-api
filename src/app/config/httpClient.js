const { default: axios } = require('axios');
const { env } = require('./env');

const httpClient = axios.create({
  baseURL: env.spacexApiUrl,
});

module.exports = httpClient;
