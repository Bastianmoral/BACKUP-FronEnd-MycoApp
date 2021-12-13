import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MasterRoute from "../src/layout/masterLayout";
import "./App.css";
//import './main.css'
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import Home from "./views/Home";
import Login from "./views/Login";
import injectContext from "./store/appContext";
import CollabForm from "./views/CollabForm";
import Mushroom from "./views/Mushroom";
import Firstview from "./views/Firstview";
//import Register from "./views/Authregister";
import Authregister from "./views/Authregister";
import Observations from "./views/Observations";
import UsersLoginExample from "./views/UsersLoginExample";
import { Navbar } from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
                <Route path="/login" component={Login} />
                <Route path="/firstview" component={Firstview} />
                <Route path="/" component={Home} />
                <MasterRoute path="/collabform" component={CollabForm} />
                <Route path="/mushroom" component={Mushroom} />
                <Route path="/register" component={Authregister} />
                <Route path="/observations" component={Observations} />
                <Route path="/users" component={UsersLoginExample} />
        </Switch>
      </Fragment>
    </Router>
  );
};
export default injectContext(App);

/**/

/*const Li = () => {
  return (
    <li>valor</li>
  )
}

const App = () => {
  const valor = 'honguito'
  return (
  <ul className="clase-css">
    Myco App { valor }</ul>
  );
}

export default App;*/
