import React, {useContext} from 'react'
import Header from './components/Header'
import { SidenavContext } from './components/SidenavContext'

function Dashboard() {

    const [SidenavOpen] = useContext(SidenavContext)

    return (
        <>
            <Header />

            <div className={`main-content-css ${SidenavOpen ? "shift" : "center"}`}>
                <div className="p-4 m-auto">
                    <span className="h4">Welcome to dashboard.</span>

                </div>
            </div>

        </>
    )
}

export default Dashboard
