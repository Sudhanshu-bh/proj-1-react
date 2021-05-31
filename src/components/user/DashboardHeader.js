import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './DashboardHeader.css'
import {SidenavContext} from './SidenavContext'

function DashboardHeader(props) {

    const history = useHistory();

    const [SidenavOpen, setSidenavOpen] = useContext(SidenavContext)

    function validateFirst() {
        let logged = localStorage.getItem('isLoggedInLS');

        if (!logged) {
            history.push("/login");
        }
    }

    function clearSession(history) {
        localStorage.clear();
        history.push("/login");
    }

    function sidenav_toggle() {
        if(SidenavOpen === false)
            setSidenavOpen(true)
        else
            setSidenavOpen(false)
    }
    function sidenav_close() {
        setSidenavOpen(false)
    }

    return (
        <>
            {validateFirst()}

            {/* Header */}

            <div className="row fixed-top justify-content-between shadow page-header">
                <button className="w3-button w3-xlarge col-1 hamburger-css" onClick={sidenav_toggle}>&nbsp;☰</button>
                <div className="display-6 col-8 dash-header d-flex align-items-center justify-content-center">User Dashboard</div>

                <div className="dropdown col-1">
                    <button className="btn dropdown-toggle h-100 settings-icon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item">Option 1</button></li>
                        <li><button className="dropdown-item" onClick={() => clearSession(history)}>Logout</button></li>
                    </ul>
                </div>

            </div>

            {/* Sidebar */}
            
            <div className={`w3-bar-block sidebar-custom-css ${SidenavOpen ? "mySidebarOpened w3-border-right" : "mySidebarClosed"}`}>
                <button onClick={sidenav_close} className="w3-bar-item w3-large">Close &times;</button>
                <Link to="/dashboard" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Dashboard</button>
                </Link>
                <Link to="/profile" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Profile</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Settings</button>
                </Link>

                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePassword" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option</button>
                </Link>
                <Link to="/changePd" style={{color:"inherit", textDecoration:"none"}}>
                    <button className="w3-bar-item w3-button">Option last</button>
                </Link>
                    
                

            </div>
            
        </>
    )
}

export default DashboardHeader