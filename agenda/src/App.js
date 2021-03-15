import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorial-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Agenda de contactos
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Contactos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                añadir contacto
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>Prática React Firebase Database CRUD</h2>
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
