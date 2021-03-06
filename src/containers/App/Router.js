import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/private-route';
import RouteNames from './RouteNames';
import Layout from '../Layouts';
import LoginPage from '../Login';
import Dashboard from '../DashboardPage';
import ListProduct from '../ListProductPage';

// const wrappedRoutes = () => (
//   <Layout>
//     <Switch>
//       <Route exact path={RouteNames.dashboard.path} component={Dashboard} />

//       <Route path="" component={Dashboard} />
//     </Switch>
//   </Layout>
// );

const Router = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/products" component={ListProduct} />
    {/* <PrivateRoute path="" component={wrappedRoutes} /> */}
  </Switch>
);

export default Router;
