import React from 'react';
import { hot } from 'react-hot-loader';
import App2 from './App2';
import './1.scss';
import './2.css';

const App = () => (
  <div>
    <div className="class"> Sample Text </div>
    <div className="class2"> Sample Text 2 </div>
    <App2 />
  </div>
);

export default hot(module)(App);
