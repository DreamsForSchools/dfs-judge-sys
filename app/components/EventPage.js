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
    this.getTeamData = this.getTeamData.bind(this);
  }
  onEventChange(e) {
    this.setState({ eventName: e.target.value });
  }
  getTeamData(teamList) {
    var judgeName = teamList[0].judgeName;
    console.log("judgeName: ", judgeName);
    var teamRef = this.db.collection(this.state.eventName).doc('teams');
    teamRef.get().then(function (doc) {
      if (doc.exists) {
        for (var t in doc.data()) {
          if (t != 'irrelevant') {
            for (var s in doc.data()[t]['scores']) {
              if (s == judgeName) {
                for (let b = 0; b < teamList.length; b++) {
                  if (t == teamList[b].teamName) {
                    teamList[b].dscore1 = doc.data()[t]['scores'][s].dscore1;
                    teamList[b].dscore2 = doc.data()[t]['scores'][s].dscore1;
                    teamList[b].fscore1 = doc.data()[t]['scores'][s].fscore1;
                    teamList[b].fscore2 = doc.data()[t]['scores'][s].fscore2;
                    teamList[b].tscore1 = doc.data()[t]['scores'][s].tscore1;
                    teamList[b].tscore2 = doc.data()[t]['scores'][s].tscore2;
                  }
                }
              }
            }
          }
        }
        console.log("getTeam", teamList);
        // this.setState({ teams: this.state.teams });
        return teamList;
      }
    }).then(teamList => {
      this.setState({ teams: teamList });
    });
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
            if (doc.data()[x].email != undefined) {
              var e = doc.data()[x].email;
              var lowerCaseEmail = e.toLowerCase();
              if (lowerCaseEmail == judgeEmail) {
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
            console.log("result: ", result)
            this.setState({ teams: result });
            var scoreList = this.getTeamData(this.state.teams);
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
        {(this.state.teams != null && this.state.teams.length != 0) && <MainPage teams={this.state.teams} eventName={this.state.eventName}></MainPage>}
      </Container>
    );
  }
}
export default EventPage;
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// require('../eventpage.css');
// import fire from './Firebase/firebase';
// var Team = require('./Firebase/data/team');
// import MainPage from './MainPage';

// class EventPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       eventName: "",
//       errorMsg: "",
//       teams: null
//     };
//     this.db = fire.firestore();
//   }
//   onEventChange(e) {
//     this.setState({ eventName: e.target.value });
//   }
//   onEnterEvent() {

//     var judgeEmail = this.props.judgeEmail;
//     if (this.state.eventName != "") {
//       var judgeRef = this.db.collection(this.state.eventName).doc('judges');
//       var teamRef = this.db.collection(this.state.eventName).doc('teams');
//       var dbRef = this.db.collection(this.state.eventName);

//       console.log('judgeRef alone: ', judgeRef);


//       //////////////////
//       dbRef.get().then(function (doc) {
//         console.log('doc in dbref.get()', doc);
//         // console.log('calling data() on doc: ', doc.data());

//         // doc.get().then(function(querySnapshot) { 
//         //   console.log('in querysnapshot');
//         // });

//         if (doc.empty) { console.log('no docs found'); }
//         else { console.log('docs found'); }

//         var data = doc.docs.map(function (documentSnapshot) {
//           console.log('documentsnapshot: ', documentSnapshot);
//           console.log('documentsnapshot.data(): ', documentSnapshot.data());
//           return documentSnapshot.data();
//         });

//         var teamList_copy = [];
//         var imIn_copy = false;

