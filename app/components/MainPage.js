// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Tab from 'react-bootstrap/Tab';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// require('../mainpage.css');
// import greenchc from '../assets/green-check.png';
// var swal = require('sweetalert');
// import fire from './Firebase/firebase';
// import * as firebase from 'firebase/app';

// class MainPage extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       totalScore: 0,
//       alert: null,
//       onOverview: false,
//       onScore: true,
//       allTeam: [],
//       onShowPresentation: false,
//       presentationScore: {}
//                 };
//     this.handleSignOut = this.handleSignOut.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.onOverview = this.onOverview.bind(this);
//     this.onScore = this.onScore.bind(this);
//     this.renderOverview = this.renderOverview.bind(this);
//     this.onScoreChange = this.onScoreChange.bind(this);
//     this.onPresentationSubmit = this.onPresentationSubmit.bind(this);
//     this.db = fire.firestore();
//     this.getTeamData = this.getTeamData.bind(this);
//     this.renderPresentationScore = this.renderPresentationScore.bind(this);
//     this.onPresentationScoreChange = this.onPresentationScoreChange.bind(this);
//   }
//   // Control Score Tab
//   onScore(){
//     this.setState({onScore: true});
//     this.setState({onOverview: false});
//   }
//   // Control Overview Tab
//   onOverview(){
//     this.setState({onScore: false});
//     this.setState({onOverview: true});
//   }
//   // Set the score of the team object
//   onScoreChange(i, scoretype, e){
//     this.props.teams[i].setScore(scoretype, parseInt(e.target.value));
//     this.setState({totalScore: this.props.teams[i].totalScore});
//     // Check if all score fields are complete
//     var cmkrs = document.getElementsByClassName("checkmarks");
//     if (this.props.teams[i].isScoreComplete()){
//         cmkrs[i].src =  greenchc;
//     }
//   }
//   // Submit score, pop up window to prevent error
//   handleSubmit(){
//     for (var i=0; i < this.props.teams.length; i++){
//       if (!this.props.teams[i].isScoreComplete()){
//         swal({
//           title: "You cannot submit scores",
//           text: "You have some unfinished score field",
//           icon: "warning",
//           button: true,
//         })
//       }else{
//         swal({
//           title: "Are you sure to submit all the teams' score?",
//           text: "Once submitted, you will not be able to modify any scores!",
//           icon: "warning",
//           buttons: true,
//           dangerMode: true,
//         })
//         .then((willSubmit) => {
//           if (willSubmit) {
//             swal("Score Submitted!", {
//               icon: "success",
//             });
//             for (var x in this.props.teams) {
//               var temp = {
//                 judgeName: this.props.teams[x].judgeName,
//                 dscore1: this.props.teams[x].dscore1,
//                 dscore2: this.props.teams[x].dscore1,
//                 fscore1: this.props.teams[x].fscore1,
//                 fscore2: this.props.teams[x].fscore2,
//                 tscore1: this.props.teams[x].tscore1,
//                 tscore2: this.props.teams[x].tscore2,
//                 pscore1: this.props.teams[x].fscore1,
//                 totalScore: this.props.teams[x].totalScore
//               }
//               var teamName = this.props.teams[x].teamName;
//               var stringof = teamName + ".scores." + this.props.teams[x].judgeName;
//               var teamRef = this.db.collection(this.props.eventName).doc('teams');
//               teamRef.update({
//                 [stringof]: temp
//               })
//               .then(function () {
//                 console.log("Document successfully updated!");
//               });
//             }
//           } else {
//             swal("Scores are not submitted!");
//           }
//         });
//       }
//     }
//   }
//   handleSignOut() {
//     fire.auth().signOut();
//   }
//   renderTeamTab(){
//     var teamCol = [];
//     for (var i = 0; i < this.props.teams.length; i++){
//       teamCol.push(
//         <Nav.Item>
//           <Nav.Link eventKey={i} >{this.props.teams[i].teamName}<img id="checkmark"className="checkmarks" src={require('../assets/gray-check.png')}></img></Nav.Link>
//         </Nav.Item>
//       );
//     }
//     return teamCol;
//   }
//   renderCustomDropdown15(scoreType, teamScore, i){
//     return(
//       <span className="custom-dropdown">
//         <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
//           <option value="" hidden>{teamScore}</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//           <option value="10">10</option>
//           <option value="11">11</option>
//           <option value="12">12</option>
//           <option value="13">13</option>
//           <option value="14">14</option>
//           <option value="15">15</option>
//         </select>
//       </span>
//     );
//   }
//   renderCustomDropdown10(scoreType, teamScore, i){
//     return(
//       <span className="custom-dropdown">
//         <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
//           <option value="" hidden>{teamScore}</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//           <option value="10">10</option>
//         </select>
//       </span>
//     );
//   }
//   renderScore(i) {
//     return(
//       <div className="main-content-wrapper">
//         <p className="judge-name">Judge name: {this.props.teams[0].judgeName}</p>
//         <Container className="main-container" fluid={true}>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">DESIGN - 30 Pts:</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">1. UI/UX: Is the app easy to use and understand? Does it have an intuitive feel as to
//               how the app works and what to do next?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("dscore1", this.props.teams[i].dscore1, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">2. Do the graphics have a cohesive look?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("dscore2", this.props.teams[i].dscore2, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">FUNCTIONALITY - 30 Pts:</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">1. How usable is the app? Are there any bugs/issues that are noticeable?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("fscore1", this.props.teams[i].fscore1, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">2. Are there features of the app that make it stand out and add technical
//               sophistication?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("fscore2", this.props.teams[i].fscore2, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">THEME - 30 Pts:</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">1. How well does this app meet the Social Justice: Environment theme?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("tscore1", this.props.teams[i].tscore1, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content">2. How creative/unique is this application compared to others?<small> - 15 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown15("tscore2", this.props.teams[i].tscore2, i)}
//             </Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">PRESENTATION - 10 Pts:</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={10}><p className="main-content last">1. How well was the on-stage presentation of the app by the team?<small> - 10 Pts</small></p></Col>
//             <Col className="main-content-col" sm={2}>
//               {this.renderCustomDropdown10("pscore1", this.props.teams[i].pscore1, i)}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );

