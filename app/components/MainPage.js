var React = require('react');
require('../mainpage.css');
// require('../login.css')


class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={onOverview: false, // set overview to default 
                onScore: true,
                totalScore: 0};
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  onScoreChange(id, e){
    this.props.team.setScore(id, parseInt(e.target.value));
  }
  // Update Totoal Score after user clicking on "Save" button
  handleSave(){
    var temp = this.props.team.calculateTotal();
    console.log(temp);
    this.setState({totalScore: temp});
  }
  // 
  handleSubmit(){

  }

  render(){
    return (

      <div className="mainpage-container">

        <div className="sidenav">
          < img className="logo3" src={require('../assets/logo.png')}></img>
          <div className="team"><p className="team-num">{this.props.team.teamname}</p ></div>
          <button className="btn" type="button" onClick={this.handleSubmit}>Submit</button>
          
        </div>

        <div className="right-content">
          <div className="top-bar">
            <p className="top-header">Team Name</p >
            <button className="tab-btn"type="button" onClick={this.onOverview}>Overview</button>
            <button className="tab-btn"type="button" onClick={this.onScore}>Score</button>
            <div className="total-score">Total: {this.state.totalScore}/100</div>
          </div>

          <div className="main-container">
            {this.state.onOverview && 
            <div className="main-content-box">
              <p className="main-header">App Name</p >
              <p className="main-content">{this.props.team.appname}</p >
              <p className="main-header">App Description</p >
              <p className="main-content">{this.props.team.description}</p >
            </div>}
            {this.state.onScore &&
            <div className="main-content-box">
              <p className="main-header">{this.props.team.appname}</p >
              <p className="main-header">DESIGN-15 pts:</p >
              <label className="score-critiria-odd">1. UI/UX:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("dscore1", e)}></input><br></br>
              <label className="score-critiria">2. Cohesive look include:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("dscore2", e)}></input><br></br>
              <p className="main-header">FUNCTIONALITY-15 pts:</p >
              <label className="score-critiria-odd">1. Usability/Bugs:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("fscore1", e)}></input><br></br>
              <label className="score-critiria">2. Standout Feature/technical sophistication:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("fscore2", e)}></input><br></br>
              <p className="main-header">THEME-15 pts:</p >
              <label className="score-critiria-odd">1. Social Justice:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("tscore1", e)}></input><br></br>
              <label className="score-critiria">2. Creativity:</label>
              <input className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("tscore2", e)}></input><br></br>
              <p className="main-header">PRESENTATION-10 pts:</p >
              <label className="score-critiria-odd">1. On-stage presentation:</label>
              <input className="score-input"type="number"name="quantity"min="1"max="10" onChange={(e) => this.onScoreChange("pscore1", e)}></input><br></br>
              <button className="btn" id="save-btn" type="button" onClick={this.handleSave}>Save</button>
            </div>}
          </div>
        </div>
  
      </div>
    );
  }
}
module.exports = MainPage;