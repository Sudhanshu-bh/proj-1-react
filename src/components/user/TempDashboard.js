import React, { useState } from 'react';
import './TempDashboard.css'
import DashboardHeader from './DashboardHeader'

function TempDashboard() {

    const [currPassword, setcurrPassword] = useState("");
    const [newPassword1, setnewPassword1] = useState("");
    const [newPassword2, setnewPassword2] = useState("");

    function store(item, type) {

        let itemValue = item.target.value;
        switch (type) {
            case "currPassword": {
                setcurrPassword(itemValue)
                break
            }
            case "newPassword1": {
                setnewPassword1(itemValue)
                break
            }
            case "newPassword2": {
                setnewPassword2(itemValue)
                break
            }
            default: {
                console.warn("This is a default (unhandled) case.");
                break
            }
        }
    }

    function submitPassChange(event) {

        event.preventDefault();
    }

    return (
        <>
            <DashboardHeader />

            <div className="container form mt-5 dashboard">
                <div className="row">
                    <div className="col-md-9 login-form-1 mx-auto my-1 border border-primary rounded shadow">
                        <div className="col-12 text-center p-4">
                            <h3>Change Password</h3>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    Current Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1"
                                    onChange={(item) => store(item, "currPassword")}
                                    aria-describedby="basic-addon1" placeholder="Enter current password"
                                />
                            </div>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    New Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1"
                                    onChange={(item) => store(item, "newPassword1")}
                                    aria-describedby="basic-addon1" placeholder="Enter new password"
                                />
                            </div>

                            <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                <label htmlFor="currPass" className="form-label label-custom-css">
                                    Confirm New Password
                                </label>
                                <input type="password" className="form-control input-custom-css" id="exammpleInputEmail1"
                                    onChange={(item) => store(item, "newPassword2")}
                                    aria-describedby="basic-addon1" placeholder="Re-enter new password" />
                            </div>

                            <div className="form-group mt-4 mx-auto py-4 text-center">
                                <button className="btn btn-info col-2 submit-button-css"
                                    onClick={submitPassChange}>
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
