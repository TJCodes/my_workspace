import React from 'react';
import './navbar.css';

const navbar = (props) => (
            <div className="row">
                <div className="navigation-container">
                    <ul className="navigation">
                        <li id="navbar-recommend" className="navigation-item" onClick={() => {props.changePageState.recommend();}}>Recommend</li>
                        <li id="navbar-record" className="navigation-item" onClick={() => {props.changePageState.record();}}>Record</li>
                        <li id="navbar-home" className="navigation-item" onClick={() => {props.changePageState.home();}}>Home</li>
                        <li id="navbar-accessibility" className="navigation-item" onClick={() => {props.changePageState.accessibility();}}>Accessibility</li>
                        <li id="navbar-profile" className="navigation-item" onClick={() => {props.changePageState.profile();}}>Profile</li>
                        <div></div> {/* TODO - CREATE COLLAPSING NAVBAR BUTTON */}
                    </ul>
                </div>
            </div>
)

export default navbar;