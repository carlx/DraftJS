import React, { Component } from 'react';
import logo from './react.svg';
//import styles from './Home.module.css';
import './Home.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import RichEditor from './Editor/RichEditor';

class Home extends Component {
  render() {
    return (
      <div>
        <RichEditor />
      </div>
    );
  }
}

export default Home;
