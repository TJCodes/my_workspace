import React from 'react';
import Home from './pages/home';
import Recommend from './pages/recommend';
import { sensors } from './storage/sensors';
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
      recommendation: {
        warm: false,
        loud: false,
        natural: false
      }
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

    console.log(sensors.Spaceti.Chair_Stone.UM1.s175);
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

  next = () => {
    console.log('next');
  }

  questions = {
    warm: () => {
      this.setState({recommendation: {warm: !this.state.recommendation.warm}});
    },
    loud: () => {
      this.setState({recommendation: {loud: !this.state.recommendation.loud}});
    },
    natural: () => {
      this.setState({recommendation: {loud: this.state.recommendation.natural}});
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home homeState={this.state.home}></Home>
        <Recommend 
        changeWarmState = {this.questions.warm}
        changeLoudState = {this.questions.loud}
        changeNaturalState = {this.questions.natural}
        next ={this.next}></Recommend>
      </div>
    );
  }
}

export default App;
