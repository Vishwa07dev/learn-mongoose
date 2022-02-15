/**
 * This file will have the logic to play with the mongodb
 * 
 * 1. We will learn the ways of queries in MongoDB
 * 2. Referencing to the other schema 
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


createDbOperations();
dbQueries();


/**
 * Using Asyn Await in place of Promises
 * Students learning this module should be aware of async await 
 */


async function dbQueries() {

    /** 
    //Finding by id
    try {
        const student = await Student.findById("620b26e29bea36c032f44151"); //Id of the student we created previosuly
        console.log(student);
    } catch (err) {
        console.log(err.message)
    }

    //Finding by other fields


    try{

        const student = await Student.find({name : "Mohan"}) // return the list of documents having name as Mohan
        console.log(student);

    }catch(err){
        console.log(err.message) 
    }


    //Finding just one

    try{

        const student = await Student.findOne({name : "Vishwa"}) // returns the very first element
        console.log(student);

    }catch(err){
        console.log(err.message) 
    }

    //Delete one

    try{

        const student = await Student.deleteOne({name : "Vishwa"}) // delete the very first matching entry
        console.log(student);

    }catch(err){
        console.log(err.message) 
    }

    **/

    //Using where

    try {

        const student = await Student.where("age").gt("10").where("name").equals('Vishwa').limit(1);
        console.log("Limit", student);
        //Setting the referece to other schema
        student[0].course = "620b21dd93cde00653a40c4d"

        savedStudent = await student[0].save();
        console.log("After saving ref", savedStudent);

    } catch (err) {
        console.log(err.message)
    }


}

async function createDbOperations() {


    try {

        const student = await Student.create({
            name: "Vishwa",
            age: 16, // It should be atleat 16, else will throw error
            email: "Kankvish@gmail.com",  // If we don't pass this, it will throw the error
            subjects: ["DS"]
        });
        //console.log(student);

    } catch (e) {
        console.log(e.message);
    }

}
