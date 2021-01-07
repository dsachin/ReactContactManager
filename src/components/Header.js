import React from 'react'
import { Link } from "react-router-dom";
export default function Header(props) {
    const { branding } = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <Link to="/" > <span className="navbar-brand">{branding}</span></Link>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link"> <i className="fas fa-home" /> Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/addContact" className="nav-link"> <i className="fas fa-plus" />Add Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className='nav-link'><i className="fas fa-question" /> About</Link>
                </li>


            </ul>
        </nav>

    )
}

Header.defaultProps = {
    branding: "My App"
}