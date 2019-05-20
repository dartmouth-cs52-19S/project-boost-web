import * as firebase from 'firebase';

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
