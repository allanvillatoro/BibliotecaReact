import React from 'react';
import Libros from './Libros/Libros';
import Inicio from './Inicio/Inicio';
import Alumnos from './Alumnos/Alumnos';
import Prestamos from './Prestamos/Prestamos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (  
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Biblioteca</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Libros">Libros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Alumnos">Alumnos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Prestamos">Préstamos</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/Libros">
            <Libros />
          </Route>
          <Route path="/Alumnos">
            <Alumnos />
          </Route>
          <Route path="/Prestamos">
            <Prestamos />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
