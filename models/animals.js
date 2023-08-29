const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageSrc: String
},{
    collection: 'animal' // Replace with your actual collection name
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
