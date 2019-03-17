import React from 'react';
import {
	withRouter
} from 'react-router-dom';
require('../login.css');
// import Firebase from './Firebase/firebase';
import { FirebaseContext } from './Firebase';

const LoginPage = () =>(
  <FirebaseContext.Consumer>
    {firebase => <Login firebase={firebase}></Login>}
  </FirebaseContext.Consumer>
);


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={username: "",
                password: "",
                accountInvalid: null};
  }
  
  submitLogin(e){
    // this.props.firebase.doSignInWithEmailAndPassword(this.state.username, this.state.password).then(()=>{console.log("correct")}).catch((error)=>{
    //   console.log(error);
    // });
    this.props.firebase.doSignInWithEmailAndPassword(this.state.username, this.state.password);
    e.preventDefault();
  }
  onUsernameChange(e){
    this.setState({username: e.target.value});
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
  }
  render(){
    return(
      
      <div className="root-container">
        <div className="logo-container"><img className="logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img></div>
        <p className="sys-name">Judge</p>
        <div className="login-box-container">
          <div className="login-header">SIGN IN TO YOUR ACCOUNT</div>

          <form method="post" onSubmit={this.submitLogin.bind(this)}>
            <div className="input-group">
              <input type="text" className="login-input"name="username" placeholder="JudgeName" 
                onChange={this.onUsernameChange.bind(this)}/>
            </div>
            <div className="input-group">
              <input type="password" className="login-input" name="password" placeholder="Password" 
                onChange={this.onPasswordChange.bind(this)}></input>
            </div>
              <input className="login-btn" type="submit" value="SIGN IN" />
          </form>
          {/* {this.state.accountInvalid && <div className="errmsg">Invalid Account Information</div>} */}
        </div>
        <img className="logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img>
      </div>
         
    );
  }
}


// export default withRouter(Login);
export default LoginPage;
export {Login};