/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API_URL = 'https://project-boost.herokuapp.com/api';
// const API_URL = 'http://localhost:9090/api';

const getUserInfo = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/getAuth`, { userID: id })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const uploadInitialData = (file, uid) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uid', uid);

    const request = new XMLHttpRequest();

    request.onload = () => {
      if (request.response !== undefined) {
        resolve(request.response);
      } else {
        reject(new Error('Didn\'t get a response'));
      }
    };

    request.open('POST', `${API_URL}/uploadGoogleLocationData`, true);
    request.responseType = 'json';
    request.send(formData);
  });
};

export { getUserInfo, uploadInitialData };
