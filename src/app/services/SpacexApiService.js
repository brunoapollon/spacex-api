const httpClient = require('../config/httpClient');

class SpacexApiSerive {
  upcomingLaunches() {
    return httpClient.get('/launches/upcoming');
  }
}

module.exports = new SpacexApiSerive();
