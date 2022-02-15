/**
 * This file will have the logic to play with the mongodb
 * 
 * 1. We learn the custom validator
 */

const mongoose = require('mongoose');
const Student = require('./models/Students.model');
const user = require('./models/Students.model');

/**
 * Making a connection to the MongoDB
 */
mongoose.connect("mongodb://localhost/demodb", () => {
    console.log("connected to Mongo DB ")
}, err => {
    console.log("Error :", err.mssage)
}
);


dbOperations();


/**
 * Using Asyn Await in place of Promises
 * Students learning this module should be aware of async await 
 */
async function dbOperations() {
    try{

        const student = await Student.create({
            name: "Vishwa",
            age: 16, // It should be atleat 16, else will throw error
            email : "Kankvish@gmail.com"  // If we don't pass this, it will throw the error
        } );   
        console.log(student);

    }catch(e){
        console.log(e.message);
    }
    
}
