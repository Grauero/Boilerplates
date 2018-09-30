import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const div = document.createElement('div');
div.classList.add('root');
document.body.appendChild(div);

ReactDOM.render(<App />, document.getElementsByClassName('root'));
