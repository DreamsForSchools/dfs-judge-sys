import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Login from './Login';
import MainPage from './MainPage';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import fire from './Firebase/firebase';

var Team = require('./data/team');
var Team1 = new Team(1,
  "teamname",
  "appname",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.");

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {},
      teams: []
    }
  }
  // Retrieve data from firestore
  getTeamData(){
    console.log("get team data...");
    teamRef.get().then(function(querySnapshot){
      listofTeams.pop();
      querySnapshot.forEach(function(doc){
        var temp = new Team("2", doc.data().teamName, doc.data().appName, doc.data().appDescription);
        listofTeams.push(temp);
        console.log(doc.id, " => ", doc.data());
      })
    })
    
  }
  componentDidMount(){
    this.authListener();
    this.getTeamData();
  }

  authListener() {
    fire.auth().onAuthStateChanged ((user)=> {
      // console.log(user);
      if (user) {
        this.setState({user});
        // localStorage.setItem('user', user.uid);
      } else{
        this.setState({user: null});
        // localStorage.removeItem('user');
      }
    })
  }
  render(){
    
    return(
      <div>
      {this.state.user ? (<MainPage teams={listofTeams}></MainPage>) : (<Login></Login>)}
      {/* {this.state.user ? (<MainPage teams={this.state.teams}></MainPage>) : (<Login></Login>)} */}

      </div>
        

    );
  }
}
export default App;