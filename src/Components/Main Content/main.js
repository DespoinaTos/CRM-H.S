import React from 'react';
import LandingPage from '../Landing/LandingPage';
import SignUpForm from '../SignUp Form/SignUp';
import PasswordForget from '../Password Forget/PasswordForget';
import HomePage from '../Home/HomePage';
import AccountPage from '../Account Page/Account';
import * as routes from '../../Constants/routes';
import LoginForm from '../Login Form/LoginForm';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const MainContent = () => {
    return (
        <div>
        <Router>  
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
          </Router>
          </div> 
    );
}

export default MainContent;