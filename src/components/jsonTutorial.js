import React from 'react';
// import React, { Component } from 'react';
import '../style.scss';
import jsonScreen from '../img/jsonTutorialImage.png';


// class JsonTutorial extends Component {
export const JsonTutorial = () => {
//   render() {
  return (
    <div className="whole-page">
      <h1 id="JSON_File_Title">Upload Your JSON File</h1>
      <h2><span id="step">Step 1:</span> Go to <a href="https://takeout.google.com/settings/takeout?pli=1">Google Takeout</a></h2>
      <h2><span id="step">Step 2:</span> Sign In</h2>
      <h2><span id="step">Step 3:</span> In  &quot;Select Data to Include&quot; only Select Location History.</h2>
      <h3>If you don't have Location History - don't worry! Hit Done and Download Our App!</h3>
      <h2><span id="step">Step 4:</span> Select  &quot;One Time Archive&quot;.</h2>
      <h2><span id="step">Step 5:</span> Click on &quot;Create Archive&quot;.</h2>
      {/* <img className="logo" src={jsonScreen} alt="" /> */}
      <h2><span id="step">Step 6:</span> When You Receive Your Email, Open the Link and Download the File.</h2>
      <div className="button_container">
        <button type="submit" className="doneJSON">Done</button>
      </div>
    </div>
  );
//   }
};
export default JsonTutorial;
