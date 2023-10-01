const SpacexApiService = require('../services/SpacexApiService');

class LauncherController {
  async upcoming(request, response) {
    const { data: launchesUpcoming } = await SpacexApiService.upcomingLaunches();

    return response.status(200).json(launchesUpcoming);
  }

  async past(request, response) {
    const { data: pastLaunches } = await SpacexApiService.pastLaunches();

    return response.status(200).json(pastLaunches);
  }
}

module.exports = new LauncherController();
