import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS & PAGES
import MenuBar from '../components/menu-bar/menu-bar.component.jsx';
import SignUpPage from '../pages/signup/signup.component.jsx';
import LoginPage from '../pages/login/login.component.jsx';
import AccountPage from '../pages/account/account.component.jsx';
import NotFoundPage from '../pages/not-found/not-found.component.jsx';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Redirect exact from="/" to="/login" />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/register" component={SignUpPage} />
                <Redirect exact from="/signup" to="/register" />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;