import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class LoginForm extends Component {
    
	render() {
		return(
			<MuiThemeProvider>
				<TextField
				hintText="Password Field"
				floatingLabelText="Password"
				type="password"
				/><br/>
			</MuiThemeProvider>
				
		);
	}
}

export default LoginForm;