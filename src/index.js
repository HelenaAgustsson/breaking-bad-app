import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponentClass />
  </React.StrictMode>,
  document.getElementById('root')
);

