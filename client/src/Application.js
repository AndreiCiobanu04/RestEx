import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Messages from './components/Messages';
import WelcomePage from './components/WelcomePage';





const Application = ()=>{
    return(
        <div>
       
        <Router>
        <Header />
            <Switch>
                <Route exact path="/welcomePage">
                    <WelcomePage />
                </Route>

                <Route exact path="/messages">
                    <Messages />
                </Route>
            </Switch>
        </Router>







        </div>
    )
}

export default Application;


