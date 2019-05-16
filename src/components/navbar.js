import '../styles.scss';
import React from 'react';
import * as firebase from 'firebase';

const Nav = () => {
  return (
    <nav>
      <h1>BOOST</h1>
      <div id="logout">
        {firebase.auth().currentUser ? <h2>Logout</h2> : null}
      </div>
    </nav>
  );
};

export default Nav;
