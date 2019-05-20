
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import * as firebase from 'firebase';
import LandingPage from './components/landing-page/landing-page';
import Nav from './components/navbar';
import JsonTutorial from './components/json-tutorial/jsonTutorial';
import allSet from './components/allSet/allSet';

const FireBaseConfig = {
  apiKey: 'AIzaSyDmkIPJ33yx3Bh7OXCPGF7Li51iom96wfg',
  authDomain: 'boost-240320.firebaseapp.com',
  databaseURL: 'https://boost-240320.firebaseio.com',
  projectId: 'boost-240320',
  storageBucket: 'boost-240320.appspot.com',
  messagingSenderId: '911387247122',
};

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FireBaseConfig);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    // set user state when auth state changes so navbar re-renders
    firebase.auth().onAuthStateChanged((user) => { this.setState({ user }); });
  }

  render() {
    return (
      <Router>
        <Nav user={this.state.user} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/tutorial" component={JsonTutorial} />
          <Route exact path="/allSet" component={allSet} />
          <Route render={() => (<div>page not found </div>)} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
