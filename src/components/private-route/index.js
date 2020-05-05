import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import Request from '../../shared/Api/request';
import { doLogout } from '../../containers/App/actions';

const PrivateRoute = ({ component: Component, token, ghost_user_id, dispatch, ...rest }) => {
  console.log('token', token);
  if (token) Request.setToken({token, ghost_user_id}, () => {
    dispatch(doLogout())
  })
  return (
    <Route {...rest} render={props => (
          token ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login'
        }}/>
      )
    )}/>
  )
}

function mapStateToProps(store) {
  console.log(store.toJS())
  const { token, ghost_user_id } = store.get('auth').toJS()
  return {
    token,
    ghost_user_id  
  };
}


export default connect(mapStateToProps, null)(PrivateRoute);
