import React, { Fragment } from 'react';
import Icon from '../public/static/favicon.ico';
import './App.scss';

const App = () => {

  return (
    <Fragment>
      <img src={Icon} alt="Logo" id='app-logo'></img>
      <h1 id='app-title'>Welcome to our React-Blueprint</h1>
      <h2 id='app-desc'>The power is now in your hands!</h2>
    </Fragment>
  );

};


export default App;
