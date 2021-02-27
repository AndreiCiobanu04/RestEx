 import React, {useEffect, useState} from 'react'
import { retrieveAllMessages, deleteMessage } from './services/DataService'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






 const Messages = () => {

    const [messages, setMessages] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [activeMessage, setActiveMessage] = useState({messages: []})
    const [reload, setReload] = useState(false)

    function getAllMessages(){
        retrieveAllMessages().then(response => setMessages(response.data))
        }
        function deleteMessageStr(id){
            deleteMessage(id).then(r => setReload(!reload))

        }

  useEffect(()=>{
      getAllMessages();
  } ,[reload])      

  

  

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
                        {messages.map(message => 
                            <tr key={message._id}>
                                <td>{message._id}</td>
                                <td><Button variant="primary" onClick={() => {
                                    handleShow()
                                    setActiveMessage(message)}}>Details</Button></td>
                                  <td><button className="btn btn-danger" onClick={() => deleteMessageStr(message._id)}>Delete</button></td>  
                                
                            </tr>)}
                    </tbody>
                </table>
                
            </div>
            <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>Messages in structure with id : {activeMessage._id}</Modal.Header>
                                    <Modal.Body>
                                        {activeMessage.messages.map(msg => (
                                            <div>{msg.message_content}</div>
                                        ))}
                                    </Modal.Body>
                                </Modal>

        </div>
    )






 }

 export default Messages;