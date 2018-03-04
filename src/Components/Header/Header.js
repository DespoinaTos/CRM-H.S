import './Header.css';
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../Landing/LandingPage';
import SignUpForm from '../SignUp Form/SignUp';
import PasswordForget from '../Password Forget/PasswordForget';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account Page/Account';
import * as routes from '../../Constants/routes';
import LoginForm from '../Login Form/LoginForm';
import NotFound from '../NotFound/NotFound';

const styles = {
  labelStyle: {
    color: 'white',
  },
  thumbSwitched: {
    backgroundColor: '#ff2b6e',
  },
  trackSwitched: {
    backgroundColor: '#FF87AD',
  },
}

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  	>
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <MuiThemeProvider>      
        <header className='header'>  
          <div>
            <Toggle
              label="Logged"
              defaultToggled={false}
              onToggle={this.handleChange}
              labelPosition="right"
              style={{margin: 20}}
              className= 'toggle'
              labelStyle={styles.labelStyle}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
            />

          <AppBar
            title="CRM H-S"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
            className='appbar'
          />
          
          <Router>  
            <div>
            <Switch> 
                {/* <Navigation /> */}
                {/* <hr/> */}
                <Route
                  exact path={routes.LANDING}
                  component={() => <LandingPage />}
                />
                <Route
                  exact path={routes.SIGN_UP}
                  component={() => <SignUpForm />}
                />
                <Route
                  exact path={routes.SIGN_IN}
                  component={() => <LoginForm />}
                />
                <Route
                  exact path={routes.PASSWORD_FORGET}
                  component={() => <PasswordForget />}
                />
                <Route
                  exact path={routes.HOME}
                  component={() => <HomePage />}
                />
                <Route
                  exact path={routes.ACCOUNT}
                  component={() => <AccountPage />}
                />
                <Route 
                exact component={NotFound}
                />
              </Switch>
            </div>      
          </Router>
          </div>
        </header>
      </MuiThemeProvider>
    );
  }
}

export default Header;