//         console.log('attempt at judgeref data in dbref.get(): ', data[0]);
//         for (var k in data[0]) {
//           console.log('k in data[0] in dbRef.get():', k, ', of type ', typeof (k));
//           console.log('data[0][k] where k = ', k, ', ', data[0][k]);
//           if (data[0][k].email != undefined) {
//             var e = data[0][k].email;
//             var lowerCaseEmail = e.toLowerCase();
//             if (lowerCaseEmail == judgeEmail) {
//               teamList_copy = [];
//               var imIn_copy = true;
//               var judgeName = data[0][k].name;
//               console.log('data[0][k].teams ', data[0][k].teams);
//               for (var y in data[0][k].teams) {
//                 console.log('data[0][k].teams[y]', data[0][k].teams[y]);
//                 // console.log('data[0][k].teams[y][\'teamName\']: ', data[0][k].teams[y]['teamName'] );
//                 var team_name = data[0][k].teams[y]['teamName'];
//                 // console.log('data[1][teamName]: ', data[1][])
//                 /*
//                 find a way to sift through judges documents, assign scores according to judgename

//                 data[0][k].teams[y] refers to, by path:
//                 data: event
//                 [0]: 0th index of event in the event collection (e.g., 0 refers to 'judges' document)
//                 [k]: kth field in 'judges' collection; as k iterates, it peeks into each judge content and has immediate
//                       access to email, name, password, and the teams{} map
//                 .teams[y] translates to accessing the data of the team 'y' where 'y' is the key to the teams{} map
//                       e.g., teams[y] where y = team1 translates to teams[team1], giving access to appDescription, appName, school, teamName


//                 given a team name, teamName, find scores by judge 'k' by looking through team document
//                 data[1][teamname][scores][judgename]
//                 ONLY if the team exists within the judge's map of teams
//                 index of 1
//                 */

//                 if (team_name in data[0][k].teams) {
//                   console.log('team ', team_name, 'found in ', data[0][k].teams);
//                 }
//                 else { console.log('team ', team_name, 'not found in ', data[0][k].teams); }


//                 console.log('data[1][team_name]', data[1][team_name]);
//                 console.log('data[1][team_name].scores', data[1][team_name].scores);
//                 console.log('data[1][team_name].scores[judgeName]', data[1][team_name].scores[judgeName]);
//                 console.log('data[1][team_name].scores[judgeName].dscore1', data[1][team_name].scores[judgeName].dscore1);
//                 console.log('data[1][team_name].scores[judgeName].dscore2', data[1][team_name].scores[judgeName].dscore2);
//                 console.log('data[1][team_name].scores[judgeName].fscore1', data[1][team_name].scores[judgeName].fscore1);
//                 console.log('data[1][team_name].scores[judgeName].fscore2', data[1][team_name].scores[judgeName].fscore2);
//                 console.log('data[1][team_name].scores[judgeName].tscore1', data[1][team_name].scores[judgeName].tscore1);
//                 console.log('data[1][team_name].scores[judgeName].tscore2', data[1][team_name].scores[judgeName].tscore2);
//                 //console.log('data[1][team_name].presentationScores[judgeName]', data[1][team_name].presentationScores[judgeName]);
//                 var td1 = data[1][team_name].scores[judgeName].dscore1;
//                 var td2 = data[1][team_name].scores[judgeName].dscore2;
//                 var tf1 = data[1][team_name].scores[judgeName].fscore1;
//                 var tf2 = data[1][team_name].scores[judgeName].fscore2;
//                 var tt1 = data[1][team_name].scores[judgeName].tscore1;
//                 var tt2 = data[1][team_name].scores[judgeName].tscore2;
//                 //var pscore = data[1][team_name].presentationScores[judgeName];
//                 var pscore = 0;
//                 var ts = data[1][team_name].scores[judgeName].totalScore;

//                 // console.log('team\'s scores by judge ', judgeName, ': ', data[1][team_name][scores][judgeName]);


//                 var temp = new Team(data[0][k].teams[y].teamName,
//                   data[0][k].teams[y].appName,
//                   data[0][k].teams[y].appDescription,
//                   judgeName,
//                   td1, td2, tf1, tf2, tt1, tt2, pscore, ts
//                   // data[1][team_name].scores[judgeName].dscore1,
//                   // data[1][team_name].scores[judgeName].dscore2,
//                   // data[1][team_name].scores[judgeName].fscore1,
//                   // data[1][team_name].scores[judgeName].fscore2,
//                   // data[1][team_name].scores[judgeName].tscore1,
//                   // data[1][team_name].scores[judgeName].tscore2,
//                   // data[1][team_name].scores[judgeName].dscore1,
//                   // data[1][team_name].scores[judgeName].totalScore_temp
//                 );

