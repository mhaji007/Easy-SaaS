import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login"
import  HomePage from "./components/HomePage"
import  Register from "./components/account/Register"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

function App() {
  return (
    <>
    <div className="App">
      Header component
    </div>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
    </>
  );
}

export default App;
