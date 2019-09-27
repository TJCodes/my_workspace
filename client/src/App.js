import React from 'react';
import Home from './pages/home';
import Recommend from './pages/recommend';
import Navbar from './components/Navbar/navbar';
import './App.css';

import axios from 'axios';
require('dotenv').config();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      home: true,
      recommend: false,
      record: false,
      accessibiliy: false,
      profile: false,
    } 
  }

  componentDidMount() {
    switch (true) {
      case this.state.home:
        document.getElementById('navbar-home').classList.add('active');
        break;
      case this.state.recommend:
        document.getElementById('navbar-recommend').classList.add('active');
        break;
      case this.state.record:
        document.getElementById('navbar-record').classList.add('active');
        break;
      case this.state.accessibiliy:
        document.getElementById('navbar-accessibility').classList.add('active');
        break;
      case this.state.profile:
        document.getElementById('navbar-profile').classList.add('active');
        break;
      default:
    }

    const apiCall = () => {
      axios.post();
    }

    console.log(process.env.SPACETI_API_EMAIL);
  }

  componentDidUpdate() {
    switch (false) {
      case this.state.home:
        document.getElementById('wrapper-home').style.opactity = 0;
        break;
      case this.state.recommend:
        document.getElementById('wrapper-recommend').style.opactity = 0;
        break;
      case this.state.record:
        document.getElementById('wrapper-record').style.opactity = 0;
        break;
      case this.state.accessibiliy:
        document.getElementById('wrapper-accessibility').style.opactity = 0;
        break;
      case this.state.profile:
        document.getElementById('wrapper-profile').style.opactity = 0;
        break;
      default:
    }

    switch (true) {
      case this.state.home:

        break;
      case this.state.recommend:

        break;
      case this.state.record:
        
        break;
      case this.state.accessibiliy:
        
        break;
      case this.state.profile:
        
        break;
      default:
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home homeState={this.state.home}></Home>
        <Recommend></Recommend>
      </div>
    );
  }
}

export default App;
