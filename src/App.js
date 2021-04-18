import logo from './logo.svg';
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login"
import  HomePage from "./components/HomePage"

function App() {
  return (
    <>
    <div className="App">
      Header component
    </div>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </>
  );
}

export default App;
