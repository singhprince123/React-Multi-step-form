import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';


export default class FormUserDetails extends Component {

    continue =  e  => {
        e.preventDefault();
        // process
        this.props.nextStep();
    }

    back =  e  => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
     
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Success" />
                <h1>Thank You For Your Submissionn</h1>
                <p>You will get an email with  further insturction</p>
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
