import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Login.css';

const style = {
	margin: 12,
};

class LoginForm extends Component {
    
	render() {
		return(
			<MuiThemeProvider>
				<form className='form'>
					<TextField
					hintText="Enter Email"
					floatingLabelText="Email"
					type="email"
					className="email"
					/>
					<br/>
					<TextField
					hintText="Enter Password"
					floatingLabelText="Password"
					type="password"
					className="password"
					/>
					<br/>
					<RaisedButton label="Submit" secondary={true} style={style} />
				</form>	
			</MuiThemeProvider>			
		);
	}
}

export default LoginForm;