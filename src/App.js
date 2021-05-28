//import './App.css';
import Home from "./components/Home";
import Login from './components/user/Login';
//import Signup from './components/user/Signup';
import { Route } from "react-router-dom";
import Dashboard from './components/user/Dashboard';
import ChangePassword from './components/user/ChangePassword'

function App() {

  return (
    <div className="App">
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        
        <Route exact path="/dashboard" component={Dashboard} />
        
        {/* <Route exact path="/signup" component={Signup} /> */}
        <Route exact path="/changePassword" component={ChangePassword} />
      
    </div>
  );
}

export default App;
