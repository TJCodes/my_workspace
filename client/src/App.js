import React from 'react';
import Home from './pages/home';
import Recommend from './pages/recommend';
import Navbar from './components/Navbar/navbar';
import Spinner from './components/Spinner/spinner';
import Bubbles from './components/Bubbles/bubbles';
import './App.css';
import { locationSuggestions } from './api/recommendation';

require('dotenv').config();

//TODO - next() FUNCTION NEEDS TO LOAD NEXT PAGE USING REACT-FADE-OPACITIY PACKAGE

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      home: true,
      recommend: false,
      record: false,
      accessibility: false,
      profile: false,
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
        // document.getElementById('wrapper-record').style.opactity = 0;
        break;
      case this.state.accessibiliy:
        // document.getElementById('wrapper-accessibility').style.opactity = 0;
        break;
      case this.state.profile:
        // document.getElementById('wrapper-profile').style.opactity = 0;
        break;
      default:
    }

    //Switch statement to check which page state is true and display it.
    switch (true) {
      case this.state.home:
        document.getElementById('wrapper-home').style.opactity = 1;
        break;
      case this.state.recommend:
        document.getElementById('wrapper-recommend').style.opactity = 1;
        break;
      case this.state.record:
        // document.getElementById('wrapper-record').style.opactity = 1;
        break;
      case this.state.accessibiliy:
        // document.getElementById('wrapper-accessibility').style.opactity = 1;
        break;
      case this.state.profile:
        // document.getElementById('wrapper-profile').style.opactity = 1;
        break;
      default:
    }
  }

  next = () => {
    let wrapper = document.getElementById('wrapper-recommend');

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

  changePageState = {
    home: () => {
      this.setState(() => ({
        home: true,
        recommend: false,
        record: false,
        accessibility: false,
        profile: false
      }));
      document.getElementById('wrapper-home').hidden = false;
      setTimeout(() => { document.getElementById('wrapper-home').style.opacity = 1; }, 250);
      // document.getElementById('wrapper-home').style.opacity = 1;
      document.getElementById('wrapper-recommend').style.opacity = 0;
      // document.getElementById('wrapper-record').style.opacity = 0;
      // document.getElementById('wrapper-accessibility').style.opacity = 0;
      // document.getElementById('wrapper-profile').style.opacity = 0;
      document.getElementById('navbar-home').classList.add('active');
      document.getElementById('navbar-record').classList.remove('active');
      document.getElementById('navbar-accessibility').classList.remove('active');
      document.getElementById('navbar-profile').classList.remove('active');
      document.getElementById('navbar-recommend').classList.remove('active');
      setTimeout(() => {
        document.getElementById('wrapper-recommend').hidden = true;
        // document.getElementById('wrapper-record').display = 'none';
        // document.getElementById('wrapper-accessibility').display = 'none';
        // document.getElementById('wrapper-profile').display = 'none';
      }, 1000);
    },
    recommend: () => {
      this.setState(() => ({
        home: false,
        recommend: true,
        record: false,
        accessibility: false,
        profile: false
      }));
      document.getElementById('wrapper-recommend').childNodes[0].hidden = false;
      document.getElementById('wrapper-recommend').childNodes[1].hidden = true;
      document.getElementById('wrapper-recommend').childNodes[2].hidden = true;
      document.getElementById('wrapper-recommend').childNodes[3].hidden = true;
      document.getElementById('wrapper-recommend').childNodes[4].hidden = true;

      document.getElementById('wrapper-recommend').hidden = false;
      document.getElementById('wrapper-home').style.opacity = 0;
      setTimeout(() => { document.getElementById('wrapper-recommend').style.opacity = 1; }, 250);
      // document.getElementById('wrapper-record').style.opacity = 0;
      // document.getElementById('wrapper-accessibility').style.opacity = 0;
      // document.getElementById('wrapper-profile').style.opacity = 0;
      document.getElementById('navbar-home').classList.remove('active');
      document.getElementById('navbar-record').classList.remove('active');
      document.getElementById('navbar-accessibility').classList.remove('active');
      document.getElementById('navbar-profile').classList.remove('active');
      document.getElementById('navbar-recommend').classList.add('active');
      setTimeout(() => {
        document.getElementById('wrapper-home').hidden = true;
        // document.getElementById('wrapper-record').display = 'none';
        // document.getElementById('wrapper-accessibility').display = 'none';
        // document.getElementById('wrapper-profile').display = 'none';
      }, 1000);
    },
    record: () => {
      this.setState(() => ({
        home: false,
        recommend: false,
        record: true,
        accessibility: false,
        profile: false
      }));
    },
    accessibility: () => {
      this.setState(() => ({
        home: false,
        recommend: false,
        record: false,
        accessibility: true,
        profile: false
      }));
    },
    profile: () => {
      this.setState(() => ({
        home: false,
        recommend: false,
        record: false,
        accessibility: false,
        profile: true
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar changePageState={this.changePageState} componentDidUpdate={this.componentDidUpdate}></Navbar>
        <Home changePageState={this.changePageState} homeState={this.state.home}></Home>
        <Recommend next={this.next}></Recommend>
        <Bubbles />
        <Spinner />
      </div>
    );
  }
}

export default App;
