import './landing-page.scss';
import React from 'react';
import * as firebase from 'firebase';
import * as db from '../../services/datastore';
import woman from '../../assets/woman.png';

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
      <div>
        <div id="home">
          <div id="content">
            <div className="imageAndText">
              <img src={woman} alt="lady" />
              <div className="text">
                <h1>Helping You Boost Your Productivity</h1>
                <h2>We&apos;ll Help You Plan Your Day So You Can Reach Your Goals</h2>
                <div id="login-container">
                  <h3>Get Started</h3>
                  <img src={require('../../assets/google-signin.png')} alt="Google Sign In" onClick={db.signInWithGoogle} />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div id="background">
          <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" />
          </svg>
        </div>
      </div>
    );
  }
}
