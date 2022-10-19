const express = require('express')
const app = express()
app.listen(3000, () => console.log("Listening on port 3000"))
const mongoose = require('./db/mongoose')
const myclass = require('./db/dbmodels/class')
const student = require('./db/dbmodels/student')
//enable our app to parse json data format
app.use(express.json())
app.use((req, res, next) =>{
res.header("Access-Control-Allow-origin", "*")
res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE")
res.header("Access-Control-Allow-Headers", "Origin",
"X-Requested-With", "Content-Type", "Accept")
next()
})


//posts method for creating a new student class
app.post('/myclass', (req, res) => {
    (new myclass({'className': req.body.className, 'numberOfStudents' : req.body.numberOfStudents}))
    .save()
    .then((myclass) => res.send(myclass))
    .catch((error) => console.log(error))
    })

    // register a student into a class
app.post('/myclass/:myclassId/students', (req, res) =>{
    (new student ({ 'name': req.body.name, 'lastName': req.body.lastName, '_classId' : req.params.myclassId }))
    .save()
    .then((student) => res.send(student))
    .catch((error) => console.log(error))
    })

    //read all classes
app.get('/myclass', (req, res) =>{
    myclass.find({})
    .then(myclass =>res.send(myclass))
    .catch((error) => console.log(error))
    })

    //get one student class
app.get('/myclass/:myclassId', (req, res) =>{
    myclass.findOne( { _id: req.params.myclassId })
    .then(myclass =>res.send(myclass))
    .catch((error) => console.log(error))
    })

    //get all students from this classId
app.get('/myclass/:myclassId/students', (req, res) =>{
    student.find({ _classId: req.params.myclassId })
    .then((student) => res.send(student))
    .catch((error) => console.log(error))
    })

    //get one student
app.get('/myclass/:myclassId/students/:studentId', (req, res) =>{
    student.findOne({ _classId: req.params.myclassId, _id: req.params.studentId })
    .then((onestudent) => res.send(onestudent))
    .catch((error) => console.log(error))
    })

    //update student information
app.patch('/myclass/:myclassId/students/:studentId', (req, res) => {
    student.findOneAndUpdate({ '_id': req.params.myclassId, _id: req.params.studentId }, { $set: req.body })
    .then((student) => res.send(student))
    .catch((error) => console.log(error))
    })

    app.delete('/myclass/:myclassId', (req, res) =>{
        const deleteStudents = (myclass) =>{
        student.deleteMany({ '_id': req.params.myclassId})
        .then(() => myclass)
        .catch((error) => console.log(error))
        }
        myclass.findByIdAndDelete( { '_id': req.params.myclassId})
        .then((myclass) => res.send(deleteStudents(myclass)))
        .catch((error) => console.log(error))
        })

        //delete student info
app.delete('/myclass/:myclassId/students/:studentId', (req, res) => {
    student.findOneAndDelete({ _id: req.params.studentId, _classId: req.params.myclassId }).then((student) => res.send(student))
    .catch((error) => console.log(error))
    })