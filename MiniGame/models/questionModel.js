
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ScoreSchema = new Schema({
    name: [String],
    result: [{
        score1: {type: Number, default: 0},
        score2: {type: Number, default: 0},
        score3: {type: Number, default: 0},
        score4: {type: Number, default: 0},
    },{
        _id:false
    }]
})


module.exports = mongoose.model('score', ScoreSchema);