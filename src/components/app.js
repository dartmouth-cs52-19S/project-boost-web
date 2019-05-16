
import React from 'react';
import '../styles.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import Nav from './navbar';
import JsonTutorial from './json-tutorial/jsonTutorial';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/tutorial" component={JsonTutorial} />
            <Route path="/home" component={LandingPage} />
            <Route render={() => (<div>post not found </div>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}
