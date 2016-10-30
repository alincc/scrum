var express = require('express');
var router = express.Router();

var projectRoutes = require('./project');

router.use('/project', projectRoutes);

router.get('/', function(req, res) {
  res.send('Api route');
});

module.exports = router;
