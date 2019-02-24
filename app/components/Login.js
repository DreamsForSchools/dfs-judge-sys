import React from 'react';
import {
	withRouter
} from 'react-router-dom';
require('../login.css');
// class ContactForm extends React.Component {

// 	submitForm (e) {
// 		e.preventDefault()
// 		this.props.history.push('/about');
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.submitForm.bind(this)}>
// 					<button type="submit">Submit</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }
// export default withRouter(ContactForm);


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={username: "",
                password: "",
                accountInvalid: null};
    // Preset accounts for test only
    this.book= {judge_a: {username: "judgea", password: "123"},
                judge_b: {username: "judgeb", password: "123"}};
  }

  submitLogin(e){
    console.log(this.state);
    for (var j in this.book){
      if (this.book[j].username == this.state.username && this.book[j].password == this.state.password){
        this.setState({accountInvalid: false});
        console.log("correct");
        e.preventDefault()
      this.props.history.push('/score');
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

          <form onSubmit={this.submitLogin.bind(this)}>
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
          {this.state.accountInvalid && <div className="errmsg">Invalid Account Information</div>}
        </div>
        <img className="logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img>
      </div>
         
    )
  }
}


export default withRouter(Login);