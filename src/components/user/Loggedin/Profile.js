import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SidenavContext } from './components/SidenavContext'
import './CommonCss.css'
import Header from './components/Header'
import LoaderButton from '../LoaderButton'
import Toast from '../../resuable/Toast'

let Details;

function Display({display, toast, settoast}) {
  if(display === "loader") {
    return (
      <div className="d-flex justify-content-center">
        <LoaderButton isLoading={true} className="m-auto" style={{width: "12rem", border: "none"}}>Loading</LoaderButton>
      </div>
    )
  } else if(display === "profile details") {
    return <ProfileMainContent userDetails={Details}/>
  } else if(display === "error") {
    settoast({text:"Something went wrong. Please try again later.", type: "danger"})
    return <Toast toast={toast} settoast={settoast} />
  }
}

function ProfileMainContent({userDetails}) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">Name :</div>
          <div className="col-9">{userDetails.Name}</div>
        </div>
        
        <div className="row">
          <div className="col-3">Gender :</div>
          <div className="col-9">{userDetails.Gender}</div>
        </div>

        <div className="row">
          <div className="col-3">Date of birth :</div>
          <div className="col-9">{userDetails.Dob}</div>
        </div>

        <div className="row">
          <div className="col-3">Address :</div>
          <div className="col-9">{userDetails.Address}</div>
        </div>

        {/* Try to use map */}

      </div>
    </>
  )
}

function Profile() {

  const history = useHistory();

  const [SidenavOpen] = useContext(SidenavContext)

  const [display, setdisplay] = useState("loader")
  const [toast, settoast] = useState({text:"", type: ""})

  function fetchProfile() {
    let data = {};
    data.User = localStorage.getItem("isLoggedInLS");

    let url = "/fetchProfile";
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
        Details = await response.json();

        switch (resStatus) {
          case 200:
            setdisplay("profile details")
            break
          case 401:
            localStorage.clear()
            history.push("/login")
            break
          case 404:
            setdisplay("error")                     // Not working
            break
          case 500:
            setdisplay("error")
            alert("Something went wrong. Please try again after sometime.")
            break
          default:
            console.log("Default (unhandled) case.")
            break;
        }
      } catch (error) {
        // setdisplay("error")
        console.log("Error, unable to send request.", error);
      }
    })()
  }
  

  return (
    <>

      <Header />

      <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
        <div className="m-4">
          <h3 className="main-content-heading">User profile</h3>

          {fetchProfile()}
          <Display display={display} toast={toast} settoast={settoast}/>

        </div>
      </div>

    </>
  )
}

export default Profile
