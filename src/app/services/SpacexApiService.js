const httpClient = require('../config/httpClient');

class SpacexApiSerive {
  upcomingLaunches() {
    return httpClient.get('/launches/upcoming');
  }

  pastLaunches() {
    return httpClient.get('/launches/past');
  }
}

module.exports = new SpacexApiSerive();
