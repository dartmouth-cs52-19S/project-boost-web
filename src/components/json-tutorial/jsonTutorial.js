import React, { Component } from 'react';
import './json_tutorial.scss';
import Dropzone from 'react-dropzone';
import * as firebase from 'firebase';

const URL = 'http://localhost:9090/api/uploadGoogleLocationData';
// const URL = 'https://project-boost.herokuapp.com/api/uploadGoogleLocationData';

export default class JsonTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      loading: false,
    };

    document.body.style.backgroundColor = '#BCC4C7';
  }

  handleFile = (files) => {
    this.setState({
      file: files[0],
    });
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('uid', firebase.auth().currentUser.uid);

    const request = new XMLHttpRequest();

    request.onload = () => {
      if (request.response !== undefined) {
        console.log(request.response);
        this.setState({
          loading: false,
        });
        this.props.history.push('/all-set');
      }
    };

    request.open('POST', URL, true);
    request.responseType = 'json';
    request.send(formData);

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div id="whole-page">
        <h1 id="JSON_File_Title">Upload Your JSON File</h1>
        <h2><span id="step">Step 1:</span> Go to <a href="https://takeout.google.com/settings/takeout?pli=1" target="_blank" rel="noopener noreferrer">Google Takeout</a></h2>
        <h2><span id="step">Step 2:</span> Sign In</h2>
        <h2><span id="step">Step 3:</span> In  &quot;Select Data to Include&quot; only Select Location History.</h2>
        <h3>If you don&apos;t have Location History - don&apos;t worry! Hit Done and Download Our App!</h3>
        <h2><span id="step">Step 4:</span> Select  &quot;One Time Archive&quot;.</h2>
        <h2><span id="step">Step 5:</span> Click on &quot;Create Archive&quot;.</h2>
        <h2><span id="step">Step 6:</span> When You Receive Your Email, Open the Link and Download the File.</h2>
        <h2><span id="step">Step 7:</span></h2>
        <div className="dropzone_container">
          <span>
            <Dropzone onDrop={acceptedFiles => this.handleFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {this.state.loading ? <p id="loading">Loading...</p> : null}
                    {this.state.file ? <p className="dropzone">{this.state.file.path}</p> : <p className="dropzone">Drag and drop some files here, or click to select files</p>}
                  </div>
                </section>
              )}
            </Dropzone>
          </span>

        </div>
        <button type="submit" onClick={e => this.handleUpload(e)} className="doneJSON">Done</button>
      </div>
    );
  }
}
