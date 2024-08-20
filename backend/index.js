const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StudentModel = require('./Models/Student');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user', (req, res) => {
	StudentModel.create(req.body)
	.then(students => res.json(students))
	.catch(err => res.json(err))
})

mongoose.connect('mongodb+srv://michael:<password>@student-app.bxkl5.mongodb.net/?retryWrites=true&w=majority&appName=student-app');

app.listen(3001, () => {
	console.log('server is running');
})