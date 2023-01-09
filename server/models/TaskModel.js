const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = TaskModel = mongoose.model('task', TaskSchema);