var express = require('express');
var router = express.Router();
var FeatureModel = require('../models/Feature');
var UserStoryModel = require('../models/UserStory');

router.delete('/remove/:storyId/feature/:featureId', (req, res) => {

    UserStoryModel.findOneAndRemove({ _id: req.params.storyId}, (err, obj) => {
        if (err) return res.status(500).json(err);

        FeatureModel
            .findById(req.params.featureId)
            .populate('stories')
            .exec((err, feature) => {
                if (err) return res.status(500).json(err);

                return res.json({story: obj, feature: feature});
        });
    });
});

router.get('/', (req, res) => {
    res.json({});
});

module.exports = router;
