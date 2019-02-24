var React = require('react');
require('../mainpage.css');

var Teams = [{id: '1', teamName: 'java', appName: 'app jam', description: 'this is description', score: 'empty right now', select: false}, 
            {id: '2', teamName: 'java', appName: 'app jam2', description: 'this is description2', score: 'score 2', select: false},
            {id: '2', teamName: 'java', appName: 'app jam2', description: 'this is description2', score: 'score 2', select: false}];

// class TeamOverview extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     for (var i=0; i<Teams.length; i++){
//       if (this.props.id == Teams[i].id){
//         return(
//           <div className="main-content-box">
//             <p className="main-overview-header">App Name</p>
//             <p className="main-overview-content">Judge View</p>
//             <p className="main-overview-header">App Description</p>
//             <p className="main-overview-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.</p>
//           </div>
//         )
//       }else{
//         return null;
//       }
//     }
//     // return(
//     //   <div className="main-content-box">
//     //     <p className="main-overview-header">App Name</p>
//     //     <p className="main-overview-content">Judge View</p>
//     //     <p className="main-overview-header">App Description</p>
//     //     <p className="main-overview-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.</p>
//     //   </div>
//     // )
//   }
// }
{/* <Team teamname=></Team> */}
class Team extends React.Component{
  constructor(props){
    super(props);
    this.state = {teamName: "",
                  appName: "",
                  appDescription: "",
                  total_score: "",
                  design_score: "",
                  }
    console.log(this.state);
  }

  getTeamName(){
  }
  getAppName(){
  }
  getAppDescription(){
  }
  getScore(){
  }
  
  render(){
    return(
      <div>
        hahatea,
      </div>
    )
    
     
        {/* <div className="right-content"> */}
          {/* <div className="top-bar">
            <p className="top-header">Team Name</p>
            
            <button className="tab-btn"type="button" onClick={this.onOverview}>Overview</button>
            <button className="tab-btn"type="button" onClick={this.onScore}>Score</button>
            <div className="total-score">Total: 80/100</div>
          </div> */}

          {/* <div className="main-container">
            {this.state.onOverview && 
            <div className="main-content-box">
              <p className="main-overview-header">App Name</p>
              <p className="main-overview-content">Judge View</p>
              <p className="main-overview-header">App Description</p>
              <p className="main-overview-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.</p>
            </div>}
            {this.state.onScore &&
            <div className="main-content-box">
              <p className="main-score-header">App name</p>
              <p className="main-socre-content-appname">app name</p>
              <div className="main-score-content">
                <p className="score-header">DESIGN-15 pts:</p><br></br>
                <label htmlFor="scorefield">1.  UI/UX: 	</label>
                <input type="number" id="scorefield" className="score-input"placeholder=" "></input><p className="outof">/15</p>
              </div>
            </div>}  
          </div> */}
        {/* </div> */}
    
  }

}

module.exports = Team;