//   }
//   renderOverview(i){
//     var overview = [];
//     overview.push(
//       <div className="main-content-wrapper">
//         <Container className="main-container" fluid={true}>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">App name</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content">{this.props.teams[i].appName}</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">App Description</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content">{this.props.teams[i].appDescription}</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">MOBILE APPLICATION REQUIREMENTS:</p></Col>
//           </Row>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}>
//               <ol type="i" className="main-list">
//                 <li > Application must be designed by AppJam+ students and be unique.
//                   Stealing/Copying other ideas/methods is not acceptable.</li>
//                 <li> Application must compile and be error free. Bugs are OK (although not
//                   recommended).</li>
//                 <li> Application must meet the theme of Social Justice: Environment.</li>
//                 <li>Application must partly include original graphics designed/created by AppJam+
//                   students.</li>
//               </ol>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//     return overview;
//   }
//   renderTabPane() {
//     var teamPane = [];
//     for (var i = 0; i<this.props.teams.length; i++){
//       teamPane.push(
//         <Tab.Pane eventKey={i}>
//           <Container className="pane-container"fluid={true}>
//             <Row className="main-row top">
//               <Col className="main-col" sm={true}><h1 className="main-header">Team name - {this.props.teams[i].teamName}</h1></Col>
//             </Row>
//             <Row className="main-row top">
//               <Col className="main-col" sm={6}>
//                 <button className="pane-tab"type="button" onClick={this.onScore}>Score</button>
//                 <button className="pane-tab"type="button" onClick={this.onOverview}>Overview</button>
//               </Col>
//               <Col className="main-col" sm={3}>
//               </Col>
//               <Col className="main-col" sm={2}><div className="total-score">Total: {this.props.teams[i].totalScore}/100</div></Col>
//               <Col className="main-col" sm={1}></Col>
//             </Row>
//             {this.state.onOverview && this.renderOverview(i)}
//             {this.state.onScore && this.renderScore(i)}
//           </Container>
//         </Tab.Pane>
//       );
//     }
//     var presentation = 
//       <Tab.Pane eventKey="presentation">
//         <Container className="pane-container" fluid={true}>
//           <Row className="main-row top">
//             <Col className="main-col" sm={true}><h1 className="main-header">Stage presentation scores</h1></Col>
//           </Row>
//           <Row className="main-row top">
//             <Col className="main-col" sm={6}>
//               <button className="pane-tab" type="button" onClick={(e)=> this.onPresentationSubmit(e)}>Submit</button>
//             </Col>
//             <Col className="main-col" sm={3}>
//             </Col>
//             {/* <Col className="main-col" sm={2}><div className="total-score">Total: {this.props.teams[i].totalScore}/100</div></Col> */}
//             <Col className="main-col" sm={3}></Col>
//           </Row>
//           {this.state.onShowPresentation && this.renderPresentationScore()}
//         </Container>
//       </Tab.Pane>
//     teamPane.push(presentation);
//     return teamPane;
//   }
//   onPresentationScoreChange(teamName, e) {
//     var copyData = this.state.presentationScore;
//     copyData[teamName] = parseInt(e.target.value);
//     this.setState({ presentationScore: copyData });
//   }
  
