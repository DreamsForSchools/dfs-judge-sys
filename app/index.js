// import React from 'react';
// var ReactDOM = require('react-dom');
// import AppPage from './components/App';
// import {App} from './components/App';
// import Firebase, { FirebaseContext } from './components/Firebase';


// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <AppPage 
//     />
//   </FirebaseContext.Provider>,
//   document.getElementById('app')
// )


// // <Router>
// //           <div>
// //             {/* <ul>
// //               <li><Link to="/">Home</Link></li>
// //               <li><Link to="/about">About</Link></li>

// //             </ul> */}
            
// //             {/* <Route path="/" exact={true} component={Login} /> */}

// //             {/* <Route path="/" exact strict component={() => <MainPage teams={listofTeams}></MainPage>}/> */}

// //           </div>
// //         </Router>
import React from 'react';
var ReactDOM = require('react-dom');
import App from './components/App';

ReactDOM.render(
  <App 
  />, 
  document.getElementById('app')
)