var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var taskSchema = new Schema({
    // taskId: String,
    name: String,
    description: String,
    image: String,
    createdBy: String,
    createdOn: Date,
    assignedTo: String,
});
module.exports = mongoose.model('Task', taskSchema);