import axios from 'axios'

export const retrieveAllUsers = () => {
    return axios.get('http://localhost:3000/users/allUsers')
}


export const retrieveAllMessages = () =>{
    return axios.get('http://localhost:3000/msgStructure/allMessageStructures')
}

export const retrieveSpecificMessage = (messageId) => {
    return axios.get(`http://localhost:3000/msgStructure/specificStructure/${messageId}`)
}

export const addMessage = (message) => {
    return axios.post('http://localhost:3000/msgStructure/addMessageStructure', message )
}

export const deleteMessage = (messageId) => {
    return axios.delete(`http://localhost:3000/msgStructure/deleteStructure/${messageId}`)
}



