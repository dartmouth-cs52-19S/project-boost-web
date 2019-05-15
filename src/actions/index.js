// keys for actiontypes
import axios from 'axios';

const LOCAL_URL = 'http://hocalhost:9090/api';

export const ActionTypes = {
  UPLOAD_FILE: 'UPLOAD_FILE',
};

export function uploadFile(selectedFile) {
  return (dispatch) => {
    console.log('------------');
    console.log(selectedFile);

    const fd = new FormData();
    fd.append('fileTest', selectedFile);

    axios.post(`${LOCAL_URL}/upload`, fd, {
      headers: {
        authorization: localStorage.getItem('token'),
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
      'Access-Control-Allow-Credentials': true,
    }).then((response) => {
      // now update contact with newly synced
      dispatch({ type: ActionTypes.UPLOAD_FILE });
      console.log('Maybe didn\'t get an error woo?');
      console.log(response);
    }).catch((error) => {
      console.log('Upload file error:');
      console.log(error);
    });
  };
}
