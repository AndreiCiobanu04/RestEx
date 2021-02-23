const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,

})

const messageSchema = mongoose.Schema({
    date: Date,
    sender: String,
    receiver: String,
    message_content: String
})




const messagesStructureSchema = mongoose.Schema({

    users: [userSchema],
    date: Date,
    messages: [messageSchema]

})

const user = mongoose.model("Users", userSchema )
const structure = mongoose.model("MsgStructure", messagesStructureSchema)

module.exports = {
    User : user,
    messagesStructure : structure
}
