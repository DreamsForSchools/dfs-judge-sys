import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import Login from './components/Login';
import App from './components/App';
import MainPage from './components/MainPage';
// import fire from './components/Firebase/firebase';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
var Team = require('./data/team');

var Team1 = new Team("1",
                    "Gogo",
                    "uber",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
                    0);


var listofTeams = [Team1];

var db = fire.firestore();
var eventRef = db.collection("events").doc("event19");
var teamRef = eventRef.collection("teams");
var tempTeam  = [];

// class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state = {
//       user: {},
//       teams: []
//     }
//   }

  // Retrieve data from firestore
  // getTeamData(){
  //   console.log("get team data...");
  //   teamRef.get().then(function(querySnapshot){
  //     listofTeams.pop();
  //     querySnapshot.forEach(function(doc){
  //       var temp = new Team("2", doc.data().teamName, doc.data().appName, doc.data().appDescription);
  //       listofTeams.push(temp);
  //       console.log(doc.id, " => ", doc.data());
  //     })
  //   })
    
  // }
  // componentDidMount(){
  //   this.authListener();
  //   this.getTeamData();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged ((user)=> {
  //     // console.log(user);
  //     if (user) {
  //       this.setState({user});
  //       // localStorage.setItem('user', user.uid);
  //     } else{
  //       this.setState({user: null});
  //       // localStorage.removeItem('user');
  //     }
  //   })
  // }
//   render(){
      
//       return(
//         <div>
//         {this.state.user ? (<MainPage teams={listofTeams}></MainPage>) : (<Login></Login>)}
//         {/* {this.state.user ? (<MainPage teams={this.state.teams}></MainPage>) : (<Login></Login>)} */}

//         </div>
          

//       );
//   }
// }

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