// import logo from './logo.svg';
import "./App.css";
import Display from "./Components/Display";
// import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Components/Register";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Update from "./Components/Update";
// import Profile from "./Components/Profile";
import ProfileContainer from "./Containers/ProfileContainer";
import ProductList from "./Components/ProductList";
// import { Fragment } from "react";
// import Register from './Components/Register';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="App">
          <>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <Display />
              </Route>
              <Route exact path="/logout">
                <Logout />
              </Route>
              <Route exact path="/update/:id">
                <Update />
              </Route>
              <Route exact path="/profile">
                <ProfileContainer />
              </Route>
              <Route exact path="/productList">
                <ProductList/>
              </Route>
            </Switch>
            {/* <Homepage/> */}
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <Update/> */}
          </>
        </div>
      </Router>
    </>
  );
}

export default App;
