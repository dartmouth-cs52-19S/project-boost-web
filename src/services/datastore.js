import * as firebase from 'firebase';
import * as api from './api-requests';

// adopted from: https://firebase.google.com/docs/auth/web/google-signin
function signInWithGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
          api.getUserInfo(idToken).then((userData) => {
            resolve(userData);
          }).catch((error) => {
            reject(error);
          });
        }).catch((error) => {
          reject(error);
        });
    }).catch((error) => {
      reject(error);
    });
  });
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
  signInWithGoogle, signOut,
};
