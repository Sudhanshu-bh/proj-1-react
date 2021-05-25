import React from 'react';
import { useHistory } from 'react-router-dom';
import './TempDashboard.css'
//import { openNav, closeNav } from './TempDashboardSidenav'

// function Sidenav() {
//     return (
//         <>
//             <div id="mySidenav" class="sidenav">
//                 <a href="javascript:void(0)" class="closebtn" onclick={closeNav}>&times;</a>
//                 <a href="#">About</a>
//                 <a href="#">Services</a>
//                 <a href="#">Clients</a>
//                 <a href="#">Contact</a>
//             </div>

//             {/* Use any element to open the sidenav */}
//             <span onclick={openNav}>open</span>

//             {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
//             <div id="main">
//                 ...
//             </div>
//         </>
//     )
// }

function openNav() {
    document.getElementById("mySidenav").style.width = "16.6%";
    document.getElementById("main").style.marginLeft = "16.6%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function TempDashboard(props) {

    const history = useHistory();

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

    return (
        <>
            {validateFirst()}

            <div className="row mb-3 bg-danger">
                <div className="display-6 col-11" style={{ textAlign: 'center' }}>User Dashboard</div>
                <button className="btn btn-info col-1" onClick={() => clearSession(history)}>Logout</button>
            </div>

            <div className="container form mt-5">
                <div className="row">
                    <div className="col-2 bg-secondary">
                        <div>Option1</div>
                        <div>Settings</div>
                    </div>
                    <div className="col-10 bg-primary">
                        <h3>Change Password</h3>
                        
                        <input placeholder="Enter your current password"></input>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TempDashboard
