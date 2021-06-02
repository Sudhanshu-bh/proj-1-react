import React, { useState, useContext } from 'react'
import './ChangePassword.css'
import './CommonCss.css'
import Header from './components/Header'
import { SidenavContext } from './components/SidenavContext'
import LoaderButton from '../LoaderButton'
import Toast from '../../resuable/Toast'

function ChangePassword() {

    const [currPassword, setcurrPassword] = useState("")
    const [newPassword1, setnewPassword1] = useState("")
    const [newPassword2, setnewPassword2] = useState("")

    const [currPassInputRed, setcurrPassInputRed] = useState(false)
    const [currPassInputGreen, setcurrPassInputGreen] = useState(false)

    const [newPass1InputRed, setnewPass1InputRed] = useState(false)
    const [newPass1InputGreen, setnewPass1InputGreen] = useState(false)

    const [newPass2InputRed, setnewPass2InputRed] = useState(false)
    const [newPass2InputGreen, setnewPass2InputGreen] = useState(false)

    const [invalidCurrPassMsg, setinvalidCurrPassMsg] = useState("")
    const [invalidNewPassMsg, setinvalidNewPassMsg] = useState("")
    const [PasswordsDontMatch, setPasswordsDontMatch] = useState("")

    const [isLoading, setisLoading] = useState(false)

    const [toast, settoast] = useState({ text: "", type: "success" })  // type can be success, danger, or anything else.

    const [SidenavOpen] = useContext(SidenavContext)

    function store(item, type) {

        let itemValue = item.target.value;
        switch (type) {
            case "currPassword": {
                setcurrPassword(itemValue)
                setcurrPassInputRed(false)
                setcurrPassInputGreen(false)
                setinvalidCurrPassMsg("")
                break
            }
            case "newPassword1": {
                setnewPassword1(itemValue)
                setinvalidNewPassMsg("")
                setnewPass1InputRed(false)
                setnewPass1InputGreen(false)

                setnewPass2InputRed(false)
                setnewPass2InputGreen(false)
                break
            }
            case "newPassword2": {
                setnewPassword2(itemValue)
                setPasswordsDontMatch("")
                setnewPass2InputGreen(false)
                setnewPass2InputRed(false)
                break
            }
            default: {
                console.warn("This is a default (unhandled) case.");
                break
            }
        }
    }

    function validateCurrPass() {

        if (currPassword === "") {
            setcurrPassInputRed(true)
            setinvalidCurrPassMsg("Please enter your current password.")
            return
        }

        let data = {};
        data.user = localStorage.getItem("isLoggedInLS");
        data.password = currPassword;

        let url = "/validate/credentials";
        let params = {
            method: 'post',
            body: JSON.stringify(data),
        };

        let response;
        let resStatus = 0;
        (async function () {
            try {
                response = await fetch(url, params);

                resStatus = response.status;

                switch (resStatus) {
                    case 200:
                        setcurrPassInputGreen(true)
                        break
                    case 401:
                        setcurrPassInputRed(true)
                        setinvalidCurrPassMsg("Please enter the correct password of your account.")
                        break
                    case 500:
                        console.log("500 - Server error, unable to validate email from database.")
                        break
                    default:
                        console.log("Default (unhandled) case, response code: ", resStatus)
                        break;
                }
            } catch (error) {
                console.log("Failure, there was some error...", error);
            }
        })()
    }

    function checkNewPass1() {
        if (newPassword1 !== "") {
            setnewPass1InputGreen(true)

            return 1
        }
        else {
            setnewPass1InputRed(true)
            setinvalidNewPassMsg("Please enter the new password.")
            return 0
        }
    }

    function checkNewPassMatch() {
        if (!checkNewPass1())
            return

        if (newPassword1 === newPassword2)
            setnewPass2InputGreen(true)
        else {
            setnewPass2InputRed(true)
            if (newPassword2 === "")
                setPasswordsDontMatch("Please re-enter the new password.")
            else {
                setPasswordsDontMatch("Please re-enter the same new password here.")
            }
        }
    }

    function submitPassChange(event) {

        event.preventDefault()

        if (newPassword1 !== newPassword2) {
            alert("New passwords do not match!")
            return
        }

        let data = {};
        data.User = localStorage.getItem("isLoggedInLS");
        data.CurrPass = currPassword;
        data.NewPass = newPassword2;

        let url = "/api/changePass";
        let params = {
            method: 'post',
            body: JSON.stringify(data),
        };

        let response;
        let resStatus = 0;

        setisLoading(true);

        (async function () {
            try {
                response = await fetch(url, params);

                resStatus = response.status;

                switch (resStatus) {
                    case 200:
                        settoast({ text: "Password changed successfully!", type: "success" })
                        break
                    case 401:
                        setinvalidCurrPassMsg("Please enter the correct password of your account.")
                        break
                    case 500:
                        settoast({ text: "Something went wrong. Please try again later.", type: "danger" })
                        break
                    default:
                        console.log("Default (unhandled) case.")
                        break;
                }
            } catch (error) {
                console.log("Failure, there was some error...", error);
            }
            setisLoading(false)
        })()

    }

    return (
        <>
            <Header />

            <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
                <div className="container form mt-5 change-password">
                    <div className="row">
                        <div className="col-md-9 login-form-1 mx-auto my-1 border border-primary rounded shadow">
                            <div className="m-4">
                                <h3 className="main-content-heading">Change Password</h3>

                                <div className="row form-group mt-5 d-flex align-items-center justify-content-center">
                                    <label htmlFor="currPass" className="form-label label-custom-css">
                                        Current Password
                                    </label>
                                    <input type="password" className={`form-control input-custom-css ${currPassInputRed ? "input-red" : ""} ${currPassInputGreen ? "input-green" : ""}`}
                                        onChange={(item) => store(item, "currPassword")}
                                        onBlur={validateCurrPass}
                                        aria-describedby="basic-addon1" placeholder="Enter current password"
                                    />
                                    <div className="just-for-rendering"> &nbsp; </div>
                                    <div className="invalid-input-msg">{invalidCurrPassMsg} &nbsp; </div>
                                </div>

                                <div className="row form-group mt-4 d-flex align-items-center justify-content-center">
                                    <label htmlFor="currPass" className="form-label label-custom-css">
                                        New Password
                                </label>
                                    <input type="password" className={`form-control input-custom-css ${newPass1InputRed ? "input-red" : ""} ${newPass1InputGreen ? "input-green" : ""}`}
                                        onChange={(item) => store(item, "newPassword1")}
                                        onBlur={checkNewPass1}
                                        aria-describedby="basic-addon2" placeholder="Enter new password"
                                    />
                                    <div className="just-for-rendering"> &nbsp; </div>
                                    <div className="invalid-input-msg">{invalidNewPassMsg} &nbsp; </div>
                                </div>

                                <div className="row form-group mt-4 d-flex align-items-center justify-content-center">
                                    <label htmlFor="currPass" className="form-label label-custom-css">
                                        Confirm New Password
                                </label>
                                    <input type="password" className={`form-control input-custom-css ${newPass2InputRed ? "input-red" : ""} ${newPass2InputGreen ? "input-green" : ""}`}
                                        onChange={(item) => store(item, "newPassword2")}
                                        onBlur={checkNewPassMatch}
                                        aria-describedby="basic-addon3" placeholder="Re-enter new password"
                                    />
                                    <div className="just-for-rendering"> &nbsp; </div>
                                    <div className="invalid-input-msg">{PasswordsDontMatch} &nbsp; </div>
                                </div>

                                <div className="form-group d-flex justify-content-center mt-4 mb-3 mx-auto py-4 w-75">
                                    <LoaderButton className="button-width-css" type="button" onClick={submitPassChange}
                                        isLoading={isLoading}>
                                        Submit &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                    </LoaderButton>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Toast toast={toast} settoast={settoast} />

        </>
    )
}

export default ChangePassword
