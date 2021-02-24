const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/messages_db', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB!')
})

// routes for User
app.get('/', (req, res) => {
    res.send('Homepage test')
});

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)

const structureRoute = require('./routes/msgStructure')
app.use('/msgStructure', structureRoute)


app.listen(3000);
