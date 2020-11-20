import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
// import TextField from '@material-ui/TextField';
// import Button from '@material-ui/Button';
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    render() {

        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
           <React.Fragment>
               
           <AppBar title="Enter User Details" />
           </React.Fragment>
            </MuiThemeProvider>
      
        )
    }
}

export default FormUserDetails
