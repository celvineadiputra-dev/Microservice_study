const express = require('express');
const router = express.Router();
const RefreshTokenHandler = require('./handler/refresh-tokens');

router.post('/', RefreshTokenHandler.create);
router.get('/', RefreshTokenHandler.getToken);

module.exports = router;