import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
require('../eventpage.css');
import fire from './Firebase/firebase';
var Team = require('./Firebase/data/team');
import MainPage from './MainPage';

class EventPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      eventName: "",
      errorMsg: "",
      teams: null
    };
    this.db = fire.firestore();
  }
  onEventChange(e) {
    this.setState({ eventName: e.target.value });
  }
  onEnterEvent() {
    // e.preventDefault();
    var judgeEmail = this.props.judgeEmail;
    if (this.state.eventName != "") {
      var judgeRef = this.db.collection(this.state.eventName).doc('judges');
      judgeRef.get().then(function (doc) {
        if (doc.exists) {
          var teamList = [];
          var imIn = false;
          for (var x in doc.data()) {
            if (doc.data()[x].email == judgeEmail) {
              teamList = [];
              var imIn = true;
              var judgeName = doc.data()[x].name;
              for (var y in doc.data()[x].teams) {
                var temp = new Team(doc.data()[x].teams[y].teamName, doc.data()[x].teams[y].appName, doc.data()[x].teams[y].appDescription, judgeName);
                teamList.push(temp);
              }
            } else if (imIn == false) {
              teamList = ["You are not in this event"];
            }
          }
          return teamList;
        } else {
          return "No such event";
        }
      }).then(result => {
        if (result == "No such event") {
          this.setState({ errorMsg: result });
        } else {
          if (result[0] == "You are not in this event") {
            this.setState({ errorMsg: result[0] });
          } else if (result.length == 0) {
            this.setState({ errorMsg: "You have no assigned teams yet" })
          } else {
            this.setState({ teams: result });
          }
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });
    } else {
      this.setState({ errorMsg: "Please enter an event name" });
    }
  }
  onLogout() {
    fire.auth().signOut();
  }
  displayError() {
    return (
      <div><p className="event-error">{this.state.errorMsg}</p></div>
    );
  }
  render() {
    return (
      <Container className="event-container" fluid={true}>
        {(this.state.teams == null) &&
        <div className="e-wrapper">
          <div className="event-logo-div"><img className="event-logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img></div>
          <div className="event-content">
            <p className="event-header">Tell us which event you are attending</p>
            <Row>
              <Col>
                <input className="event-input" type="text" name="eventName" placeholder="Event Name" onChange={this.onEventChange.bind(this)} />
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state.errorMsg != "" && this.displayError()}
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="event-btn" type="button" onClick={(e) => this.onEnterEvent()}>Enter</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="event-btn last" type="button" onClick={(e) => this.onLogout()}>Log Out</button>
              </Col>
            </Row>
          </div>
        </div>
          
        }
        {(this.state.teams != null && this.state.teams.length != 0) && <MainPage teams={this.state.teams}></MainPage>}
      </Container>
    );
  }
}
export default EventPage;
