const httpClient = require('../config/httpClient');

class SpacexApiSerive {
  upcomingLaunches() {
    return httpClient.get('/upcoming');
  }

  pastLaunches() {
    return httpClient.get('/past');
  }

  latestLauncher() {
    return httpClient.get('/latest');
  }

  nextLauncher() {
    return httpClient.get('/next');
  }
}

module.exports = new SpacexApiSerive();
