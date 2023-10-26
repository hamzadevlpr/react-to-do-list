// Server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4050;
const app = express();

app.use(cors());
app.use(express.json());

// Database Schema
const userSchema = new mongoose.Schema({
    first: {
        required: true,
        type: String,
    },
    last: {
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    age: {
        required: true,
        type: Number,
    },
    country: {
        required: true,
        type: String,
    },
});

// Database Model
const userModel = new mongoose.model('userList', userSchema);

app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.send(users))
        .catch(err => res.send(err))
});
app.post('/create', async (req, res) => {
    userModel.create(req.body)
        .then((emp => res.json(emp)))
        .catch(err => console.log(res.json(err)))
})
app.get('/getUser/:id', async (req, res) => {
    const id = req.params.id;
    userModel.findById({ _id: id })
        .then((emp => res.json(emp)))
        .catch(err => console.log(res.json(err)))
})
app.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({ _id: id }, {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        age: req.body.age, country:
            req.body.country
    })
        .then((emp => res.json(emp)))
        .catch(err => console.log(res.json(err)))
})
app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id })
        .then((emp => res.json(emp)))
        .catch(err => console.log(res.json(err)))
})


















app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
});



// Database Creation

const DATABASE_URL = "mongodb+srv://crud-operation:crud-op123@cluster0.ismwkvb.mongodb.net/users"
mongoose.connect(process.env.URL || DATABASE_URL);

// Database Connected message
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
