var React = require('react');
require('../mainpage.css');


class TeamPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      onOverview: false, // set overview to default 
      onScore: true,
      totalScore: 0,
      alert: null,
      };
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
  }
  componentWillMount(){
    // var temp = this.props.team.totalScore;
    this.setState({totalScore: this.props.team.totalScore});
  }
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
    this.props.team.setScore(scoretype, parseInt(e.target.value));
    // var temp = this.props.team.totalScore;
    this.setState({totalScore: this.props.team.totalScore});
    // console.log("haha",this.props.team.scoreValidate());
  }

  
  render(){
    return(
      <div className="right-content">
        <div className="top-bar">

          <h1 className="top-header">Team: {this.props.team.teamname}</h1>
          <button className="tab-btn"type="button" onClick={this.onScore}>Score</button>
          <button className="tab-btn"type="button" onClick={this.onOverview}>Overview</button>

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
            <p className="main-header-appname">App Name: {this.props.team.appname}</p >
            <p className="main-header">DESIGN-15 pts:</p >
            <label className="score-critiria-odd">1. UI/UX:</label>

            <span className="custom-dropdown">
              <select required onChange={(e) => this.onScoreChange("dscore1", e)}>
                <option value="" hidden>{this.props.team.dscore1}</option>
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
                {/* <option selected="selected" value={this.props.team.dscore1}>Current Score: {this.props.team.dscore1}</option> */}
              </select>
            </span>

            <br></br>
            {/* <input defaultValue={this.props.team.dscore1} className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("dscore1", e)}></input><br></br> */}
            <label className="score-critiria">2. Cohesive look include:</label>
            <span className="custom-dropdown">
              <select required onChange={(e) => this.onScoreChange("dscore2", e)}>
                <option value="" hidden>{this.props.team.dscore2}</option>
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
                {/* <option selected="selected" value={this.props.team.dscore2}>Current Score: {this.props.team.dscore2}</option> */}
              </select>
            </span>

            {/* <input defaultValue={this.props.team.dscore2} className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("dscore2", e)}></input><br></br> */}
            <p className="main-header">FUNCTIONALITY-15 pts:</p >
            <label className="score-critiria-odd">1. Usability/Bugs:</label>
            <span className="custom-dropdown">
              <select required onChange={(e) => this.onScoreChange("fscore1", e)}>
                <option value="" hidden>{this.props.team.fscore1}</option>

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
                {/* <option selected="selected" value={this.props.team.fscore1}>Current Score: {this.props.team.fscore1}</option> */}
              </select>
            </span>
            <br></br>

            {/* <input defaultValue={this.props.team.fscore1} className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("fscore1", e)}></input><br></br> */}
            <label className="score-critiria">2. Standout Feature/technical sophistication:</label>
            <span className="custom-dropdown">
              <select required onChange={(e) => this.onScoreChange("fscore2", e)}>
                <option value="" hidden>{this.props.team.fscore2}</option>

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
                {/* <option selected="selected" value={this.props.team.fscore2}>Current Score: {this.props.team.fscore2}</option> */}
              </select>
            </span>
            {/* <input defaultValue={this.props.team.fscore2} className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("fscore2", e)}></input><br></br> */}
            <p className="main-header">THEME-15 pts:</p >
            <label className="score-critiria-odd">1. Social Justice:</label>
            <span className="custom-dropdown">
              <select required onChange={(e) => this.onScoreChange("tscore1", e)}>
                <option value="" hidden>{this.props.team.tscore1}</option>
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
                {/* <option selected="selected" value={this.props.team.tscore1}>Current Score: {this.props.team.tscore1}</option> */}
              </select>
            </span>
            <br></br>

            {/* <input defaultValue={this.props.team.tscore1}className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("tscore1", e)}></input><br></br> */}
            <label className="score-critiria">2. Creativity:</label>
            <span className="custom-dropdown">
              <select required className="score-slider"onChange={(e) => this.onScoreChange("tscore2", e)}>
                <option value="" hidden>{this.props.team.tscore2}</option>
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
                {/* <option selected="selected" value={this.props.team.tscore2}>Current Score: {this.props.team.tscore2}</option> */}
              </select>
            </span>
            {/* <input defaultValue={this.props.team.tscore2}className="score-input" type="number"name="quantity"min="1"max="15" onChange={(e) => this.onScoreChange("tscore2", e)}></input><br></br> */}
            <p className="main-header">PRESENTATION-10 pts:</p >
            <label className="score-critiria-odd">1. On-stage presentation:</label>
            <span className="custom-dropdown">
              <select required className="score-slider" onChange={(e) => this.onScoreChange("pscore1", e)}>
                <option value="" hidden>{this.props.team.pscore1}</option>
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
                {/* <option selected="selected" value={this.props.team.pscore1}>Current Score: {this.props.team.pscore1}</option> */}
              </select>
            </span>
            {/* <input defaultValue={this.props.team.pscore1}className="score-input"type="number"name="quantity"min="1"max="10" onChange={(e) => this.onScoreChange("pscore1", e)}></input><br></br> */}
          </div>}
        </div>
      </div> 
    );
  }
}
export default TeamPage;