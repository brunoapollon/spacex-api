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

  async latest(request, response) {
    const { data: latestLauncher } = await SpacexApiService.latestLauncher();

    return response.status(200).json(latestLauncher);
  }
}

module.exports = new LauncherController();
