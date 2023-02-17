//very mandatory in every react component.
import React from 'react';
//this is only in index.js where we have react dom .render...
import ReactDOM from 'react-dom';
//the main app file we imported and we are going to use...
import App from './App';
//import BrowserRouter
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* app which we imported  */}
      <App />
</BrowserRouter>
  </React.StrictMode>,
  //targetting our root div  from index.html
  document.getElementById('root')
);
