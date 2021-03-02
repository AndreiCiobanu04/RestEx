import React, { useEffect, useState } from 'react'
import { addMessage, retrieveAllUsers } from './services/DataService'
import { Formik, Form, Field, ErrorMessage, FieldArray, getIn } from 'formik'
import { DatePickerField } from './DatePicker'
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

const WelcomePage = () => {

    const [users, setUsers] = useState([])

    function getUsers() {
        retrieveAllUsers().then(response => setUsers(response.data));
        //console.log(users)
    }


    useEffect(() => {
        getUsers();

    }, [])

    function onSubmit(values) {
        console.log(values)

        addMessage(values).then(r => {
            alert("Obiect inserat")



        }).catch(err => alert(err))

    }

    

    const validationSchema = yup.object().shape({
        users: yup.array().of(
            yup.object().shape({
                name: yup.string().required('Required'),
                email: yup.string().email("Invalid email").required('Required'),
                phone: yup.string().required('Required')
            })
        ).min(1, 'At least one user'),
        messages: yup.array().of(
            yup.object().shape({
                sender: yup.string().min(0, 'Cannot be empty').required('Required'),
                receiver: yup.string().min(0, 'Cannot be empty').required('Required'),
                message_content: yup.string().min(0, 'Cannot be empty').required('Required')
            })
        ).min(1, 'At least one message')
    })



    



    return (
        <div>
            <h2>Welcome to FrontEnd</h2>
            {/* <div className="container">
                <table className="table table-stripped">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => 
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>)}
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success"  >Add User</button>
                </div>
            </div> */}
            <h3>Add a new Message Structure</h3>


            <Formik initialValues={{
                date: new Date(),
                users: [
                    {
                        name: '',
                        email: '',
                        phone: ''
                    }
                ],
                messages: [
                    {
                        sender: '',
                        receiver: '',
                        message_content: '',
                        date: new Date()

                    }

                ],
            }}

                onSubmit={(values) => onSubmit(values)}
                
                validateOnChange={true}
                validateOnBlur={false}
                enableReinitialize={true}
                validationSchema={validationSchema}
            >
                {
                    (form) => (
                        <Form>

                            <div>
                                <label htmlFor="date">Date
                            <fieldset>
                                        <DatePickerField name="date" />
                                    </fieldset>
                                </label>
                            </div>

                            <FieldArray name="users">
                                {({ insert, remove, push }) => (
                                    <div>
                                        {form.values.users.length > 0 ?
                                            form.values.users.map((user, index) => (
                                                <div className="row" key={index}>
                                                    <div className="col">

                                                        <Field className="form-control"
                                                            placeholder="Name"
                                                            name={`users.${index}.name`}
                                                            type="text" />

                                                        {form.errors && form.errors.users &&
                                                            form.errors.users[index] &&
                                                            form.errors.users[index].name &&
                                                            form.touched &&
                                                            form.touched.users &&
                                                            form.touched.users[index] &&
                                                            form.touched.users[index].name &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.users[index].name}
                                                                </div>
                                                            )}
                                                    </div>
                                                    {/* {console.log(form.errors)} */}
                                                    <div className="col">

                                                        <Field className="form-control"
                                                            placeholder="Email"
                                                            //value={user.email}
                                                            name={`users.${index}.email`}
                                                            type="email" />
                                                        {form.errors && form.errors.users &&
                                                            form.errors.users[index] &&
                                                            form.errors.users[index].email &&
                                                            form.touched &&
                                                            form.touched.users &&
                                                            form.touched.users[index] &&
                                                            form.touched.users[index].email &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.users[index].email}
                                                                </div>
                                                            )}
                                                    </div>

                                                    <div className="col">

                                                        <Field className="form-control"
                                                            placeholder="Phone"
                                                            name={`users.${index}.phone`}
                                                            type="text" />
                                                        {form.errors && form.errors.users &&
                                                            form.errors.users[index] &&
                                                            form.errors.users[index].phone &&
                                                            form.touched &&
                                                            form.touched.users &&
                                                            form.touched.users[index] &&
                                                            form.touched.users[index].phone &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.users[index].phone}
                                                                </div>
                                                            )}
                                                    </div>
                                                    <div className="col">
                                                        <a
                                                            className="btn-floating btn-small waves-effect waves-light red"
                                                            onClick={() => remove(index)}><i>X</i></a>
                                                    </div>






                                                </div>
                                            )) : []}

                                        <a className="waves-effect waves-light btn btn-primary btn-medium"
                                            onClick={() => push({ name: '', email: '', phone: '' })}
                                        >
                                            Add User
                                </a>
                                    </div>
                                )}
                            </FieldArray>

                            <br />




                            <FieldArray name="messages">
                                {({ insert, remove, push }) => (
                                    <div>
                                        {form.values.messages.length > 0 ?
                                            form.values.messages.map((message, index) => (
                                                <div className="row" key={index}>
                                                    <div className="col">

                                                        <Field className="form-control"
                                                            placeholder="Sender"
                                                            name={`messages.${index}.sender`}
                                                            type="text" />
                                                        {form.errors && form.errors.messages &&
                                                            form.errors.messages[index] &&
                                                            form.errors.messages[index].sender &&
                                                            form.touched &&
                                                            form.touched.messages &&
                                                            form.touched.messages[index] &&
                                                            form.touched.messages[index].sender &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.messages[index].sender}
                                                                </div>
                                                            )}
                                                    </div>

                                                    <div className="col">

                                                        <Field className="form-control"
                                                            placeholder="Receiver"
                                                            name={`messages.${index}.receiver`}
                                                            type="text" />
                                                        {form.errors && form.errors.messages &&
                                                            form.errors.messages[index] &&
                                                            form.errors.messages[index].receiver &&
                                                            form.touched &&
                                                            form.touched.messages &&
                                                            form.touched.messages[index] &&
                                                            form.touched.messages[index].receiver &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.messages[index].receiver}
                                                                </div>
                                                            )}
                                                    </div>

                                                    <div className="col">


                                                        <Field className="form-control"
                                                            placeholder="Content"
                                                            name={`messages.${index}.message_content`}
                                                            type="text">
                                                        </Field>
                                                        {form.errors && form.errors.messages &&
                                                            form.errors.messages[index] &&
                                                            form.errors.messages[index].message_content &&
                                                            form.touched &&
                                                            form.touched.messages &&
                                                            form.touched.messages[index] &&
                                                            form.touched.messages[index].message_content &&
                                                            (
                                                                <div style={{
                                                                    color: "red"
                                                                }

                                                                }>
                                                                    {form.errors.messages[index].message_content}
                                                                </div>
                                                            )}
                                                    </div>

                                                    <div className="col">

                                                        <DatePickerField name={`messages.${index}.date`} placeholder="Date" className="form-control" />
                                                    </div>

                                                    <div className="col">
                                                        <a
                                                            className="btn-floating btn-small waves-effect waves-light red"
                                                            onClick={() => remove(index)}><i>X</i></a>
                                                    </div>





                                                </div>
                                            )) : []}

                                        <a className=" btn btn-primary"
                                            onClick={() => push({ sender: '', receiver: '', date: '' })}
                                        >
                                            Add Message
                                </a>
                                    </div>
                                )}
                            </FieldArray>
                            <br />

                            <button className="btn btn-success" type="submit">Save</button>



















                        </Form>
                    )
                }






            </Formik>









        </div>
    )
}

export default WelcomePage;