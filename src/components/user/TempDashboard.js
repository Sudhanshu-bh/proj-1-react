import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TempDashboard.css'

function TempDashboard(props) {

    const history = useHistory();
    const [SidenavOpen, setSidenavOpen] = useState(false);

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

    function sidenav_open() {
        setSidenavOpen(true)
    }
    function sidenav_close() {
        setSidenavOpen(false)
    }

    return (
        <>
            {validateFirst()}

            {/* Sidebar */}
            <div className={`w3-sidebar w3-bar-block w3-border-right ${SidenavOpen ? "mySidebarOpened" : "mySidebarClosed"}`}>
                <button onClick={sidenav_close} className="w3-bar-item w3-large">Close &times;</button>
                <a href="/" className="w3-bar-item w3-button">Option 1</a>
                <a href="/" className="w3-bar-item w3-button">Settings</a>
            </div>

            {/* Page Content */}

            <div className="row mb-3 dashboard d-flex justify-content-between">
                <button className="w3-button w3-xlarge col-1 hamburger-css" onClick={sidenav_open}>&nbsp;☰</button>
                <div className="display-6 col-8 dash-header d-flex align-items-center justify-content-center">User Dashboard</div>

                <div className="dropdown col-1 d-flex justify-content-end">
                    <button className="btn btn-secondary dropdown-toggle h-100 settings-icon" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item">Option 1</button></li>
                        <li><button className="dropdown-item" onClick={() => clearSession(history)}>Logout</button></li>
                    </ul>
                </div>

            </div>

            <div className="container form mt-5 dashboard">
                <div className="row">
                    <div className="col-md-9 login-form-1 mx-auto my-1 border border-primary rounded shadow">
                        <div className="col-12 text-center p-4">
                            <h3>Change Password</h3>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    Current Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1" aria-describedby="basic-addon1" placeholder="Enter current password" />
                            </div>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    New Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1" aria-describedby="basic-addon1" placeholder="Enter new password" />
                            </div>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    Confirm New Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1" aria-describedby="basic-addon1" placeholder="Re-enter new password" />
                            </div>

                            <div className="form-group mt-4 mx-auto py-4 text-center">
                                <button className="btn btn-info col-2 submit-button-css">
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default TempDashboard