//                 console.log('temp team in onEnterEvent(): ', temp);
//                 teamList_copy.push(temp);
//               }
//             } else if (imIn_copy == false) {
//               teamList_copy = ["You are not in this event"];
//             }
//           }
//         }
//         return teamList_copy;

//       }).then(result => {
//         if (result == "No such event") {
//           this.setState({ errorMsg: result });
//         } else {
//           if (result[0] == "You are not in this event") {
//             this.setState({ errorMsg: result[0] });
//           } else if (result.length == 0) {
//             this.setState({ errorMsg: "You have no assigned teams yet" })
//           } else {
//             this.setState({ teams: result });
//           }
//         }
//       }).catch(function (error) {
//         console.log("Error getting document:", error);
//       });
//     }
//     //   // e.preventDefault();

//     //   var judgeEmail = this.props.judgeEmail;
//     //   if (this.state.eventName != "") {
//     //     var judgeRef = this.db.collection(this.state.eventName).doc('judges');
//     //     judgeRef.get().then(function (doc) {
//     //       if (doc.exists) {
//     //         var teamList = [];
//     //         var imIn = false;
//     //         for (var x in doc.data()) {
//     //           if (doc.data()[x].email != undefined) {
//     //             console.log(doc.data()[x])
//     //             var e = doc.data()[x].email;
//     //             var lowerCaseEmail = e.toLowerCase();
//     //             if (lowerCaseEmail == judgeEmail) {
//     //               teamList = [];
//     //               var imIn = true;
//     //               var judgeName = doc.data()[x].name;
//     //               for (var y in doc.data()[x].teams) {
//     //                 var temp = new Team(doc.data()[x].teams[y].teamName, doc.data()[x].teams[y].appName, doc.data()[x].teams[y].appDescription, judgeName);
//     //                 teamList.push(temp);
//     //               }
//     //             } else if (imIn == false) {
//     //               teamList = ["You are not in this event"];
//     //             }
//     //           }
//     //         }
//     //         return teamList;
//     //       } else {
//     //         return "No such event";
//     //       }
//     //     }).then(result => {
//     //       if (result == "No such event") {
//     //         this.setState({ errorMsg: result });
//     //       } else {
//     //         if (result[0] == "You are not in this event") {
//     //           this.setState({ errorMsg: result[0] });
//     //         } else if (result.length == 0) {
//     //           this.setState({ errorMsg: "You have no assigned teams yet" })
//     //         } else {
//     //           this.setState({ teams: result });
//     //         }
//     //       }
//     //     }).catch(function (error) {
//     //       console.log("Error getting document:", error);
//     //     });
//     //   } else {
//     //     this.setState({ errorMsg: "Please enter an event name" });
//     //   }
//   }
//   onLogout() {
//     fire.auth().signOut();
//   }
//   displayError() {
//     return (
//       <div><p className="event-error">{this.state.errorMsg}</p></div>
//     );
//   }
//   render() {
//     return (
//       <Container className="event-container" fluid={true}>
//         {(this.state.teams == null) &&
//           <div className="e-wrapper">
//             <div className="event-logo-div"><img className="event-logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img></div>
//             <div className="event-content">
//               <p className="event-header">Tell us which event you are attending</p>
//               <Row>
//                 <Col>
//                   <input className="event-input" type="text" name="eventName" placeholder="Event Name" onChange={this.onEventChange.bind(this)} />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   {this.state.errorMsg != "" && this.displayError()}
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <button className="event-btn" type="button" onClick={(e) => this.onEnterEvent()}>Enter</button>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <button className="event-btn last" type="button" onClick={(e) => this.onLogout()}>Log Out</button>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//         }
//         {(this.state.teams != null && this.state.teams.length != 0) && <MainPage teams={this.state.teams} eventName={this.state.eventName}></MainPage>}
//       </Container>
//     );
//   }
// }
// export default EventPage;
