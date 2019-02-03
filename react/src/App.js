import React from 'react';
import { hot } from 'react-hot-loader';

import './1.scss';

const App = () => (
  <div>
    <div className="class">Sample Text</div>
    <input type="text" />
  </div>
);

export default hot(module)(App);
