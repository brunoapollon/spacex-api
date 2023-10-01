const SpacexApiService = require('../services/SpacexApiService');

class LauncherController {
  async upcoming(request, response) {
    const { data: launchesUpcoming } = await SpacexApiService.upcomingLaunches();

    return response.status(200).json(launchesUpcoming);
  }
}

module.exports = new LauncherController();
