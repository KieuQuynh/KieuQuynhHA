
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    name: [String],
    result: [{
        score1: {type: Number, default: 0},
        score2: {type: Number, default: 0},
        score3: {type: Number, default: 0},
        score4: {type: Number, default: 0},
    }]
})


module.exports = mongoose.model('question', QuestionSchema);