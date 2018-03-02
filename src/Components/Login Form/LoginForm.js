import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import './Login.css';
import { SignUpLink } from '../SignUp Form/SignUp';
import { auth } from '../../Firebase/firebase';
import * as routes from '../../Constants/routes';
import { doSignInWithEmailAndPassword } from '../../Firebase/auth';

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

const SignInPage = ({ history }) =>
  <div>
    <h1>Sign In</h1>
    <LoginForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
    
  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';


    return(
      <MuiThemeProvider>
        <form className='form' onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <TextField
          hintText="Enter Email"
          floatingLabelText="Email"
          type="email"
          className="email"
          floatingLabelFocusStyle={style.floatingLabelFocusStyle}
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={style.inputStyle}
          underlineStyle={style.underlineStyle}
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
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
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          />
          <br/>
          <RaisedButton
            // disabled={isInvalid}
            type="submit" 
            label="Sign In" 
            secondary={true} 
            style={style} />
            { error && <p>{error.message}</p> }
        </form> 
      </MuiThemeProvider>     
    );
  }
}

export default withRouter(SignInPage);

export {
  LoginForm,
};


