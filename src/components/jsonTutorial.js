// import React from 'react';
import React, { Component } from 'react';
import '../style.scss';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const LOCAL_URL = 'http://localhost:9090/api';

export default class JsonTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }


  // https://www.mokuji.me/article/drop-upload-tutorial-3
  // https://www.youtube.com/watch?v=0TTa5Ulmgds


  handleFile(files) {
    console.log('at handleFile');
    console.log(files);
    const file = files[0];
    this.setState({ file });
  }

  handleUpload(e) {
    e.preventDefault();
    console.log('at handleUpload');
    const { file } = this.state;
    const formdata = new FormData();
    formdata.append('theFile', file);
    console.log(formdata);
    axios({
      url: LOCAL_URL,
      method: 'POST',
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      console.log('we are zooming - we did not get an error');
    }, (err) => {
      console.log('Upload file error:');
      console.log(err);
    });
  }

  render() {
    return (
      <div className="whole-page">
        <h1 id="JSON_File_Title">Upload Your JSON File</h1>
        <h2><span id="step">Step 1:</span> Go to <a href="https://takeout.google.com/settings/takeout?pli=1">Google Takeout</a></h2>
        <h2><span id="step">Step 2:</span> Sign In</h2>
        <h2><span id="step">Step 3:</span> In  &quot;Select Data to Include&quot; only Select Location History.</h2>
        <h3>If you don&apos;t have Location History - don&apos;t worry! Hit Done and Download Our App!</h3>
        <h2><span id="step">Step 4:</span> Select  &quot;One Time Archive&quot;.</h2>
        <h2><span id="step">Step 5:</span> Click on &quot;Create Archive&quot;.</h2>
        <h2><span id="step">Step 6:</span> When You Receive Your Email, Open the Link and Download the File.</h2>
        <h2><span id="step">Step 7:</span></h2>
        <div className="button_container">
          <span>
            <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag and drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </span>
          <button type="submit" onClick={e => this.handleUpload(e)} className="doneJSON">Done</button>
        </div>
      </div>
    );
  }
}
