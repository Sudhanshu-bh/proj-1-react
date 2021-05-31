import React, {useContext} from 'react'
import DashboardHeader from './DashboardHeader'
import { SidenavContext } from './SidenavContext'

function Dashboard() {

    const [SidenavOpen] = useContext(SidenavContext)

    return (
        <>
            <DashboardHeader />

            <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
            <div className="p-4 m-auto">
                <span className="h4">Welcome to dashboard.</span>

            </div>
            </div>

        </>
    )
}

export default Dashboard
