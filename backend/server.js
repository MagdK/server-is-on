const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 9000;
const app = express();

app.use(express.json());

const studentFile = path.join(`${__dirname}/../frontend/students.json`);

const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.get('/', (req, res, next) => { 
    res.sendFile(path.join(`${pathToFrontend}/../frontend/index.html`));
})

app.use('/public', express.static(`${pathToFrontend}/../frontend/public`));


app.get('/api/students', (req, res, next) => { 
    res.sendFile(path.join(`${pathToFrontend}/../frontend/students.json`));
});


app.get('/api/students/1', (req, res, next) => { 
    fs.readFile(studentFile, (error, data) => {
        if (error) {
            res.send("Something went wrong")
        } else {
            const students = JSON.parse(data)
            const studentWithIdOne = students.filter(student => student.id === 1)
            res.send(studentWithIdOne)
            // res.send(students.filter(student => student.id === 1))
    
        }
    })
});


app.get('/api/status/active', (req, res, next) => { 
    fs.readFile(studentFile, (error, data) => {
        if (error) {
            res.send("Something went wrong")
        } else {
            const students = JSON.parse(data)
            const activeStudents = students.filter(student => student.status === true)
            res.send(activeStudents)
    
        }
    })
});

app.get('/api/status/finished', (req, res, next) => { 
    fs.readFile(studentFile, (error, data) => {
        if (error) {
            res.send("Something went wrong")
        } else {
            const students = JSON.parse(data)
            const activeStudents = students.filter(student => student.status === false)
            res.send(activeStudents)
    
        }
    })
});


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});