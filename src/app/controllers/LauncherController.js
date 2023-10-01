const SpacexApiService = require('../services/SpacexApiService');

class LauncherController {
  async upcoming(request, response) {
    const { data: upcomingLaunches } = await SpacexApiService.upcomingLaunches();

    return response.status(200).json(upcomingLaunches);
  }

  async past(request, response) {
    const { data: pastLaunches } = await SpacexApiService.pastLaunches();

    return response.status(200).json(pastLaunches);
  }

  async latest(request, response) {
    const { data: latestLauncher } = await SpacexApiService.latestLauncher();

    return response.status(200).json(latestLauncher);
  }

  async next(request, response) {
    const { data: nextLauncher } = await SpacexApiService.nextLauncher();

    return response.status(200).json(nextLauncher);
  }
}

module.exports = new LauncherController();
