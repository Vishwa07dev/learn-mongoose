const mongoose = require("mongoose");

/**
 * Version 2 of the schema
 */


const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pinCode: Number
})
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    course: mongoose.SchemaTypes.ObjectId,
    subjects: [String],
    address: addressSchema
})


module.exports = mongoose.model("Student", studentSchema);