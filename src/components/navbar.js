import '../styles.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand p-2">BOOST</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/signin">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
