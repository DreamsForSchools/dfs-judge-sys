import React, {Component} from 'react';
import fire from './Firebase/firebase';
import LoginPage from './LoginPage';
require('firebase/auth');
import EventPage from './EventPage';

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
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.setState({ userEmail: user.email });
        console.log("auth: ", user.email);
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render(){
    return(
      <div>
        {this.state.user ? <EventPage judgeEmail={this.state.userEmail}></EventPage> : <LoginPage></LoginPage>}
      </div>
    )
  }
}

export default App;



