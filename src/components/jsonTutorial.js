import React, { Component } from 'react';

class JsonTutorial extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div>
            <h1>Upload Your JSON File</h1>
                <h2>Step 1: Go to the Website:</h2>
                <h3>https://takeout.google.com/settings/takeout?pli=1</h3>
                <h2>Step 2: Sign In</h2>
                <h2>Step 3: In "Select Data to Include" only Select Location History.</h2>
                <h2>Step 4: Enter these inputs, then click "Create Archive."</h2>
                <img></img>
                <h2>Step 5: When You Receive Your Email, Open the Link and Download the File.</h2>
                <button className="doneJSON">Done</button>
            </div>
        )
    }
}
export default JsonTutorial;

