var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserStorySchema = new Schema({
    title: String,
    status: Number,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('UserStory', UserStorySchema);
