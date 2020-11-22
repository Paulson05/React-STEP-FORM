import React, { Component } from 'react';
import {AppBar} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import {Dialog} from '@material-ui/core';
import { Button } from '@material-ui/core';
 class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    render() {

        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            <>
            <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
                <AppBar color="primary" title="Enter User Details" >
                 
                 
                </AppBar>
                <TextField
                  placeholder="Enter Your First Name"
                  label="First Name"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Email"
                  label="Email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  margin="normal"
                  fullWidth
                />
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >Continue</Button>
            </Dialog>
            </>
          </MuiThemeProvider>
           
      
        )
    }
}

export default FormUserDetails
