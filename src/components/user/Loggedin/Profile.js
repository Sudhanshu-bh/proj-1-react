import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoaderButton from '../LoaderButton'
import Header from './components/Header'
import { SidenavContext } from './components/SidenavContext'

let Details;

function Display({display}) {
  if(display === "loader") {
    return (
      <div className="d-flex h-100 align-items-center justify-content-center">
        <LoaderButton isLoading={true} className="m-auto" style={{width: "12rem"}}>Loading</LoaderButton>
      </div>
    )
  } else if(display === "profile details") {
    return <ProfileMainContent userDetails={Details}/>
  } else if(display === "error") {
    return (
      <div className="text-danger text-white">
        Something went wrong!!
      </div>
    )
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

      </div>
    </>
  )
}

function Profile() {

  const history = useHistory();

  const [SidenavOpen] = useContext(SidenavContext)

  const [display, setdisplay] = useState("loader")

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
        console.log("Failure, there was some error...", error);
      }
    })()
  }
  fetchProfile();

  return (
    <>

      <Header />

      <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
        <div className="m-4">
          <h2>User profile</h2>

          <Display display={display}/>

        </div>
      </div>

    </>
  )
}

export default Profile
