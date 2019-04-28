import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
require('../login.css');
import fire from './Firebase/firebase';
require('firebase/auth');

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state= { email: "",
                  password: "",
                  accountInvalid: false,
                  logineError: "",
                  resetClicked: false,
                  resetSuccess: false,
                  resetError: null
                };
    this.onReset = this.onPasswordReset.bind(this);
    this.onTroubleLogin = this.onTroubleLogin.bind(this);
  }
  submitLogin(e){
    e.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error)=>{
      console.log(error);
      this.setState({logineError: error.message});
      this.setState({accountInvalid: true});
    });
    // Dummy thing to avoid chrome console warning
    // browser.runtime.onMessage.addListener(message => {
    //   console.log("background: onMessage", message);
    //   return Promise.resolve("Dummy response to keep the console quiet");
    // });
  }
  onEmailChange(e){
    this.setState({email: e.target.value});
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
  }
  onTroubleLogin(e){
    this.setState({resetClicked: true});
  }
  onPasswordReset(e){
    this.setState({resetSuccess: true});
    console.log(this.state.resetSuccess);
    var auth = fire.auth();
    var emailAddress = this.state.email;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      // this.setState({resetSuccess: true});
      console.log("reset email sent!");
    }).catch(function(error) {
      // An error happened.
      this.setState({resetError: error.message});
    });
  } 
  render(){
    return (
      <Container fluid={true}>
        <Row className="login-row">
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>
          <Col className="login-col"xs={12} sm={8} lg={6} xl={4}><img className="login-logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img></Col>
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>
        </Row>
        <Row>
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>
          <Col className="login-col"xs={12} sm={8} lg={6} xl={4}><p className="sys-name">Judge</p></Col>
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>

        </Row>
        <Row className="login-row">
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>
          <Col className="login-col login-box"xs={12} sm={8} lg={6} xl={4}>
            <Row className="login-row">
              <Col className="login-col" lg={1}></Col>
              <Col className="login-col" lg={10}><div className="signin-text">SIGN IN TO YOUR ACCOUNT</div></Col>
              <Col className="login-col" lg={1}></Col>
            </Row>
            
            <Row>
              <Col className="login-col" lg={2}></Col>
              <Col className="login-col" lg={8}>
                <form method="post" onSubmit={this.submitLogin.bind(this)}>
                  <input className="login-input-field" type="text" name="email" placeholder="Email" onChange={this.onEmailChange.bind(this)}/>
                  <input className="login-input-field" type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)}/>
                  {this.state.accountInvalid && <label className="error">{this.state.logineError}</label>}
                  <input className="login-submit"type="submit" value="SIGN IN" />
                </form>
              </Col>
              <Col className="login-col" lg={2}></Col>
            </Row>
          </Col>
          <Col className="login-col"sm={2} lg={3} xl={4}></Col>
        </Row>
        {! this.state.resetClicked &&
          <Row className="login-row">
            <Col className="login-col" sm={2} lg={3} xl={4}></Col>
            <Col className="login-col" sm={8} lg={6} xl={4}><a href="#login-help" onClick={(e)=>this.onTroubleLogin()} className="reset-password">Having trouble login?</a></Col>
            <Col className="login-col" sm={2} lg={3} xl={4}></Col>
          </Row>
        }

        {this.state.resetClicked && (this.state.resetSuccess ? 
          (
            <Row className="login-row">
              <Col className="login-col" sm={2} lg={3} xl={4}></Col>
              <Col className="login-col" sm={8} lg={6} xl={4}><p className="reset-password successful">Reset email sent, please check your email.</p></Col>
              <Col className="login-col" sm={2} lg={3} xl={4}></Col>
            </Row>
          ) : 
          (
            <Row className="login-row">
              <Col className="login-col" sm={2} lg={3} xl={4}></Col>
              <Col className="login-col" sm={8} lg={6} xl={4}><p className="reset-password">Enter your email, then click here to reset your password.<button className="reset-btn"onClick={(e)=>this.onPasswordReset()}>Reset</button></p></Col>
              <Col className="login-col" sm={2} lg={3} xl={4}></Col>
            </Row>
          ))
        }

        {this.state.resetError && 
          <Row className="login-row">
            <Col className="login-col" sm={2} lg={3} xl={4}></Col>
            <Col className="login-col" sm={8} lg={6} xl={4}><p className="reset-password">Reset Error: {this.state.resetError}</p></Col>
            <Col className="login-col" sm={2} lg={3} xl={4}></Col>
          </Row>
        }
        
        <Row className="login-row">
          <Col className="login-col"lg={3} xl={4}></Col>
          <Col className="login-col"xs={12} lg={6} xl={4}><img className="login-logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img></Col>
          <Col className="login-col"lg={3} xl={4}></Col>
        </Row>
      </Container>
      
    );
  }
}
export default LoginPage;
// export {Login}