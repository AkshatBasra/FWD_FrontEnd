const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

mongoose.connect('mongodb+srv://Akshat:1BM23CS020@cluster0.bmfpm.mongodb.net/Signin')
const db = mongoose.connection
db.once('open', () => {
    console.log('Connected to Database')
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User ', userSchema);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/signup', function (req, res) {
    res.sendFile(path.join('signup.html'))
})

app.post('/signup', function (req, res) {
    //posting requests to database
})

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})