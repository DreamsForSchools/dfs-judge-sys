import React from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
require('../mainpage.css');
import greenchc from '../assets/green-check.png';
var swal = require('sweetalert');
import fire from './Firebase/firebase';
import * as firebase from 'firebase/app';

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
                totalScore: 0,
                alert: null,
                onOverview: true,
                onScore: false,
                //teamsData: []
                };

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
    this.renderOverview = this.renderOverview.bind(this);
    this.onScoreChange = this.onScoreChange.bind(this);
  }
  // Control Score Tab
  onScore(){
    this.setState({onScore: true});
    this.setState({onOverview: false});
  }
  // Control Overview Tab
  onOverview(){
    this.setState({onScore: false});
    this.setState({onOverview: true});
  }
  // Set the score of the team object
  onScoreChange(i, scoretype, e){
    this.props.teams[i].setScore(scoretype, parseInt(e.target.value));
    this.setState({totalScore: this.props.teams[i].totalScore});

    // Check if all score fields are complete
    var cmkrs = document.getElementsByClassName("checkmarks");
    if (this.props.teams[i].isScoreComplete()){
        cmkrs[i].src =  greenchc;
    }
  }
  // Submit score, pop up window to prevent error
  handleSubmit(){
    console.log("submit");
    for (var i=0; i < this.props.teams.length; i++){
      if (!this.props.teams[i].isScoreComplete()){
        swal({
          title: "You cannot submit scores",
          text: "You have some unfinished score field",
          icon: "warning",
          button: true,
        })
      }else{
        swal({
          title: "Are you sure to submit all the teams' score?",
          text: "Once submitted, you will not be able to modify any scores!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willSubmit) => {
          if (willSubmit) {
            swal("Score Submitted!", {
              icon: "success",
            });
            // for (var i=0; i < this.props.teams.length; i++){
            //   this.props.firebase.addTeamsData(this.props.teams[i].teamName,
            //     this.props.teams[i].dscore1,
            //     this.props.teams[i].dscore2,
            //     this.props.teams[i].fscore1,
            //     this.props.teams[i].fscore2,
            //     this.props.teams[i].tscore1,
            //     this.props.teams[i].tscore2,
            //     this.props.teams[i].pscore1,
            //     this.props.teams[i].totalScore);
            // }
          } else {
            swal("Scores are not submitted!");
          }
        });
      }
    }
  }
  handleSignOut(){
    fire.auth().signOut();
  }
  renderTeamTab(){
    var teamCol = [];
    for (var i = 0; i < this.props.teams.length; i++){
      teamCol.push(
        <Nav.Item>
          <Nav.Link eventKey={i} >Team {i+1}<img id="checkmark"className="checkmarks" src={require('../assets/gray-check.png')}></img></Nav.Link>
        </Nav.Item>
      );
    }
    return teamCol;
  }
  renderCustomDropdown15(scoreType, teamScore, i){
    return(
      <span className="custom-dropdown">
        <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
          <option value="" hidden>{teamScore}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
      </span>
    );
  }
  renderCustomDropdown10(scoreType, teamScore, i){
    return(
      <span className="custom-dropdown">
        <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
          <option value="" hidden>{teamScore}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </span>
    );
  }
  renderScore(i){
    return(
      <div className="main-content-wrapper">
        <Container className="main-container" fluid={true}>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">DESIGN - 30 Pts:</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">1. UI/UX: Is the app easy to use and understand? Does it have an intuitive feel as to
              how the app works and what to do next?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("dscore1", this.props.teams[i].dscore1, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">2. Do the graphics have a cohesive look?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("dscore2", this.props.teams[i].dscore2, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">FUNCTIONALITY - 30 Pts:</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">1. How usable is the app? Are there any bugs/issues that are noticeable?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("fscore1", this.props.teams[i].fscore1, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">2. Are there features of the app that make it stand out and add technical
              sophistication?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("fscore2", this.props.teams[i].fscore2, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">THEME - 30 Pts:</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">1. How well does this app meet the Social Justice: Environment theme?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("tscore1", this.props.teams[i].tscore1, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content">2. How creative/unique is this application compared to others?<small> - 15 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown15("tscore2", this.props.teams[i].tscore2, i)}
            </Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">PRESENTATION - 10 Pts:</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={10}><p className="main-content last">1. How well was the on-stage presentation of the app by the team?<small> - 10 Pts</small></p></Col>
            <Col className="main-content-col" sm={2}>
              {this.renderCustomDropdown10("pscore1", this.props.teams[i].pscore1, i)}
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
  renderOverview(i){
    var overview = [];
    overview.push(
      <div className="main-content-wrapper">
        <Container className="main-container" fluid={true}>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">App name</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content">{this.props.teams[i].appName}</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">App Description</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content">{this.props.teams[i].appDescription}</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">MOBILE APPLICATION REQUIREMENTS:</p></Col>
          </Row>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content last">1. Application must be designed by AppJam+ students and be unique.
              Stealing/Copying other ideas/methods is not acceptable.<br></br>
              2. Application must compile and be error free. Bugs are OK (although not
              recommended).<br></br>
              3. Application must meet the theme of Social Justice: Environment.<br></br>
              4. Application must partly include original graphics designed/created by AppJam+
              students.</p></Col>
          </Row>
        </Container>
      </div>
    );
    return overview;
  }
  renderTabPane(){
    var teamPane = [];
    for (var i = 0; i<this.props.teams.length; i++){
      teamPane.push(
        <Tab.Pane eventKey={i}>
          <Container className="pane-container"fluid={true}>
            <Row className="main-row">
              <Col className="main-col" sm={true}><h1 className="main-header">Team name - {this.props.teams[i].teamName}</h1></Col>
            </Row>
            <Row className="main-row">
              <Col className="main-col" sm={6}>
                <button className="pane-tab"type="button" onClick={this.onScore}>Score</button>
                <button className="pane-tab"type="button" onClick={this.onOverview}>Overview</button>
              </Col>
              <Col className="main-col" sm={3}>
              </Col>
              <Col className="main-col" sm={2}><div className="total-score">Total: {this.props.teams[i].totalScore}/100</div></Col>
              <Col className="main-col" sm={1}></Col>
            </Row>
            {this.state.onOverview && this.renderOverview(i)}
            {this.state.onScore && this.renderScore(i)}
          </Container>
        </Tab.Pane>
      );
    }
    return teamPane;
  }

  render(){
    return(
      <Tab.Container id="left-tabs" defaultActiveKey="0">
        <Row className="main-row">
          <Col className="main-col left"sm={2}>
            <img className="main-logo" src={require('../assets/logo.png')}></img>
            <h1 className="main-menu-label">Teams</h1>
            <Nav variant="pills" className="flex-column">
              {this.renderTeamTab()}
              <Nav.Item>
                <Nav.Link onClick={this.handleSubmit}>Submit</Nav.Link>
                <Nav.Link onClick={this.handleSignOut}>Sign Out</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="main-col"sm={10}>
            <Tab.Content>
              {this.renderTabPane()}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

// export {Main};
export default MainPage;

