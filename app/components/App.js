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
      <MainPage></MainPage>   
    )
  }
}
module.exports = App;