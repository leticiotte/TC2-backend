const mongoose = require("mongoose")

const Person = mongoose.model('Person', {
    name: String,
    nacionality: String,
    age: Number,
    profession: String
})

module.exports = Person