const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./Models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/user', (req, res) => {
	EmployeeModel.create(req.body)
	.then(employees => res.json(employees))
	.catch(err => res.json(err))
})

mongoose.connect('mongodb+srv://michael:<password>@student-app.bxkl5.mongodb.net/?retryWrites=true&w=majority&appName=student-app');

app.listen(3001, () => {
	console.log('server is running');
})