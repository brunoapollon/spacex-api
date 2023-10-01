const httpClient = require('../config/httpClient');

class SpacexApiSerive {
  upcomingLaunches() {
    return httpClient.get('/launches/upcoming');
  }

  pastLaunches() {
    return httpClient.get('/launches/past');
  }

  latestLauncher() {
    return httpClient.get('/launches/latest');
  }
}

module.exports = new SpacexApiSerive();
