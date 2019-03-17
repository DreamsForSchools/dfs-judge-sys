import React, {Component} from 'react';
import LoginPage from './Login';
import {Main} from './MainPage';
// import MainPage from './MainPage';
import Firebase from './Firebase/firebase';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { FirebaseContext } from './Firebase';
var Team = require('../components/Firebase/data/team');
// var Team1 = new Team("1",
//                     "Gogo",
//                     "uber",
//                     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
//                     0);
// var Team2 = new Team("1",
// "Gogo",
// "uber",
// "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
// 0);

// var listofTeams = [Team1, Team2];
var tempabc = [];
const AppPage = () =>(
  <FirebaseContext.Consumer>
    {firebase => <App firebase={firebase} teams={firebase.getTeamsData()}></App>}
  </FirebaseContext.Consumer>
);
const MainPage= () =>(
  <FirebaseContext.Consumer>
    {firebase => <Main firebase={firebase} teams={tempabc}></Main>}
  </FirebaseContext.Consumer>
);
class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      authUser: null,
      teams: this.props.teams
    }
    tempabc = this.state.teams;
  }

  componentDidMount(){
    // console.log(this.props.firebase.getTeamsData);
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
    
  }

  render(){
      
      return(
        <div>
          {/* <LoginPage></LoginPage> */}
          {this.state.authUser ? (<MainPage></MainPage>) : (<LoginPage></LoginPage>)}
          {/* <MainPage></MainPage> */}
        </div>
        

      );
  }
}

export default AppPage;
export {App};

{/* <Router>
          <div>
          {this.user ? ((<Route path="/home" exact component={()=><MainPage teams={listofTeams}></MainPage>}></Route>)) 
          : (<Route path="/" exact strict component={Login}></Route>)}
          </div>
        </Router> */}