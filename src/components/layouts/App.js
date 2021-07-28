import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../../redux/store';
import AuthorizationReinstate from '../includes/authorization/AuthorizationReinstate';
import Alerts from '../includes/alerts/Alert';
import Landing from '../pages/Landing';
import Missing from '../pages/Missing';
import Footer from '../includes/footers/Footer';
import TopNavBar from '../includes/navigation/TopNavBar';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Result from '../pages/Result';
import Logout from '../pages/Logout';
import Users from '../pages/Users';
import Companies from '../pages/Companies';
import Orders from '../pages/Orders';
import Couriers from '../pages/Couriers'

export default function App() {
  return (
    <Provider store={Store}>
      <Router>
        <AuthorizationReinstate />
        <Alerts />
        <TopNavBar />
        <Switch>
          {/* Landing page*/}
          <Route exact path="/" component={Landing} />

          {/* Dashboard page*/}
          <Route exact path="/dashboard" component={Dashboard} />

          {/* Login page*/}
          <Route exact path="/login" component={Login} />

          {/* Dashboard page*/}
          <Route exact path="/register" component={Register} />

          {/* Result page*/}
          <Route exact path="/result" component={Result} />

          {/* Logout page*/}
          <Route exact path="/logout" component={Logout} />

          {/* Logout page*/}
          <Route exact path="/users" component={Users} />

          {/* Company page*/}
          <Route exact path="/companies" component={Companies} />

          {/* Order page*/}
          <Route exact path="/orders" component={Orders} />

          {/* Courier page*/}
          <Route exact path="/couriers" component={Couriers} />

          {/* Not found page */}
          <Route path="*" component={Missing} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}