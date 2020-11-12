var express = require('express');
var router = express.Router();

let mesh = require('../tempjson/mesh.json')

router.get("/", function(req, res, next) {
    res.json(mesh);
});

module.exports = router;