 import React, {useEffect, useState} from 'react'
import { retrieveAllMessages, deleteMessage } from './services/DataService'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { setMessagesAction } from './redux/messagesAction';
import { useDispatch, useSelector, useStore } from 'react-redux';






 const Messages = () => {

    const [messages, setMessages] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeMessage, setActiveMessage] = useState({messages: []})
    const [reload, setReload] = useState(false)

    const selectedMessages = useSelector(state => state.messages)

    const dispatch = useDispatch()
    const store = useStore()



    // function getAllMessages(){
    //     retrieveAllMessages().then(response => setMessages(response.data))
    //     }

        function deleteMessageStr(id){
            deleteMessage(id).then(r => setReload(!reload))

        }

//   useEffect(()=>{
//       getAllMessages();
//   } ,[reload])   

        
        useEffect(()=> {
            retrieveAllMessages().then(response => dispatch(setMessagesAction(response.data)))
            store.subscribe(()=> console.log(store.getState()))
            console.log(store.getState())
        },[dispatch])
        
        

  

    return(
        <div>
            <div className="container">
                <table className="table table-stripped">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Details</th>
                            <th>Delete</th>
                            </tr>
                    </thead>
                    <tbody>
                        {selectedMessages.length > 0 ? selectedMessages.map(message => 
                            <tr key={message._id}>
                                <td>{message._id}</td>
                                <td><Button variant="primary" onClick={() => {
                                    handleShow()
                                    setActiveMessage(message)}}>Details</Button></td>
                                  <td><button className="btn btn-danger" onClick={() => deleteMessageStr(message._id)}>Delete</button></td>  
                                
                            </tr>) : []}
                    </tbody>
                </table>
                
            </div>
            <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>Messages in structure with id : {activeMessage._id}</Modal.Header>
                                    <Modal.Body>
                                        {activeMessage.messages.length> 0 ? activeMessage.messages.map(msg => (
                                            <div key={msg.date}>{msg.message_content}</div>
                                        )): []}
                                    </Modal.Body>
                                </Modal>

        </div>
    )






 }

 export default Messages;