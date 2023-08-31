const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    _id: ObjectId,
    title: String,
    date: Date,
    introduction: String,
    detailed: String,
    imageSrc: String,
    conclusion:String
},{
    collection: 'animal' // Replace with your actual collection name
});

const Specific = mongoose.model('Specific', animalSchema);

module.exports = Specific;
