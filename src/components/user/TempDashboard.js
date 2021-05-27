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
                {/* <a href="/" className="w3-bar-item w3-button">Link 3</a> */}
            </div>

            {/* Page Content */}

            <div className="row mb-3 dashboard">
                <button className="w3-button w3-xlarge col-1 hamburger-css" onClick={sidenav_open}>&nbsp;☰</button>
                <div className="display-6 col-10 dash-header">User Dashboard</div>
                <button className="btn btn-info col-1" onClick={() => clearSession(history)}>Logout</button>
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
