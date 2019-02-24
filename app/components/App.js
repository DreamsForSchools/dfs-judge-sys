// // var React = require('react');
// import React from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
// import Route from 'react-router-dom/Route';


// // var Login = require('./Login');
// import Login from './Login';


// class App extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   this.state ={};
//   // }
//   render(){
//     return(
//       <Router>
//         <div>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>

//           </ul>
          

//           <Route path="/"exact={true} component={Login} />
//           <Route path="/about" exact strict render={
//             ()=> {
//               return (<h1> welcome about</h1>)
//             }
//           } />
//           <Route path="/user/:username" exact strict component={User}
//           />
//         </div>
//       </Router>
//     )
//   }
// }
// // module.exports = App;
// export default App;