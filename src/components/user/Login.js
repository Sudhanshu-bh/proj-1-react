import React, { useState } from 'react'
import './Login.css'
import './Loggedin/CommonCss.css'
import { useHistory } from 'react-router-dom'
import LoaderButton from './LoaderButton'

function Login() {

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [invalidEmailMsg, setinvalidEmailMsg] = useState("");
    const [invalidPassMsg, setinvalidPassMsg] = useState("");

    const [isEmailValid, setisEmailValid] = useState(true);
    const [makeEmailGreen, setmakeEmailGreen] = useState(false);
    const [isPassEmpty, setisPassEmpty] = useState(false);

    function valid(item, type) {

        let itemValue = item.target.value;
        switch (type) {
            case "email": {
                setisEmailValid(true);
                setinvalidEmailMsg("");
                setEmail(itemValue);
                break;
            }
            case "password": {
                setisPassEmpty(false);
                setinvalidPassMsg("");
                setPassword(itemValue);
                break;
            }
            default: {
                console.warn("This is a default (unhandled) case.");
                break;
            }
        }
    }

    function validateEmail() {

        if (!email.includes("@") || !email.includes(".") || email.includes(",") || email.includes(" ")
            || email.includes("/") || email.includes("?")) {
            // update state by setState
            setisEmailValid(false)
            setinvalidEmailMsg("Please enter a valid Email ID!")
            return
        }
        else { setisEmailValid(true) }

        let data = {};
        data.user = email;

        let url = "/validate/email";
        let params = {
            method: 'post',
            body: JSON.stringify(data),
        };

        let response;
        let resStatus = 0;
        async function validateEmail() {
            try {
                response = await fetch(url, params);

                resStatus = response.status;
                // const jsonData = await response.json();

                switch (resStatus) {
                    case 200:
                        setmakeEmailGreen(true)
                        break;
                    case 401:
                        setmakeEmailGreen(false)
                        setisEmailValid(false)
                        setinvalidEmailMsg("This Email ID is not registered with us. Please enter a valid Email ID.")
                        break;
                    case 500:
                        console.log("500 - Server error, unable to validate email from database.")
                        break;
                    default:
                        console.log("Default (unhandled) case.")
                        break;
                }
            } catch (error) {
                console.log("Failure, there was some error...", error);
            }
        }
        validateEmail()
    }

    function checkIfPasswordEmpty() {
        if (password === "") {
            setisPassEmpty(true)
            setinvalidPassMsg("Please enter your password!")
        }
        else { setisPassEmpty(false) }
    }

    function submit(event) {

        event.preventDefault();

        setinvalidEmailMsg("");
        setinvalidPassMsg("");

        let retStatus = 0;
        if (email === "") {
            setinvalidEmailMsg("Please enter your Email ID!");
            retStatus = 1;
        }
        if (password === "") {
            setinvalidPassMsg("Please enter your password!");
            retStatus = 1;
        }
        if (retStatus === 1) return

        setIsLoading(true);

        let data = {};
        data.user = email;
        data.password = password;

        let url = "/validate/credentials";
        let params = {
            method: 'post',
            body: JSON.stringify(data),
        };

        let response;
        let resStatus = 0;
        async function validateUser() {
            try {
                response = await fetch(url, params);

                resStatus = response.status;
                const jsonData = await response.json();

                switch (resStatus) {
                    case 200:
                        setIsLoading(false);
                        localStorage.setItem('isLoggedInLS', email);
                        history.push("/Dashboard");
                        break;
                    case 400:
                        setIsLoading(false);
                        alert("Please enter both email ID and password!");
                        break;
                    case 401:
                        setIsLoading(false);
                        if (jsonData['error'] === "Invalid email") { setinvalidEmailMsg("Please enter a valid Email ID!"); }
                        else if (jsonData['error'] === "Invalid password") { setinvalidPassMsg("Please enter the correct password!"); }
                        break;
                    case 404:
                        setIsLoading(false);
                        alert("Make sure you are connected to the internet!");
                        break;
                    case 500:
                        setIsLoading(false);
                        alert("Something went wrong, please try again later!");
                        console.log("Server error!");
                        break;
                    default:
                        setIsLoading(false);
                        console.log("Unhandled response status.");
                        break;
                }

            } catch (error) {
                console.log("Failure, there was some error...", error);
                setIsLoading(false);
            }

        }
        validateUser();

    }
    function checkIfAlreadyLoggedIn() {
        let logged = localStorage.getItem('isLoggedInLS');
        if (logged) {
            history.push('/dashboard');
        }
    }

    return (
        <>
            {checkIfAlreadyLoggedIn()}

            <form className="container form">
                <div className="row">
                    <div className="col-md-9 col-lg-6 login-form-1 mx-auto my-5 pt-2 border border-primary rounded shadow">
                        <div className="m-3">
                            <h3 className="main-content-heading">Login</h3>

                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">
                                    EMail ID
                            </label>
                                <div className="input-group mb-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text h-100" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="email" className={`form-control emailInput ${isEmailValid ? "" : "invalid-field-color"} ${makeEmailGreen ? "email-green-color" : ""}`} placeholder="Please enter Email Id"
                                        onChange={(item) => valid(item, "email")} spellCheck="false"
                                        onBlur={validateEmail}
                                        aria-label="username" aria-describedby="basic-addon1"
                                    />
                                </div>
                                <div className="invalid-credentials-msg">{invalidEmailMsg}&nbsp;</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    Password
                            </label>

                                <div className="input-group mb-1">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text h-100" id="basic-addon2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="password" className={`form-control ${isPassEmpty ? "invalid-field-color" : ""}`} placeholder="Please enter password"
                                        onChange={(item) => valid(item, "password")}
                                        onBlur={checkIfPasswordEmpty}
                                        aria-label="password" aria-describedby="basic-addon2"
                                    />
                                </div>
                                <div className="invalid-credentials-msg">{invalidPassMsg}&nbsp;</div>
                            </div>

                            <div className="form-group d-flex justify-content-end">
                                <a href="/#" className="d-block mb-4 ">Forgot Password?</a>
                            </div>

                            <div className="form-group mb-5 pb-2 d-flex justify-content-center">
                                <LoaderButton type="submit" onClick={submit}
                                    isLoading={isLoading}>
                                    Login &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                </LoaderButton>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    );
}

export default Login
