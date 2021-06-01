//import './App.css';
import Home from "./components/Home";
import Login from './components/user/Login';
//import Signup from './components/user/Signup';
import { Route } from "react-router-dom";
import Dashboard from './components/user/Loggedin/Dashboard';
import Profile from './components/user/Loggedin/Profile'
import Settings from './components/user/Loggedin/Settings'
import ChangePassword from './components/user/Loggedin/ChangePassword'
import { SidenavStateProvider } from './components/user/Loggedin/components/SidenavContext'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={Signup} /> */}

      <SidenavStateProvider>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/changePassword" component={ChangePassword} />
      </SidenavStateProvider>

    </div>
  );
}

export default App;
