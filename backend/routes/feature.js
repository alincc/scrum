var express = require('express');
var router = express.Router();
var FeatureModel = require('../models/Feature');
var UserStoryModel = require('../models/UserStory');

// Add feature
router.put('/:id/add-story', (req, res) => {

    FeatureModel.findById(req.params.id, (err, feature) => {
        if (err) return res.status(500).json(err);

        var story = new UserStoryModel({
            title: req.body.title,
            status: req.body.status,
        });

        story.save((err) => {
            if (err) return res.status(500).json(err);
        });

        feature.stories.push(story._id);

        feature.save((err) => {
            if (err) return res.status(500).json(err);

            return res.json(feature);
        });
    });

});

router.get('/', (req, res) => {
    res.json({});
});

module.exports = router;
