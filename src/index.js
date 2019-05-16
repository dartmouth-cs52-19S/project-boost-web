import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/app';
import './styles.scss';

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

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
