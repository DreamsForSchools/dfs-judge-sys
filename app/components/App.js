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
      userEmail: null
    }
    this.db = fire.firestore();
  }
  componentDidMount(){
    this.authListener();
    this.getTeamData();
  }
  getTeamData(userEmail){
    console.log("calling get data", userEmail);
    var docRef = this.db.collection('event-19').doc('judges');
    docRef.get().then(function(doc){
      if (doc.exists) {
        var teamList = [];
        console.log("Team data:", doc.data());
        for (var x in doc.data()){
          for (var y in doc.data()[x].teams){
            var temp = new Team (doc.data()[x].teams[y].teamName, doc.data()[x].teams[y].appName, doc.data()[x].teams[y].appDescription);
            teamList.push(temp);
          }
          return (teamList);
        }
      } else{
        console.log("No such document");
      }
    }).then(teamList=>{
      this.setState({teams: teamList});
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }
  authListener() {
    console.log("calling auth lis");
    fire.auth().onAuthStateChanged ((user)=> {
      if (user) {
        this.setState({user});
        this.setState({userEmail: user.email});
        console.log("auth: ", user.email)
        // return (userEmail);
        // localStorage.setItem('user', user.uid);
      } else{
        this.setState({user: null});
        // return (null);
        // localStorage.removeItem('user');
      }
    })
    // .then(userEmail=>{
    //   this.getTeamData(userEmail);
    // }).catch(function(error){
    //   console.log("Error getting document:", error);
    // });
  }
  render(){
    return(
      <div>
        {(this.state.user && this.state.teams)? <MainPage teams={this.state.teams}></MainPage> : <LoginPage></LoginPage>}
      </div>
    )
  }
}

export default App;



