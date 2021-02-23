const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User, messagesStructure } = require('./models/messagesStucture');

const messagesStucture = require('./models/messagesStucture');


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/messages_db', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB!')
})

// routes for User
app.get('/', (req, res) => {
    res.send('Homepage test')
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    }
    catch (err) {
        res.json({ message: err })
    }
})

app.post('/addUser', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err });
    }
});

app.delete('/deleteUser/:userId', async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.userId })
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err })

    }
    ;
});

app.put('/updateUser/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: { ...req.body } })
        res.json(updatedUser)
    }
    catch (err) {
        res.json({ message: err })

    }
})

// routes for Structure

app.post('/addMessageStructure', async (req, res) => {
    const newStructure = new messagesStructure({
        ...req.body
    })
    try {
        const savedStructure = await newStructure.save()
        res.json(savedStructure)
    }
    catch (err) {
        res.json({ message: err })

    }
})

app.get('/messageStructures', async (req, res) => {
    try {
        const structures = await messagesStructure.find();
        res.json(structures);
    }
    catch (err) {
        res.json({ message: err })
    }
})

app.put('/updateStructure/:structureId', async (req, res) => {
    try {
        const updatedStructure = await messagesStructure.updateOne(
            { _id: req.params.structureId },
            { $set: { ...req.body } })
        res.json(updatedStructure)
    }
    catch (err) {
        res.json({ message: { err } })

    }
})

app.delete('/deleteStructure/:structureId', async (req, res) => {
    try {
        const removedStructure = await messagesStructure.deleteOne({ _id: req.params.structureId })
        res.json(removedStructure)

    }
    catch (err) {
        res.json({ message: err })

    }
})



app.listen(3000);
