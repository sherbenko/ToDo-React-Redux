import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom";
const NavBar = () => {
    return(
        <div className="d-flex" id="wrapper">

            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Menu Bar</div>
                <div className="list-group list-group-flush">
                    <Link to={'/login'} className={"list-group-item list-group-item-action bg-light"}>Login</Link>
                    <Link to={'/tasks'} className={"list-group-item list-group-item-action bg-light"}>My tasks</Link>
                </div>
            </div>
        </div>
    )
}
export default NavBar;