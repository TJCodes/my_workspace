import React from 'react';
import Home from './pages/home';
import Recommend from './pages/recommend';
import Navbar from './components/Navbar/navbar';
import './App.css';

require('dotenv').config();

//TODO - next() FUNCTION NEEDS TO LOAD NEXT PAGE USING REACT-FADE-OPACITIY PACKAGE

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
        setTimeout(function () {
          document.getElementById('navbar-home').classList.add('active');
        }, 1000);
        break;
      case this.state.recommend:
        setTimeout(function () {
          document.getElementById('navbar-recommend').classList.add('active');
        }, 1000);
        break;
      case this.state.record:
        setTimeout(function () {
          document.getElementById('navbar-record').classList.add('active');
        }, 1000);
        break;
      case this.state.accessibiliy:
        setTimeout(function () {
          document.getElementById('navbar-accessibility').classList.add('active');
        }, 1000);
        break;
      case this.state.profile:
        setTimeout(function () {
          document.getElementById('navbar-profile').classList.add('active');
        }, 1000);
        break;
      default:
    }
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
    let questions = ['q1', 'q2', 'q3', 'q4', 'rec'];
    let wrapper = document.getElementById('wrapper-recommend');

    console.log('next question');

    switch (true) {
      case wrapper.childNodes[0].hidden === false:
        wrapper.childNodes[0].hidden = true;
        wrapper.childNodes[1].hidden = false;
        break;
      case wrapper.childNodes[1].hidden === false:
        wrapper.childNodes[1].hidden = true;
        wrapper.childNodes[2].hidden = false;
        break;
      case wrapper.childNodes[2].hidden === false:
        wrapper.childNodes[2].hidden = true;
        wrapper.childNodes[3].hidden = false;
        break;
      case wrapper.childNodes[3].hidden === false:
        wrapper.childNodes[3].hidden = true;
        wrapper.childNodes[4].hidden = false;
        break;
    }


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
          next={this.next}
          conditions={this.conditions}></Recommend>
      </div>
    );
  }
}

export default App;
