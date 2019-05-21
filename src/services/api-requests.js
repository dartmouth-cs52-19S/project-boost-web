/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const API_URL = 'https://project-boost.herokuapp.com/api';
const API_URL = 'http://localhost:9090/api';

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

export { getUserInfo };
