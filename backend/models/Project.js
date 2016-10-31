var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FeatureModel = require('./Feature');

var ProjectSchema = new Schema({
    title: String,
    description: String,
    features: [{ type: Schema.Types.ObjectId, ref: 'Feature' }]
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Project', ProjectSchema);
