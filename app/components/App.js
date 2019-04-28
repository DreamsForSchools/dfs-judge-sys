import React, {Component} from 'react';
import fire from './Firebase/firebase';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
var Team = require('./Firebase/data/team');
require('firebase/auth');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      teams: null,
      userEmail: null,
      teamData: null
    }
    this.db = fire.firestore();
  }
  componentDidMount(){
    this.authListener();
    this.getTeamData();
    //this.getTeamData();
  }
  getJudgesData(userEmail){
    console.log("calling get data", userEmail);
    var docRef = this.db.collection('event-19').doc('judges');
    docRef.get().then(function(doc){
      if (doc.exists) {
        var teamList = [];
        console.log("Judge data:", doc.data());
        for (var x in doc.data()){
          if (doc.data()[x].email == userEmail){
            var judgeName = doc.data()[x].name;
            for (var y in doc.data()[x].teams){
              var temp = new Team (doc.data()[x].teams[y].teamName, doc.data()[x].teams[y].appName, doc.data()[x].teams[y].appDescription, judgeName);
              teamList.push(temp);
            }
          }
        }
        return (teamList);
      } else{
        console.log("No such document");
      }
    }).then(teamList=>{
      this.setState({teams: teamList});
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }
  getTeamData(){
    var docRef = this.db.collection('event-19').doc('teams');
    docRef.get().then(function(doc){
      if (doc.exists) {
        var teamData = [];
        console.log("Team data:", doc.data());
        teamData = doc.data();
        return (teamData);
      } else{
        console.log("No such document");
      }
    }).then(teamData=>{
      this.setState({teamData: teamData});
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }
  authListener() {
    fire.auth().onAuthStateChanged ((user)=> {
      if (user) {
        this.setState({user});
        this.setState({userEmail: user.email});
        console.log("auth: ", user.email)
        this.getJudgesData(user.email);
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
        {(this.state.user && this.state.teams && this.state.teamData)? <MainPage teams={this.state.teams} teamData={this.state.teamData}></MainPage> : <LoginPage></LoginPage>}
      </div>
    )
  }
}

export default App;



