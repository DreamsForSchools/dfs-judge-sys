// var React = require('react');
// var Popular = require('./Popular');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;

// class App extends React.Component{
//   render(){
//     return(
//       <Router>
//         <div className='container'>
//           <Route path='/popular' component={Popular}></Route>
//         </div>
//       </Router>
      
//     )
//   }
// }

// module.exports = App;

var React = require('react');
var Login = require('./Login');
var MainPage = require('./MainPage');
// require('bootstrap/dist/css/bootstrap.min.css');
// var Container = require('reactstrap');
// var Row = require('reactstrap');
// var Col = require('reactstrap');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  render(){
    return (
      <Login></Login> 
     
    
      // {/* <div className="root-container">
      //   <img className="logo1" src={require('../assets/dfs_programlogo_appjam_stacked.png')} alt="Logo"></img>
      //   <p className="sys-name">Judge</p>
      //   <Login></Login>
      //   <img className="logo2" src={require('../assets/dfs_logo_fullcolor_tagline.png')} alt="Logo"></img>
      // </div> */}
      
       
    )
  }
}
module.exports = App;