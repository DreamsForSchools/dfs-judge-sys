var React = require('react');
require('../mainpage.css');
// require('../login.css')

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={onOverview: true, // set overview to default 
                onScore: false};
    this.onOverview = this.onOverview.bind(this);
    this.onScore = this.onScore.bind(this);
  }
  onOverview(){
    this.setState({onOverview: true});
    this.setState({onScore: false});
  }
  onScore(){
    this.setState({onScore: true});
    this.setState({onOverview: false});
  }

  render(){
    return (

      <div className="mainpage-container">

        <div className="sidenav">
          <img className="logo3" src={require('../assets/logo.png')}></img>
          <div className="team"><p className="team-num">Team 1</p></div>
          <button className="submit-btn" type="button">Submit</button>
          
        </div>

        <div className="right-content">
          <div className="top-bar">
            <p className="top-header">Team Name</p>
            
            <button className="tab-btn"type="button" onClick={this.onOverview}>Overview</button>
            <button className="tab-btn"type="button" onClick={this.onScore}>Score</button>
            <div className="total-score">Total: 80/100</div>
          </div>

          <div className="main-container">
            {this.state.onOverview && 
            <div className="main-content-box">
              <p className="main-header">App Name</p>
              <p className="main-content">Judge View</p>
              <p className="main-header">App Description</p>
              <p className="main-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.</p>
            </div>}
            {this.state.onScore &&
            <div className="main-content-box">
              <p className="main-header">Score</p>
              <p className="main-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic laborum voluptas soluta accusantium. A laudantium magni adipisci, sint omnis voluptatibus sequi minus eos fugit nobis. Maxime nemo reiciendis et corrupti.</p>
            </div>}  
          </div>
        </div>
  
      </div>
    );
  }
}
module.exports = MainPage;