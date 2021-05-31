//import './App.css';
import Home from "./components/Home";
import Login from './components/user/Login';
//import Signup from './components/user/Signup';
import { Route } from "react-router-dom";
import Dashboard from './components/user/Dashboard';
import ChangePassword from './components/user/ChangePassword'
import { SidenavStateProvider } from './components/user/SidenavContext'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={Signup} /> */}

      <SidenavStateProvider>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/changePassword" component={ChangePassword} />
      </SidenavStateProvider>

    </div>
  );
}

export default App;
