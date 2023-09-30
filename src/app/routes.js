const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.json({ allow: true }));

module.exports = router;
