import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/welcomePage">Homepage</Link></li>
                    <li><Link className="nav-link" to="/messages">Messages</Link></li>

                </ul>

            </nav>
        </header>
    )
}

export default withRouter(Header);