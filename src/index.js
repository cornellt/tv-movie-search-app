import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'; //sourced from https://react-bootstrap.netlify.app/getting-started/introduction/#css

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);