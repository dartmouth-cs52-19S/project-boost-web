import React, { Component } from 'react';
import './json_tutorial.scss';
import Dropzone from 'react-dropzone';
import * as firebase from 'firebase';
import * as api from '../../services/api-requests';
import loadingGIF from '../../assets/loading.gif';

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

  handleUpload = () => {
    this.setState({
      loading: true,
    }, () => {
      firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
          api.uploadInitialData(this.state.file, idToken)
            .then((response) => {
              this.setState({
                loading: false,
              });
              this.props.history.push('/all-set');
            })
            .catch((error) => {
              console.error(error.message);
            });
        });
    })
      .catch((error) => {
        console.log(error.message);
      });
  }

  renderFileArea = () => {
    if (!this.state.loading) {
      if (this.state.file) {
        return <p className="dropzone">{this.state.file.path}</p>;
      } else {
        return <p className="dropzone">Drag and drop some files here, or click to select files</p>;
      }
    } else return null;
  }

  render() {
    return (
      <div id="whole-page">
        <h1 id="json-file-text">Upload Your JSON File</h1>
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
                    {this.renderFileArea()}
                    {this.state.loading ? (
                      <div id="loading-container">
                        <div id="loader-text">Please Wait for Us to Parse Your Data...</div>
                        <img id="loading-GIF" src={loadingGIF} alt="Loading..." />
                      </div>
                    ) : null}
                  </div>
                </section>
              )}
            </Dropzone>
          </span>

        </div>
        { !this.state.loading ? <button type="submit" onClick={this.handleUpload} className="doneJSON">Done</button> : null}
      </div>
    );
  }
}
