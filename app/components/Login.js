var React = require('react');
require('../login.css')
var withRouter = require('react-router-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Redirect = require('react-router-dom');
// var NavLink = require('react-router-dom').NavLink;

// function Nav(){
//   return(
//     <ul className='nav'>
//       <li>
//         <NavLink activeClassName='active' to='/'>
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink activeClassName='active' to='/battle'>
//           Home
//         </NavLink>
//       </li>
//     </ul>
//   )
// }
// module.exports = Nav;

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={username: "",
                password: "",
                accountInvalid: null};
    // Preset accounts for test only
    this.book= {judge_a: {username: "judgea", password: "123"},
                judge_b: {username: "judgeb", password: "123"}};
    // this.routeChange = this.routeChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  // routeChange(){
  //   let path = '/Main';
  //   this.props.history.push(path);
  // }
  submitLogin(e){
    console.log(this.state);
    for (var j in this.book){
      if (this.book[j].username == this.state.username && this.book[j].password == this.state.password){
        this.setState({accountInvalid: false});
        console.log("correct");
        // return <Redirect to='/Main'></Redirect>;
        break;
      }else{
        console.log("wrong account info");
        this.setState({accountInvalid: true});
        break;
      }
    }
   
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
        <img className="logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img>
        <p className="sys-name">Judge</p>
        <div className="login-box-container">
          <div className="login-header">SIGN IN TO YOUR ACCOUNT</div>
        
          <div className="input-group">
            <input type="text" className="login-input"name="username" placeholder="JudgeName" 
              onChange={this.onUsernameChange.bind(this)}/>
          </div> 
        
          <div className="input-group">
            <input type="password" className="login-input" name="password" placeholder="Password" 
              onChange={this.onPasswordChange.bind(this)}></input>
          </div>
        
        
          {this.state.accountInvalid && <div className="errmsg">Invalid Account Information</div>}
        
          <button type="button" className="login-btn" onClick={this.submitLogin}>SIGN IN</button> 

        </div>
        <img className="logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img>
      </div>
     
          
    )
  }
}

module.exports = Login;