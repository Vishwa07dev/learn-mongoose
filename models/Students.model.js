const mongoose = require("mongoose");

/**
 * Version 1 of the schema
 */
const studentSchema1 = new mongoose.Schema({
    name: String,
    age: Number
})


module.exports = mongoose.model("Student", studentSchema1);