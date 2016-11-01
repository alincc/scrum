var express = require('express');
var router = express.Router();

var projectRoutes = require('./project');
var featureRoutes = require('./feature');
var storyRoutes = require('./story');

router.use('/project', projectRoutes);
router.use('/feature', featureRoutes);
router.use('/story', storyRoutes);

router.get('/', function(req, res) {
  res.send('Api route');
});

module.exports = router;
