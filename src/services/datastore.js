import firebase from 'firebase';

// set the configuration for the app
const config = {
  apiKey: 'AIzaSyDCEnVqd_S6_Ra7o4FelYKeeCN4iq_fwpE',
  authDomain: 'cs52-lab3-d6145.firebaseapp.com',
  databaseURL: 'https://cs52-lab3-d6145.firebaseio.com',
  projectId: 'cs52-lab3-d6145',
  storageBucket: 'cs52-lab3-d6145.appspot.com',
  messagingSenderId: '611703282057',
};

firebase.initializeApp(config);
const database = firebase.database();

// get all notes in the database
function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

// adopted from: https://firebase.google.com/docs/auth/web/google-signin
function signInWithGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      resolve(firebase.auth().currentUser);
    }).catch((error) => {
      reject(error);
    });
  });
}


function getCurrentUser() {
  return firebase.auth().currentUser;
}

// promise syntax adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
function signOut() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}


export {
  getCurrentUser, signInWithGoogle, signOut,
};
