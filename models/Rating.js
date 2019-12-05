const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    rate:{type:String, required:true}
});

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;