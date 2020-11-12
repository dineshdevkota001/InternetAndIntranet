var express = require('express');
var router = express.Router();

let image = require('../tempjson/image.json')

router.get("/", function(req, res, next) {
    res.json(image);
});

module.exports = router;