import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import FlotChart from './pages/FlotChart';
// import MorrisChart from './pages/MorrisChart';
import Tables from './pages/Tables';
import Forms from './pages/Forms';
import PanelWeels from './pages/PanelWeels';
import Buttons from './pages/Buttons';
import Notifications from './pages/Notifications';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Grid from './pages/Grid';
import Blank from './pages/Blank';
import Login from './pages/Login';
import Kakao from './components/Kakao';
import history from './history';

// const AuthRoute = ({component: Component, ...rest}) => {
//   <Route {...rest} render={props => {
//     true ? (<Component {...props} />) : 
//     (<Redirect to={{pathName: '/login'}} />)
//   }}/>
// }

let isLoggedIn = true;

export function onLogout() {
  isLoggedIn = false;
}

export function onLogIn() {
  isLoggedIn = true;
}

class App extends Component {

  render() {
    return (
        isLoggedIn ? (
          <Router history={history}>
            <div id="wrapper">
              <Nav />
              <main role="main">
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/flot-chart' component={FlotChart} />
                {/* <Route path='/morris-chart' component={MorrisChart} /> */}
                <Route exact path='/tables' component={Tables} />
                <Route exact path='/forms' component={Forms} />
                <Route exact path='/panel-weels' component={PanelWeels} />
                <Route exact path='/buttons' component={Buttons} />
                <Route exact path='/notifications' component={Notifications} />
                <Route exact path='/typography' component={Typography} />
                <Route exact path='/icons' component={Icons} />
                <Route exact path='/grid' component={Grid} />
                <Route exact path='/blank' component={Blank} />
                <Route exact path='/login' component={Login} />
                {/* default route */}
                <Route exact path='/auth/kakao/callback' component={Kakao} />
              </main>
            </div>
          </Router>
        ) : <Login />
    );
  }
}

export default App;
