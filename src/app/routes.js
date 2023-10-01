const { Router } = require('express');
const LauncherController = require('./controllers/LauncherController');

const router = Router();

router.get('/upcoming', LauncherController.upcoming);

module.exports = router;
