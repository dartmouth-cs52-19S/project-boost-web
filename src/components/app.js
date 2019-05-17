
import React from 'react';
import '../styles.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingPage from './landing-page/landing-page';
import Nav from './navbar';
import JsonTutorial from './json-tutorial/jsonTutorial';
import Instructions from './instructions/instructions';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/tutorial" component={JsonTutorial} />
          <Route exact path="/instructions" component={Instructions} />
          <Route render={() => (<div>page not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
