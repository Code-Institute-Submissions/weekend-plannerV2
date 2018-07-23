import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('auth')
            ?<Component {...props} />
            : <Redirect to={{pathname:'/login', state: { from: props.location }}}/>
    )} />
);

const mapStateToProps = (state) => {
    const { user } = user;
    return {
        user
    };
};

export default PrivateRoute;