var React = require('react');
var Team = require('../components/Team');
require('../mainpage.css');


var Teams = [{id: '1', appName: 'app jam', description: 'this is description', score: 'empty right now', select: false}, 
            {id: '2', appName: 'app jam2', description: 'this is description2', score: 'score 2', select: false},
            {id: '2', appName: 'app jam2', description: 'this is description2', score: 'score 2', select: false}];

function getTeam(){
  // TODO: GET TEAM FROM DATABASE 
}
var Team1 = new Team();
// Generate Team Tab for each team in the Team Array (SHOULD USE NAV INSTEAD OF TAB)
function TeamTab(){
  const output = [];
  for (var x = 0; x < Teams.length; x++){
    output.push(<button className="team-tab"onClick={onTeam}>Team {x+1}</button>);
  };
  return output;
};

function onTeam(){
};

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={onOverview: false, // set overview to default 
                onScore: true,};
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
  }
  onHaha(){
    console.log("haaha")
  }
  onOverview(){
    console.log("haha");
    this.setState({onOverview: true});
    this.setState({onScore: false});
  }
  onScore(){
    this.setState({onScore: true});
    this.setState({onOverview: false});
  }
  handleSubmit(){
    // Submit all score to database
    
    console.log("Submit clicked");
  }
  handleSave(){
    // Save a team's score
    alert("Score saved!");
    console.log("Save clicked")
  }
  render(){
    return (
      <div>
        <Team>
        </Team>
        
      </div>
    )
    
  }
  // render(){
  //   return (

  //     <div className="mainpage-container">

  //       <div className="sidenav">
  //         <img className="logo3" src={require('../assets/logo.png')}></img>
  //         <TeamTab></TeamTab>
  //         <button className="submit-btn" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>          
  //       </div>

  //       <div className="right-content">
  //         <div className="top-bar">
  //           <p className="top-header">Team Name</p>
  //           <button className="tab-btn"type="button" onClick={this.onOverview}>Overview</button>
  //           <button className="tab-btn"type="button" onClick={this.onScore}>Score</button>
  //           <div className="total-score">Total: 80/100</div>
  //         </div>
  //         <div className="main-container">
  //           {this.state.onOverview && 

  //           <div className="main-content-box">
  //             <p className="main-overview-header">App Name</p>
  //             <p className="main-overview-content">Judge View</p>
  //             <p className="main-overview-header">App Description</p>
  //             <p className="main-overview-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.</p>
  //           </div>}
  //           {this.state.onScore &&

  //           <div className="main-content-box">
  //             <p className="main-score-header">App name</p>
  //             <p className="main-socre-content-appname">app name</p>
  //             <div className="main-score-content">
  //               <p className="score-header">DESIGN-15 pts:</p><br></br>
  //               <label htmlFor="scorefield">1.  UI/UX: 	</label>
  //               <input type="number" id="scorefield" className="score-input"placeholder=" "></input><p className="outof">/15</p>
  //             </div>
  //           </div>}  
  //         </div>
  //       </div>
  
  //     </div>
  //   );
  //}
}
module.exports = MainPage;