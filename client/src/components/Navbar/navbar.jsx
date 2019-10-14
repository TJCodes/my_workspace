import React from 'react';
import './navbar.css';

class navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            home: true,
            recommend: false,
            record: false,
            accessibility: false,
            profile: false
        }
    }

    componentDidMount() {
        // setTimeout(function() {
        //     document.getElementById('navbar-home').classList.add('active');
        // }, 1000);
    }

    render() {
        return(
            <div className="row">
                <div className="navigation-container">
                    <ul className="navigation">
                        <li id="navbar-recommend" className="navigation-item">Recommend</li>
                        <li id="navbar-record" className="navigation-item">Record</li>
                        <li id="navbar-home" className="navigation-item">Home</li>
                        <li id="navbar-accessibility" className="navigation-item">Accessibility</li>
                        <li id="navbar-profile" className="navigation-item">Profile</li>
                        <div></div> {/* TODO - CREATE COLLAPSING NAVBAR BUTTON */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default navbar;