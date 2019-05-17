import './landing-page.scss';
import React from 'react';
import * as firebase from 'firebase';
import * as db from '../../services/datastore';

// eslint-disable-next-line react/prefer-stateless-function
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    if (firebase.auth().currentUser) {
      this.props.history.push('/tutorial');
    }
  }

  signInUser = () => {
    db.signInWithGoogle().then((result) => {
      this.props.history.push('/tutorial');
    });
  }

  render() {
    return (
      <div id="home">
        <img src={require('../../assets/google-signin.png')} alt="Google Sign In" onClick={this.signInUser} />
      </div>
    );
  }
}
