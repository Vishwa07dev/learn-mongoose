/**
 * This file will have the logic to play with the mongodb
 * 
 * 1. We will learn about the nested schema
 * 2. Type check
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
 * Output of the above operation
 * {
  name: 'Vishwa',
  age: 99,
  _id: new ObjectId("620b1bd88dc62dee97556d4b"),  // auto created id of the schema
  __v: 0
}
 */

/**
 * Using Asyn Await in place of Promises
 * Students learning this module should be aware of async await 
 */
async function dbOperations() {
    try{

        const student = await Student.create({
            name: "Vishwa",
            age: 99, // if we change this to string, it will throw error
            subjects : ["NW", "DSnALgo"]
        });
        console.log(student);

    }catch(e){
        console.log(e.message);
    }
    
}