//   renderPresentationDropDown(teamName) {
//     return (
//       <span className="custom-dropdown">
//         <select required onChange={(e) => this.onPresentationScoreChange(teamName, e)}>
//           {/* <option value="" hidden></option> */}
//           <option value="0">0</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//           <option value="9">9</option>
//           <option value="10">10</option>
//         </select>
//       </span>
//     )
//   }
//   renderPresentationScore() {
//     var temp = [];
//     for (var x in this.state.allTeam) {
//       temp.push(<Col className="main-content-col" sm={10}><p className="main-content">{this.state.allTeam[x]}</p></Col>, <Col className="main-content-col" sm={2}>{this.renderPresentationDropDown(this.state.allTeam[x])}</Col>);
//     }
//     return(
//       <div className="main-content-wrapper">
//         <Container className="main-container presentation" fluid={true}>
//           <Row className="main-content-row">
//             <Col className="main-content-col" sm={true}><p className="main-content-header">Please enter presentation scores for each team and click submit button above</p></Col>
//           </Row>
//           <Row className="main-content-row">{temp}</Row>
//         </Container>
//       </div>
//     )
//   }
//   onPresentationSubmit() {
//     var size = Object.keys(this.state.presentationScore).length;
//     if (size != this.state.allTeam.length) {
//       swal({
//         title: "You cannot submit presentation scores",
//         text: "You have some unfinished score field",
//         icon: "warning",
//         button: true,
//       })

//     } else {
//       swal({
//         title: "Are you sure to submit all the teams' presentationn score?",
//         text: "Once submitted, you will not be able to modify any scores!",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       })
//         .then((willSubmit) => {
//           if (willSubmit) {
//             swal("Score Submitted!", {
//               icon: "success",
//             });
//             for (const [key, value] of Object.entries(this.state.presentationScore)) {
//               // var temp = {
//               //   judgeName: this.props.teams[0].judgeName,
//               //   presentationScore: value
//               // }
//               // console.log("temp", temp);
//               var teamName = key;
//               var stringof = teamName + ".presentationScores." + this.props.teams[0].judgeName;
//               var teamRef = this.db.collection(this.props.eventName).doc('teams');
//               teamRef.update({
//                 [stringof]: value
//               })
//                 .then(function () {
//                   console.log("presentation scores successfully updated!");
//                 });
//             }
//           } else {
//             swal("Scores are not submitted!");
//           }
//         });
      
//     }

//   }
//   getTeamData() {
//     console.log("calling get team data", this.props.eventName);
    
//     var teamRef = this.db.collection(this.props.eventName).doc('teams');
//     teamRef.get().then(function (doc) {
//       if (doc.exists) {
//         var allTeam = [];
//         for (var t in doc.data()) {
//           if (doc.data()[t].teamName != undefined) {
//             allTeam.push(doc.data()[t].teamName);
//           }
//         }
//         return allTeam;
//       }
//     }).then(allTeam => {
//       console.log("all team names: ", allTeam);
//       this.setState({ allTeam: allTeam, onShowPresentation: true });
//     }).catch(function (error) {
//       console.log("Error getting document:", error);
//     });
//   }

