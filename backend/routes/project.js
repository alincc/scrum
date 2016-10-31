var express = require('express');
var router = express.Router();
var ProjectModel = require('../models/Project');
var FeatureModel = require('../models/Feature');
var UserStoryModel = require('../models/UserStory');

// Get project
router.get('/:id', (req, res) => {
    ProjectModel
        .findById(req.params.id)
        .populate('features')
        .exec((err, obj) => {
            if (err) return res.status(500).json(err);

            FeatureModel.populate(obj.features, {
                path: 'stories',
                model: 'UserStory'
            }, function(err) {
                if (err) return res.status(500).json(err);

                res.json(obj);
            });
        });
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

// Remove feature
router.delete('/:projectId/remove-feature/:featureId', (req, res) => {
    ProjectModel.findByIdAndUpdate(req.params.projectId, {
        $pull: {
            features: req.params.featureId
        }
    }, (err, obj) => {
        if (err) return res.status(500).json(err);

        res.json({ featureId: req.params.featureId });
    });
});

// Add feature
router.put('/:id/add-feature', (req, res) => {

    ProjectModel.findById(req.params.id, (err, project) => {
        if (err) return res.status(500).json(err);

        var feature = new FeatureModel({
            title: req.body.title
        });

        feature.save((err) => {
            if (err) return res.status(500).json(err);
        });

        project.features.push(feature._id);

        project.save((err) => {
            if (err) return res.status(500).json(err);

            return res.json(feature);
        });
    });

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
    project.description = req.body.description;
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
