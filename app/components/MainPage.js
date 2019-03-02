var React = require('react');
require('../mainpage.css');
const SweetAlert = require('react-bootstrap-sweetalert');

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
    alert("Score Saved!");
  //   this.setState({
  //     alert: (
  //        <SweetAlert 
  //         success 
  //         title = "Woot!"
  //         onConfirm = {
  //             () => this.hideAlert()
  //         } >
  //         Hello world!
  //         </SweetAlert>
  //     )
  // });
  }
  
  handleSubmit(){
  }

  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }


  render(){
    return (

      <div className="mainpage-container">

        <div className="sidenav">
          <img className="logo3" src={require('../assets/logo.png')}></img>
          <h1 className="team-label">Menu</h1>

          <div className="team">
            <button className="team-tab-current" type="button">Team 1</button>
            <button className="team-tab" type="button">Team 2</button>
            <button className="team-tab-submit" type="button" onClick={this.handleSubmit}>Submit</button>
          </div>
          
          {/* <button className="btn" type="button" onClick={this.handleSubmit}>Submit</button> */}
          
        </div>

        <div className="right-content">
          <div className="top-bar">
            <h1 className="top-header">Team Name</h1>
            <button className="tab-btn-overview"><img className="tab-overview-img"src={require('../assets/overview-selected.png')} onClick={this.onOverview}></img></button>
            <button className="tab-btn-score"><img className="tab-score-img"src={require('../assets/score-unselected.png')} onClick={this.onScore}></img></button>
            {/* <div className="fill"></div> */}
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
              <p className="main-header-appname">{this.props.team.appname}</p >
              <button className="save-btn" id="save-btn" type="button" onClick={this.handleSave}>Save</button>
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
              {/* <SavePopup></SavePopup> */}
              {/* {<Button color="primary" disabled={this.state.notChange} onClick={() => this.showAlert('Save changes for client', '¿Are you sure?', () => this.updateCustomer, null) } >Save changes</Button>} */}
              {/* <SweetAlert 
	              success 
	              title="Woot!" 
	              onConfirm={this.hideAlert} 
              > 
 	              I did it! 
              </SweetAlert> */}
              
            </div>}

          </div>
        </div>
  
      </div>
    );
  }
}
module.exports = MainPage;