//   render(){
//     return(
//       <Tab.Container id="left-tabs" defaultActiveKey="0">
//         <Row className="main-row">
//           <Col className="main-col left"sm={3} lg={2} xl={1}>
//             <img className="main-logo" src={require('../assets/logo.png')}></img>
//             <h1 className="main-menu-label">Teams</h1>
//             <Nav variant="pills" className="flex-column">
//               {this.renderTeamTab()}
//               <Nav.Item>
//                 <Nav.Link eventKey="presentation" onClick={this.getTeamData}>Presentation Score</Nav.Link>
//                 <Nav.Link onClick={this.handleSubmit}>Submit</Nav.Link>
//                 <Nav.Link onClick={this.handleSignOut}>Sign Out</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>

//           <Col className="main-col" sm={9} lg={10} xl={11}>
//             <Tab.Content>
//               {this.renderTabPane()}
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     );
//   }
// }

// export default MainPage;

import React from 'react';
import Container from 'react-bootstrap/Container';
// import NumericInput from 'react-numeric-input';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
require('../mainpage.css');
import greenchc from '../assets/green-check.png';
var swal = require('sweetalert');
import fire from './Firebase/firebase';
import * as firebase from 'firebase/app';

// actually used
function myBasicFormat(num) {
  if (num > 15) {
    num = 15;
    return num;
  }

  else if (num < 0) {
    num = 0;
    return num;
  }

  return num;
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      alert: null,
      onOverview: false,
      onScore: true,
      allTeam: [],
      onShowPresentation: false,
      presentationScore: {}
    };
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
    this.renderOverview = this.renderOverview.bind(this);
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onPresentationSubmit = this.onPresentationSubmit.bind(this);
    this.db = fire.firestore();
    this.getTeamData = this.getTeamData.bind(this);
    this.renderPresentationScore = this.renderPresentationScore.bind(this);
    this.onPresentationScoreChange = this.onPresentationScoreChange.bind(this);
  }
  // Control Score Tab
  onScore() {
    this.setState({ onScore: true });
    this.setState({ onOverview: false });
  }
  // Control Overview Tab
  onOverview() {
    this.setState({ onScore: false });
    this.setState({ onOverview: true });
  }
  // NumericInput cannot identify event when using onClick, need to use onInput to pass event 
  //  to onBoxScoreChange; call onScoreChange with same parameters
  onBoxScoreChange(i, scoretype, e) {
    var i_temp = i;
    var scoretype_temp = scoretype;
    var e_temp = e;
    if (this.state.debugBool) {
      console.log('passing to onScoreChange()');
    }

    this.onScoreChange(i_temp, scoretype_temp, e_temp);
  }
  // Set the score of the team object
  onScoreChange(i, scoretype, e) {
    this.props.teams[i].setScore(scoretype, parseInt(e.target.value));
    this.setState({ totalScore: this.props.teams[i].totalScore });
    // Check if all score fields are complete
    var cmkrs = document.getElementsByClassName("checkmarks");

    if (this.props.teams[i].isScoreComplete()) {
      cmkrs[i].src = greenchc;
    }

    for (var i = 0; i < this.props.teams.length; i++) {
      for (var x in this.props.teams) {
        var temp = {
          judgeName: this.props.teams[x].judgeName,
          dscore1: this.props.teams[x].dscore1,
          dscore2: this.props.teams[x].dscore2,
          fscore1: this.props.teams[x].fscore1,
          fscore2: this.props.teams[x].fscore2,
          tscore1: this.props.teams[x].tscore1,
          tscore2: this.props.teams[x].tscore2,
          totalScore: this.props.teams[x].totalScore
        }
        var teamName = this.props.teams[x].teamName;
        var stringof = teamName + ".scores." + this.props.teams[x].judgeName;
        var teamRef = this.db.collection(this.props.eventName).doc('teams');
        teamRef.update({
          [stringof]: temp
        })
        console.log("Updated temp scores");
      }
    }

  }

  // Submit score, pop up window to prevent error
  handleSubmit() {
    for (var i = 0; i < this.props.teams.length; i++) {
      if (!this.props.teams[i].isScoreComplete()) {
        swal({
          title: "You cannot submit scores.",
          text: "You have at least one unfinished score field",
          icon: "warning",
          button: true,
        })
      } else {
        swal({
          title: "Are you sure you want to submit all teams' scores?",
          text: "Once submitted, you will not be able to modify any scores.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willSubmit) => {
            if (willSubmit) {
              swal("Score Submitted!", {
                icon: "success"
              });
              // this.setState({isSubmitted: true})
              for (var x in this.props.teams) {
                var temp = {
                  judgeName: this.props.teams[x].judgeName,
                  dscore1: this.props.teams[x].dscore1,
                  dscore2: this.props.teams[x].dscore2,
                  fscore1: this.props.teams[x].fscore1,
                  fscore2: this.props.teams[x].fscore2,
                  tscore1: this.props.teams[x].tscore1,
                  tscore2: this.props.teams[x].tscore2,
                  pscore: this.props.teams[x].pscore,
                  totalScore: this.props.teams[x].totalScore
                }
                var teamName = this.props.teams[x].teamName;
                var stringof = teamName + ".scores." + this.props.teams[x].judgeName;
                var teamRef = this.db.collection(this.props.eventName).doc('teams');
                teamRef.update({
                  [stringof]: temp
                })
                  .then(function () {
                    console.log("Document successfully updated!");
                  });
              }
            } else {
              swal("Scores are not submitted!");
            }
          });
      }
    }
  }
  handleSignOut() {
    console.log('clicked signout button');
    swal({
      title: "Are you sure?",
      text: "Signing out without having filled out your scores will not submit them for you.",
      icon: "warning",
      buttons: ["Cancel", "Sign out"],
      dangerMode: true,
    })
      .then((value) => {
        if (value) {
          swal("Signed out", {
            icon: "success",
          });

          fire.auth().signOut();

        } else {
          swal("Your session continues, weary one.");
        }
      });
  }

  renderTeamTab() {
    var teamCol = [];
    for (var i = 0; i < this.props.teams.length; i++) {
      teamCol.push(
        <Nav.Item>
          <Nav.Link eventKey={i} >{this.props.teams[i].teamName}<img id="checkmark" className="checkmarks" src={require('../assets/gray-check.png')}></img></Nav.Link>
        </Nav.Item>
      );
    }
    return teamCol;
  }

  renderNumInputField(scoreType, teamScore, i, disable) {
    if (this.state.debugBool == true) {
      // console.log('in renderNumInputField()');

    }

    var passedScore = '';

    if (scoreType == 'dscore1') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].dscore1;
    }
    else if (scoreType == 'dscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].dscore2;
    }
    else if (scoreType == 'fscore1') {
      if (this.state.debudebugBoolgbool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].fscore1;
    }
    else if (scoreType == 'fscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].fscore2;
    }
    else if (scoreType == 'tscore1') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].tscore1;
    }
    else if (scoreType == 'tscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].tscore2;
    }
    else { console.log('scoreType was passed as ', scoreType, ' in renderNumInputField()'); }

    if ((this.state.debugBool == true)) {
      console.log('in rCD1()');
      console.log('parameters passed:');
      console.log('scoreType and type: ', scoreType, typeof (scoreType));
      console.log('teamScore: ', teamScore);
      console.log('i: ', i);
      // console.log('dscore1:   ', this.props.teams[i].dscore1);
      console.log('passedScore: ', passedScore);
      console.log(' ')
    }

    return (
      <NumericInput
        // onInput={(e) => this.onBoxScoreChange(i, scoreType, e)}
        min={0}
        value={passedScore}
        max={15}
        step={1}
        size="2"
        disabled={false}
        mobile
        format={myBasicFormat}
        onInput={e =>
          this.onBoxScoreChange(
            i, scoreType, e)
        }
        style={{
          wrap: {
            background: '#E2E2E2',
            boxShadow: '0 0 1px 1px #fff inset, 1px 1px 5px -1px #000',
            padding: '2px 2.26ex 2px 2px',
            borderRadius: '6px 3px 3px 6px',
            fontSize: '32'
          },
          input: {
            borderRadius: '4px 2px 2px 4px',
            // color: '#988869',
            padding: '0.1ex 1ex',
            border: '1px solid #ccc',
            marginRight: '4',
            display: 'block',
            fontWeight: '100',
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
          }
        }}>{}
      </NumericInput>
    );
  }

  renderCustomDropdown15(scoreType, teamScore, i) {
    var passedScore = '';

    if (scoreType == 'dscore1') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].dscore1;
    }
    else if (scoreType == 'dscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].dscore2;
    }
    else if (scoreType == 'fscore1') {
      if (this.state.debudebugBoolgbool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].fscore1;
    }
    else if (scoreType == 'fscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].fscore2;
    }
    else if (scoreType == 'tscore1') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].tscore1;
    }
    else if (scoreType == 'tscore2') {
      if (this.state.debugBool) { console.log(scoreType, 'passed as scoretype in renderNumInputField()'); }
      passedScore = this.props.teams[i].tscore2;
    }
    else { console.log('scoreType was passed as ', scoreType, ' in renderNumInputField()'); }

    if ((this.state.debugBool == true)) {
      console.log('in rCD1()');
      console.log('parameters passed:');
      console.log('scoreType and type: ', scoreType, typeof (scoreType));
      console.log('teamScore: ', teamScore);
      console.log('i: ', i);
      // console.log('dscore1:   ', this.props.teams[i].dscore1);
      console.log('passedScore: ', passedScore);
      console.log(' ')
    }

    return (
      <span className="custom-dropdown">
        <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
          <option value="" hidden>{passedScore}</option>
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

  renderCustomDropdown10(scoreType, teamScore, i) {
    return (
      <span className="custom-dropdown">
        <select required onChange={(e) => this.onScoreChange(i, scoreType, e)}>
          <option value="">{teamScore}</option>
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
  renderScore(i) {
    return (
      <div style={{ backgroundColor: "#d9dded" }}>
        <div className="main-content-wrapper">
          <p className="judge-name">Judge name: {this.props.teams[0].judgeName}</p>
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
            </Row>
            <Row className="main-content-row">
            </Row>
          </Container>
        </div>
        <button className="pane-tab"
          type="button"
          style={{
            marginLeft: "80%",
            backgroundColor: "#4156A6",
            color: "#FFFFFF",
            padding: "10px",
            borderRadius: "20%"
          }}
          onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );

  }
  renderOverview(i) {
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
            <Col className="main-content-col" sm={true}>
              <ol type="i" className="main-list">
                <li > Application must be designed by AppJam+ students and be unique.
                  Stealing/Copying other ideas/methods is not acceptable.</li>
                <li> Application must compile and be error free. Bugs are OK (although not
                  recommended).</li>
                <li> Application must meet the theme of Social Justice: Environment.</li>
                <li>Application must partly include original graphics designed/created by AppJam+
                  students.</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
    );
    return overview;
  }
  renderTabPane() {
    var teamPane = [];
    for (var i = 0; i < this.props.teams.length; i++) {
      teamPane.push(
        <Tab.Pane eventKey={i}>
          <Container className="pane-container" fluid={true}>
            <Row className="main-row top">
              <Col className="main-col" sm={true}><h1 className="main-header">Team name - {this.props.teams[i].teamName}</h1></Col>
            </Row>
            <Row className="main-row top">
              <Col className="main-col" sm={6}>
                <button className="pane-tab" type="button" onClick={this.onScore}>Score</button>
                <button className="pane-tab" type="button" onClick={this.onOverview}>Overview</button>
              </Col>
              <Col className="main-col" sm={3}>
              </Col>
              <Col className="main-col" sm={2}><div className="total-score">Total: {this.props.teams[i].totalScore}/90</div></Col>
              <Col className="main-col" sm={1}></Col>
            </Row>
            {this.state.onOverview && this.renderOverview(i)}
            {this.state.onScore && this.renderScore(i)}
          </Container>
        </Tab.Pane>
      );
    }
    var presentation =
      <Tab.Pane eventKey="presentation">
        <Container className="pane-container" fluid={true}>
          <Row className="main-row top">
            <Col className="main-col" sm={true}><h1 className="main-header">Stage presentation scores</h1></Col>
          </Row>
          <Row className="main-row top">
            <Col className="main-col" sm={6}>
              {/* <button className="pane-tab" type="button" onClick={(e) => this.onPresentationSubmit(e)}>Submit</button> */}
            </Col>
            <Col className="main-col" sm={3}>
            </Col>
            {/* <Col className="main-col" sm={2}><div className="total-score">Total: {this.props.teams[i].totalScore}/100</div></Col> */}
            <Col className="main-col" sm={3}></Col>
          </Row>
          {this.state.onShowPresentation && this.renderPresentationScore()}
        </Container>
      </Tab.Pane>
    teamPane.push(presentation);
    return teamPane;
  }
  onPresentationScoreChange(teamName, e) {
    var copyData = this.state.presentationScore;
    copyData[teamName] = parseInt(e.target.value);
    this.setState({ presentationScore: copyData });
  }

  renderPresentationDropDown(teamName) {
    return (
      <span className="custom-dropdown">
        <select required onChange={(e) => this.onPresentationScoreChange(teamName, e)}>
          <option value="" hidden>{this.props.teams.teamName}</option>
          <option value="0">0</option>
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
    )
  }
  renderPresentationScore() {
    var temp = [];
    for (var x in this.state.allTeam) {
      temp.push(<Col className="main-content-col" sm={10}><p className="main-content">{this.state.allTeam[x]}</p></Col>, <Col className="main-content-col" sm={2}>{this.renderPresentationDropDown(this.state.allTeam[x])}</Col>);
    }
    return (
      <div className="main-content-wrapper">
        <Container className="main-container presentation" fluid={true}>
          <Row className="main-content-row">
            <Col className="main-content-col" sm={true}><p className="main-content-header">Please enter presentation scores for each team and click submit button below</p></Col>
          </Row>
          <Row className="main-content-row">{temp}</Row>
          <button className="pane-tab"
          type="button"
          style={{
            marginLeft: "80%",
            backgroundColor: "#4156A6",
            color: "#FFFFFF",
            padding: "10px",
            borderRadius: "20%"
          }}
          onClick={(e) => this.onPresentationSubmit(e)}>Submit</button>
        </Container>
      </div>
    )
  }
  onPresentationSubmit() {
    var size = Object.keys(this.state.presentationScore).length;
    if (size != this.state.allTeam.length) {
      swal({
        title: "You cannot submit presentation scores",
        text: "You have some unfinished score field",
        icon: "warning",
        button: true,
      })

    } else {
      swal({
        title: "Are you sure to submit all the teams' presentation scores?",
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
            for (const [key, value] of Object.entries(this.state.presentationScore)) {
              // var temp = {
              //   judgeName: this.props.teams[0].judgeName,
              //   presentationScore: value
              // }
              // console.log("temp", temp);
              var teamName = key;
              var stringof = teamName + ".presentationScores." + this.props.teams[0].judgeName;
              var teamRef = this.db.collection(this.props.eventName).doc('teams');
              teamRef.update({
                [stringof]: value
              })
                .then(function () {
                  console.log("presentation scores successfully updated!");
                });
            }
          } else {
            swal("Scores are not submitted!");
          }
        });

    }

  }
  getTeamData() {
    console.log("calling get team data", this.props.eventName);

    var teamRef = this.db.collection(this.props.eventName).doc('teams');
    teamRef.get().then(function (doc) {
      if (doc.exists) {
        var allTeam = [];
        for (var t in doc.data()) {
          if (doc.data()[t].teamName != undefined) {
            allTeam.push(doc.data()[t].teamName);
          }
        }
        return allTeam;
      }
    }).then(allTeam => {
      console.log("all team names: ", allTeam);
      this.setState({ allTeam: allTeam, onShowPresentation: true });
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    return (
      <Tab.Container id="left-tabs" defaultActiveKey="0">
        <Row className="main-row">
          <Col className="main-col left" sm={3} lg={2} xl={1}>
            <img className="main-logo" src={require('../assets/logo.png')}></img>
            <h1 className="main-menu-label">Teams</h1>
            <Nav variant="pills" className="flex-column">
              {this.renderTeamTab()}
              <Nav.Item>
                <Nav.Link eventKey="presentation" onClick={this.getTeamData}>Presentation Score</Nav.Link>
                {/*<Nav.Link onClick={this.handleSubmit}>Submit</Nav.Link>*/}
                <Nav.Link type="button"
                  onClick={this.handleSignOut}
                  style={{
                    color: "#4156A6",
                    marginTop: "250%",
                    backgroundColor: "#d9dded",
                    borderRadius: "20px"
                    /*padding: "2px"*/
}}>
                  Sign Out
                          </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="main-col" sm={9} lg={10} xl={11}>
            <Tab.Content>
              {this.renderTabPane()}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default MainPage;

