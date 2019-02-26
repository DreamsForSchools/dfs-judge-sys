import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Login from './components/Login';
import MainPage from './components/MainPage';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
var Team = require('./data/team');
var Team1 = new Team(1,"teamname","appname","description");

class App extends Component{
  // constructor(props){
  //     super(props);
  //     this.state ={};
  // }
  render(){
    
      return(
        <Router>
          <div>
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

            </ul> */}
            

            {/* <Route path="/" exact={true} component={Login} /> */}
            <Route path="/" exact strict component={() => <MainPage team={Team1}></MainPage>}/>
          </div>
        </Router>
          

      );
  }
}

ReactDOM.render(
  <App 
  
  />, 
  document.getElementById('app')
)
