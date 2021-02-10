var express = require('express');
var router = express.Router();
var { APP_NAME } = process.env;


router.get('/', function (req, res, next) {
    res.send("order");
});

module.exports = router;
