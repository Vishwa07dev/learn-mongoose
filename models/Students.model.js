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
    age: {
        type: Number,
        min: 16

    },
    email: {
        type: String,
        required: true,
        lowercase: true, // it will covert the email into the lower case and then store in the db,
        minLength :15  // anything less than 10 will fail

    },
    createdAt: {
        // I want to default to a new date
        type: Date,
        immutable: true,  // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    },
    course: mongoose.SchemaTypes.ObjectId,
    subjects: [String],
    address: addressSchema
})


module.exports = mongoose.model("Student", studentSchema);