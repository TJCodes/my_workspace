import React from 'react';
import Home from './pages/home';
import Recommend from './pages/recommend';
import { sensors } from './storage/sensors';
import Navbar from './components/Navbar/navbar';
import './App.css';

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

    const test = Object.values(sensors.Spaceti.Chair_Stone.LG1);
    let i;

    let value = document.getElementById('workspace').value;

    for (i = 0; i < test.length; i++) {
      if (test[i].sensor_id === 158) {
        console.log('sensor found');
        break;
      }
      else if (i === test.length - 1 && test[i].sensor_id !== 158) {
        console.log('not found bro');
      }
    }

    // console.log(value)
    // console.log(value);
  }

  componentDidUpdate() {
    //Switch statement to check which page state is false and remove it.
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

    //Switch statement to check which page state is true and display it.
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
    this.setState ({home: !this.state.home})
  }

  changeWarm = () => {
    this.setState({
      recommendation: {
        ...this.state.recommendation,
        warm: !this.state.recommendation.warm
      }
    });
  }

  changeLoud = () => {
    this.setState({
      recommendation: {
        ...this.state.recommendation,
        loud: !this.state.recommendation.loud
      }
    });
  }

  changeNatural = () => {
    this.setState({
      recommendation: {
        ...this.state.recommendation,
        natural: !this.state.recommendation.natural
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home homeState={this.state.home}></Home>
        <Recommend
          changeState={this.questions}
          changeWarm={this.changeWarm}
          changeLoud={this.changeLoud} 
          changeNatural={this.changeNatural} 
          changeMyState={this.changeMyState}
          next={this.next}></Recommend>
      </div>
    );
  }
}

export default App;
