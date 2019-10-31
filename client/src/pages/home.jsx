import React from 'react';
import Logo from '../components/Logo/logo';
import { checkWorking } from '../api/recommendation';

const home = (props) => (
    <div id="wrapper-home">
        
        <div className="row">
            <div className="row-message centerText generalMargin">
            <Logo id="homelogo"></Logo>
                <p>Sorry about the Rain today! Maybe it's best for you to work somewhere warm?</p>
            </div>
        </div>

        <div className="row row-find">
            <div className="centerText">
                <p id="findText" onClick={() => {props.changePageState.recommend(); checkWorking();}}>find a workplace</p>    
            </div>
            
        </div>
    </div>
    
)

export default home;