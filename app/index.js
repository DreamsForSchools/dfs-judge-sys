import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Login from './components/Login';
import MainPage from './components/MainPage';
import fire from './components/config/firebase';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
var Team = require('./data/team');

var Team1 = new Team("1",
                    "Gogo",
                    "uber",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
                    0);
var Team2 = new Team("2",
  "Eateat",
  "postmates",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team3 = new Team("3",
  "Studystudy",
  "canvas",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team4 = new Team("4",
  "Askask",
  "piazza",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team5 = new Team("5",
  "Watchwatch",
  "youtube",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team6 = new Team("6",
  "Listenlisten",
  "spotify",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team7 = new Team("7",
  "Searchsearch",
  "google",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var Team8 = new Team("8",
  "Shopshop",
  "amazon",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
  0);
var listofTeams = [Team1];

var db = fire.firestore();
var eventRef = db.collection("events").doc("event19");
var teamRef = eventRef.collection("teams");
var tempTeam  = [];

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      user: {},
      teams: []
    }
  }
  getTeamData(){
    
    // tempTeam = new Team[5];
    console.log("get team data...");
    teamRef.get().then(function(querySnapshot){
      listofTeams.pop();
      querySnapshot.forEach(function(doc){
        var temp = new Team("2", doc.data().teamName, doc.data().appName, doc.data().appDescription);
        listofTeams.push(temp);
        console.log(doc.id, " => ", doc.data());
      })
    })
    
    
    // this.setState({teams: tempTeam}, function(){
    //   // console.log("state",this.state.teams);
    //   console.log("listofteam", listofTeams);
    //   // console.log('haha',JSON.stringify(tempTeam[0]));
    // });
    
  }
  componentDidMount(){
    this.authListener();
    this.getTeamData();
  }
  
  // componentWillUnmount(){
  //   this.getTeamData();
  // }
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

ReactDOM.render(
  <App 
  />, 
  document.getElementById('app')
)


// <Router>
//           <div>
//             {/* <ul>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>

//             </ul> */}
            
//             {/* <Route path="/" exact={true} component={Login} /> */}

//             {/* <Route path="/" exact strict component={() => <MainPage teams={listofTeams}></MainPage>}/> */}

//           </div>
//         </Router>