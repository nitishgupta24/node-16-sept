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

async function getStudentByRollNo(req, res) {
    try {
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo,'rollNo')
        let student = await Student.findOne({rollNo: rollNo});
        console.log(student, 'student');
 res.send(student);
    } catch (error) {
        console.log(error,'error')

        
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentByRollNo
}