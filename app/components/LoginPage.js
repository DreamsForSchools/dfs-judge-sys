import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import { FirebaseContext } from './Firebase';
require('../login.css');

const LoginPage = () =>(
  <FirebaseContext.Consumer>
    {firebase => <Login firebase={firebase}></Login>}
  </FirebaseContext.Consumer>
);

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={email: "",
                password: "",
                accountInvalid: null};
  }
  submitLogin(e){
    // this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{console.log("correct")}).catch((error)=>{
    //   console.log(error);
    // });
    this.props.firebase.doSignInWithEmailAndPassword(this.state.email, this.state.password);
    e.preventDefault();
  }
  onEmailChange(e){
    this.setState({email: e.target.value});
  }
  onPasswordChange(e){
    this.setState({password: e.target.value});
  }

  render(){
    return (
      
      <Container fluid={true}>
        <Row className="login-row">
          <Col className="login-col"sm={3}></Col>
          <Col className="login-col"sm={6}><img className="login-logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img></Col>
          <Col className="login-col"sm={3}></Col>
        </Row>
        <Row>
          <Col className="login-col"sm={3}></Col>
          <Col className="login-col"sm={6}><p className="sys-name">Judge</p></Col>
          <Col className="login-col"sm={3}></Col>

        </Row>
        <Row className="login-row">
          <Col className="login-col"sm={3}></Col>
          <Col className="login-col login-box"sm={6}>
            <Row className="login-row">
              <Col className="login-col" sm={1}></Col>
              <Col className="login-col" sm={10}><div className="signin-text">SIGN IN TO YOUR ACCOUNT</div></Col>
              <Col className="login-col" sm={1}></Col>
            </Row>
            <Row>
              <Col className="login-col" sm={2}></Col>
              <Col className="login-col" sm={8}>
                <form method="post" onSubmit={this.submitLogin.bind(this)}>
                  <input className="login-input-field" type="text" name="email" placeholder="Email" onChange={this.onEmailChange.bind(this)}/>
                  <input className="login-input-field" type="password" name="password" placeholder="Password" onChange={this.onPasswordChange.bind(this)}/>
                  <input className="login-submit"type="submit" value="SIGN IN" />
                </form>
                
              </Col>
              <Col className="login-col" sm={2}></Col>
            </Row>
          </Col>
          <Col className="login-col"sm={3}></Col>
        </Row>

        <Row className="login-row">
          <Col className="login-col"sm={3}></Col>
          <Col className="login-col"sm={6}><img className="login-logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img></Col>
          <Col className="login-col"sm={3}></Col>
        </Row>
      </Container>
      
    );
  }
}
export default LoginPage;
export {Login}