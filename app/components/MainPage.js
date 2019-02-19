var React = require('react');
// var Button = require('react-boostrap');
// import { Container, Row, Col } from 'reactstrap';

class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  openOverview(){
    return (
      <div id="Overview" className="w3-container city">
        <h2>Overview</h2>
        <p>London is the capital city of England.</p>
      </div>
    )
  }
  openScore(){
    return(

      <div id="Score" className="w3-container city">
      <h2>Score</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    )
    
  }
  render(){
    return (

      <div className="mainpage-container">

        <div className="sidenav">
          <img className="logo3" src={require('../assets/logo.png')}></img>
          
        </div>

        <div className="content">

          <h2>Team Name</h2>
          <div className="w3-bar w3-black">
            <button type="button" className="w3-bar-item w3-button" onClick={this.openOverview}>Overview</button>
            <button type="button" className="w3-bar-item w3-button" onClick={this.openScore}>Score</button>
            
          </div>
          {/* <div id="Overview" className="w3-container city">
            <h2>Overview</h2>
            <p>London is the capital city of England.</p>
          </div> */}

          {/* <div id="Score" className="w3-container city">
            <h2>Score</h2>
            <p>Tokyo is the capital of Japan.</p>
          </div> */}
          {/* <button type="button" className="overview-btn"> Overview</button>
          <button type="button" className="score-btn"> Score</button> */}

        </div>
  
      </div>
    );
  }
}
module.exports = MainPage;