const { Router } = require('express');
const LauncherController = require('./controllers/LauncherController');

const router = Router();

router.get('/upcoming', LauncherController.upcoming);
router.get('/past', LauncherController.past);
router.get('/latest', LauncherController.latest);
router.get('/next', LauncherController.next);

module.exports = router;
