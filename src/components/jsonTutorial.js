// import React from 'react';
import React, { Component } from 'react';
import '../style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadScreen from '../img/Drag_and_Drop_to_Upload.png';
import uploadJSON from '../actions';


class JsonTutorial extends Component {
  onUploadClick = () => {
    this.props.uploadFile();
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
        <img onClick={this.onUploadClick} className="UploadIMG" src={UploadScreen} alt="" />
        <div className="button_container">
          <button type="submit" className="doneJSON">Done</button>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null, { uploadJSON })(JsonTutorial));
