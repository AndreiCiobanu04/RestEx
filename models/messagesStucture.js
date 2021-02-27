const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true}

})

const messageSchema = mongoose.Schema({
    date: {type: Date, required: true},
    sender: {type: String, required: true},
    receiver: {type: String, required:  true},
    message_content:{type: String, required: true}
})




const messagesStructureSchema = mongoose.Schema({

    users: {type: [userSchema], required :true },
    date: {type: Date, required: true},
    messages: { type : [messageSchema] , required:true}

})

const user = mongoose.model("Users", userSchema )
const structure = mongoose.model("MsgStructure", messagesStructureSchema)

module.exports = {
    User : user,
    messagesStructure : structure
}
