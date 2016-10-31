var express = require('express');
var router = express.Router();
var ProjectModel = require('../models/Project');

// Get project
router.get('/:id', (req, res) => {
  ProjectModel.findById(req.params.id, function(err, obj) {
    if (err) {
        return res.status(500).json(err);
    }

    return res.json(obj);
  })
});

// Delete project
router.delete('/:id', (req, res) => {
  ProjectModel.findByIdAndRemove(req.params.id, function(err, obj) {
    if (err) {
        return res.status(500).json(err);
    }

    return res.json(obj);
  })
});

// Update project
router.put('/:id', (req, res) => {

    ProjectModel.findById(req.params.id, (err, obj) => {
        if (err) {
            return res.status(500).json(err);
        }

        obj.title = req.body.title;
        obj.description = req.body.description;

        obj.save((err) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json(obj);
        });
    });

});


// Create project
router.post('/', (req, res) => {
    var project = new ProjectModel();
    project.title = req.body.title;
    project.description = '';   // TODO: req.body.description
    project.save((err, obj) => {
    if (err) {
        return res.status(500).json(err);
    }

        return res.status(200).json(obj);
    });
});

// List all projects
router.get('/', (req, res) => {

    ProjectModel.find(function(err, response) {
        if (err) {
            res.json(err);
        }
        res.json(response);
    });

});

module.exports = router;
