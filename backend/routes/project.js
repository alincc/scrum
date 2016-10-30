var express = require('express');
var router = express.Router();
var ProjectModel = require('../models/Project');

// Create project
router.post('/', (req, res) => {
  var project = new ProjectModel();
  project.title = req.body.title;
  project.save((err, obj) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(200).json(obj);
  });
});

// List all projects
router.get('/', function(req, res) {

  ProjectModel.find(function(err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });

});

module.exports = router;
