import React from 'react';
var ReactDOM = require('react-dom');
import AppPage from './components/App';
import {App} from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <AppPage 
    />
  </FirebaseContext.Provider>,
  document.getElementById('app')
)
