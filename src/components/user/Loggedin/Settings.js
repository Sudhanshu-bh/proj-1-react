import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import { SidenavContext } from './components/SidenavContext'

function Settings() {

  const [SidenavOpen] = useContext(SidenavContext)

  return (
    <>
      <Header />

      <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
        <Link to="/changePassword">
          <button className="btn btn-secondary m-4 p-3">Change Password</button>
        </Link>
      </div>

    </>
  )
}

export default Settings
