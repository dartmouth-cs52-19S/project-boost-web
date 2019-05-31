import axios from 'axios';

const API_URL = 'https://project-boost.herokuapp.com/api';

const getUserInfo = (idToken) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/getAuth`, { userID: idToken })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const uploadInitialData = (file, idToken) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('uid', idToken);

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
