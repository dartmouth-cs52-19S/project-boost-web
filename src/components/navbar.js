import '../styles.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as db from '../services/datastore';

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/">BOOST</NavLink>
      <div id="logout">
        {props.user ? <h2 onClick={db.signOut}>Logout</h2> : null}
      </div>
    </nav>
  );
};

export default Nav;
