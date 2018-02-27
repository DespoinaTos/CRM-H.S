import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './Login.css';

const style = {
	margin: 12,
	floatingLabelFocusStyle: {
	  color: '#119EA1'
  },
  floatingLabelStyle: {
    color: 'white'
  },
  inputStyle: {
    color: 'white'
  },
  underlineStyle: {
    borderColor: '#119EA1',
  },
};

class LoginForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    }
  }
    
	render() {
		return(
			<MuiThemeProvider>
				<form className='form'>
					<TextField
					hintText="Enter Email"
					floatingLabelText="Email"
					type="email"
					className="email"
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={style.inputStyle}
          underlineStyle={style.underlineStyle}
					/>
					<br/>
					<TextField
					hintText="Enter Password"
					floatingLabelText="Password"
					type="password"
          className="password"
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={style.inputStyle}
          underlineStyle={style.underlineStyle}
					/>
					<br/>
					<RaisedButton label="Submit" secondary={true} style={style} />
				</form>	
			</MuiThemeProvider>			
		);
	}
}

export default LoginForm;