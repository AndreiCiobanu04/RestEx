const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {messagesStructure } = require('../models/messagesStucture');
const fs = require('fs')

router.post('/addMessageStructure', async (req, res) => {
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

router.get('/allMessageStructures', async (req, res) => {
    try {
        const structures = await messagesStructure.find();
        res.json(structures);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.put('/updateStructure/:structureId', async (req, res) => {
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

router.delete('/deleteStructure/:structureId', async (req, res) => {
    try {
        const removedStructure = await messagesStructure.deleteOne({ _id: req.params.structureId })
        res.json(removedStructure)

    }
    catch (err) {
        res.json({ message: err })

    }
})


router.get('/specificStucture/:structureId/sorted', async(req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.params.structureId)
        console.log(id)
        const specificStructure =  await messagesStructure.aggregate([
            {"$match" : {_id : id}},
            

          { "$unwind" : "$messages" },
          { "$sort" : {
              "messages.date" : -1
          }
        },

        {"$project" : {
            "users" : 1,
             "date" : 1,
             "messages": 1}
        }
        // {"$group" : {
        //     "_id" : "$_id",
        //     "users" :"$users",
            

        //     "messages": {
        //         "$push": "$messages"
        //     }
        // }}

        ])

        // let data = JSON.stringify(specificStructure)
        // fs.writeFileSync('messages-sorted.json', data)
        
         res.json(specificStructure)
        


    }
    catch(err){
        res.json({message:err})

    }
})




module.exports = router;
