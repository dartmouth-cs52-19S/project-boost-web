import './landing-page.scss';
import React from 'react';
import * as firebase from 'firebase';
import * as db from '../../services/datastore';

// eslint-disable-next-line react/prefer-stateless-function
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  // re-route user to tutorial or home page when auth state changes
  onAuthStateChanged = (user) => {
    if (user) {
      this.props.history.push('/tutorial');
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div id="home">
        <img src={require('../../assets/google-signin.png')} alt="Google Sign In" onClick={db.signInWithGoogle} />
      </div>
    );
  }
}
