//const mongoose = require('mongoose')
const student = require('../models/student');
const Student = require('../models/student');

async function addStudent(req, res) {
    try {
        console.log(req.body,'req.body');
        let student = new Student(req.body);
        await student.save();
        
        res.end('done');
        
    } catch (error) {
        console.error(error);
        
    }
}
async function getStudents(req, res) {
    try {
        let students = await Student.find({});
        console.log(students, 'students');

        res.send(students);
    } catch (error) {
        
    }
}

module.exports = {
    addStudent,
    getStudents
}