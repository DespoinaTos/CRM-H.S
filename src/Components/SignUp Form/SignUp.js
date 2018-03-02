import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../../Constants/routes';
import { auth } from '../../Firebase/firebase';
import styled from 'styled-components';

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

const SignUpL = styled.p`
color: white;
`;

const SignUpPage = ({ history }) =>
  <div>
    <SignUp history={history} />
  </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
          } = this.state;

          const {
            history,
          } = this.props;
          
          auth.createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
            })
            .catch(error => {
            this.setState(byPropKey('error', error));
            });
      event.preventDefault();
    };
    
	render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

		return(
			<MuiThemeProvider>
				<form className='form' onSubmit={this.onSubmit}>
          <h2>Sign Up</h2>
					<TextField
					hintText="Enter Username"
                    floatingLabelText="Username"
                    value={username}
					type="text"
					className="username"
                    floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                    floatingLabelStyle={style.floatingLabelStyle}
                    inputStyle={style.inputStyle}
                    underlineStyle={style.underlineStyle}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
					/>
					<br/>
                    <TextField
					hintText="Enter Email"
                    floatingLabelText="Email"
                    value={email}
					type="email"
					className="email"
                    floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                    floatingLabelStyle={style.floatingLabelStyle}
                    inputStyle={style.inputStyle}
                    underlineStyle={style.underlineStyle}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
					/>
					<br/>
					<TextField
					hintText="Enter Password"
                    floatingLabelText="Password"
                    value={passwordOne}
					type="password"
                    className="password"
                    floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                    floatingLabelStyle={style.floatingLabelStyle}
                    inputStyle={style.inputStyle}
                    underlineStyle={style.underlineStyle}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    />
                    <TextField
					hintText="Confirm Password"
                    floatingLabelText="Confirm Password"
                    value={passwordTwo}
					type="password"
                    className="password"
                    floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                    floatingLabelStyle={style.floatingLabelStyle}
                    inputStyle={style.inputStyle}
                    underlineStyle={style.underlineStyle}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    />
					<br/>
            
                    <RaisedButton
                    // disabled={isInvalid}
                    type="submit" 
                    label="Submit" 
                    secondary={true} 
                    style={style} />
                    { error && <p>{error.message}</p> }
			</form>	
			</MuiThemeProvider>			
		);
	}
}

const SignUpLink = () =>
  <SignUpL>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </SignUpL>

export default withRouter(SignUpPage);

export {
    SignUp,
    SignUpLink,
  };

