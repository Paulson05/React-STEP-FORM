import React, { Component } from 'react';
import pBar} from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
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
           <React.Fragment>
           <AppBar title="Enter User Details" />
               
           
           <Button color="primary">Hello World</Button>
           <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
           </React.Fragment>
            </MuiThemeProvider>
           
      
        )
    }
}

export default FormUserDetails
