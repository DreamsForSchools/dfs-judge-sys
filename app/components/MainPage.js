
import React from 'react';
require('../mainpage.css');
import {
	withRouter
} from 'react-router-dom';
var swal = require('sweetalert');
import TeamPage from './TeamPage';
// import Firebase from './Firebase/firebase';
import { FirebaseContext } from './Firebase';


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
                totalScore: 0,
                alert: null,
                prevTeamIndex:0,
                currTeamIndex: 0,
                currentclass: "team-tab",
                currentTeam: 1,
                };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTeamTab = this.createTeamTab.bind(this);
    this.handleCurrentTeam = this.handleCurrentTeam.bind(this);
    this.signOut = this.signOut.bind(this);
    this.renderTeamPage = this.renderTeamPage.bind(this);
  }
  componentDidMount(){
    console.log(this.props.teams);
  }
  // Control Overview Tab
  onOverview(){
    this.setState({onOverview: true});
    this.setState({onScore: false});
  }
  // Control Score Tab
  onScore(){
    this.setState({onScore: true});
    this.setState({onOverview: false});
  }
  // Set the score of the team object
  onScoreChange(scoretype, e){
    this.props.teams[this.state.currTeamIndex].setScore(scoretype, parseInt(e.target.value));
  }
  // Update Totoal Score after user clicking on "Save" button
  handleSave(){

    var temp = this.props.teams[this.state.currTeamIndex].totalScore;
    console.log(temp);
    this.setState({totalScore: temp});
    swal({
      title: "Score Saved!",
      text: "You still can modify any scores",
      icon: "success",
    });
  }
  // Sign out from account, go back to login page automatically 
  signOut(){
    console.log("signout");
    this.props.firebase.signOut();
  }
  // Check for whether score is complete and then Write data in Firebase when clicking "Submit"
  handleSubmit(){
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
            for (var i=0; i < this.props.teams.length; i++){
              this.props.firebase.addTeamsData(this.props.teams[i].teamname,
                this.props.teams[i].dscore1,
                this.props.teams[i].dscore2,
                this.props.teams[i].fscore1,
                this.props.teams[i].fscore2,
                this.props.teams[i].tscore1,
                this.props.teams[i].tscore2,
                this.props.teams[i].pscore1,
                this.props.teams[i].totalScore);
            }
          } else {
            swal("Scores are not submitted!");
          }
        });
      }
    }
  }
  createTeamTab(){
    var teamColumns = [];
    for (let i = 0; i < this.props.teams.length;i++){
      teamColumns.push(<button name = "this" id={i} className= "team-tab" type="button" onClick={() => this.handleCurrentTeam(i)}> Team {i+1}</button>)
    }
    // Set the className of first element in the tempColumns array to "team-tab-current"
    var first = document.getElementById("0");
    if (first != null){
      if (first.id == this.state.currTeamIndex){
        first.className = "team-tab-current";
      }
    }    
    return teamColumns;
  }
  renderTeamPage(){
    var temp =[];
    for (let i = 0; i < this.props.teams.length; i++){
      temp.push(<TeamPage team = {this.props.teams[i]}></TeamPage>);
    }
    // console.log(temp);
    return temp[this.state.currTeamIndex];
  }
  handleCurrentTeam(teamindex){
    // Record current index
    this.setState({prevTeamIndex:this.state.currTeamIndex});
    this.setState({currTeamIndex:teamindex});
    // Set the current Team tab to white background
    var btn = document.getElementById(teamindex);
    btn.className = "team-tab-current";
    // Reset background after changing Team tab
    var btns = document.getElementsByClassName("team-tab-current");
    for (let a = 0; a < btns.length;a ++){
      if (btns[a].className == "team-tab-current" && btns[a].id != teamindex){
        btns[a].className = "team-tab";
      }
    }
  }

  render(){
    return (

      <div className="mainpage-container">
        <div className="sidenav">
          <img className="logo3" src={require('../assets/logo.png')}></img>
          <h1 className="team-label">Menu</h1>
          <div id = "allteamsdiv" className="team">
            {this.createTeamTab()}

            <button className="team-tab-submit" type="button" onClick={this.handleSubmit}>Submit</button>
            <button className="team-tab-signout" type="button" onClick={this.signOut}>Sign Out</button>

          </div>          
        </div>
        {/* {this.renderTeamPage()} */}
        {this.state.currTeamIndex == 0 && <TeamPage team={this.props.teams[0]}></TeamPage>}
        {this.state.currTeamIndex == 1 && <TeamPage team={this.props.teams[1]}></TeamPage>}
        {/* {this.state.currTeamIndex == 2 && <TeamPage team={this.props.teams[2]}></TeamPage>} */}
        {/* {this.state.currTeamIndex == 3 && <TeamPage team={this.props.teams[3]}></TeamPage>} */}
        {/* {this.state.currTeamIndex == 4 && <TeamPage team={this.props.teams[4]}></TeamPage>}
        {this.state.currTeamIndex == 5 && <TeamPage team={this.props.teams[5]}></TeamPage>}

        {this.state.currTeamIndex == 6 && <TeamPage team={this.props.teams[6]}></TeamPage>} */}



      </div>
    );
  }
}
// module.exports = MainPage;
// export default MainPage;
export {Main};
// export default withRouter(MainPage);
