import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1 className="display-3">This is the Homepage</h1>
            <Link to="/login" className="btn btn-info">Login</Link>
            <Link to="/TempDashboard" className="btn btn-info">TempDashboard</Link>
        </div>
    )
}
