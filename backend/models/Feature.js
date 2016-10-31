var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeatureSchema = new Schema({
    title: String,
    stories: [{ type: Schema.Types.ObjectId, ref: 'UserStory' }]
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Feature', FeatureSchema);
