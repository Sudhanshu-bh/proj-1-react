//import './App.css';
import Home from "./components/Home";
import Login from './components/user/Login';
//import Signup from './components/user/Signup';
import { Route } from "react-router-dom";
import TempDashboard from './components/user/TempDashboard';

function App() {

  return (
    <div className="App">
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        
        <Route exact path="/TempDashboard" component={TempDashboard} />
        
        {/* <Route exact path="/signup" component={Signup} /> */}
      
    </div>
  );
}

export default App;
