import React from 'react';
import Logo from '../components/Logo/logo';

const home = (props) => (
    <div id="wrapper-home" className="hide">
        <Logo id="homelogo"></Logo>
        <div className="row">
            <div className="row-message centerText generalMargin">
                <p>Hello, TJ!</p>
                <p>Sorry about the Rain today! Maybe it's best for you to work somewhere warm?</p>
            </div>
        </div>

        <div className="row row-find">
            <div className="centerText">
                <p id="findText">find a workplace</p>    
            </div>
            
        </div>
    </div>
    
)

export default home;