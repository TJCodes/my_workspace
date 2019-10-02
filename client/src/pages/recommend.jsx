import React from 'react';
import { apiCall } from '../api/recommendation';
import { sensors } from '../storage/sensors';

let warm = false;

export const recommend = (props) => (
    <div id="wrapper-recommend" className="show">
        <div id="q1" className="row generalMargin">
            <div className="centerText">
                <h1>Where are you currently working?</h1>
                <select id="workspace" name="workspace" className="mediumMarginTop">
                    <option value="lg">Lower ground</option>
                    <option value="upper mezz">Upper Mezz</option>
                    <option value="um1">UM1</option>
                    <option value="um2">UM2</option>
                    <option value="2fo">2F Office Space</option>
                </select>
                <br />
                <button type="submit" className="btn btn-primary smallMarginTop" onClick={() => { apiCall(); props.next(); }}>submit</button>
            </div>
        </div>

        <div id="q2" className="row generalMargin hide">
        <div className="row">
            <div className="centerText">
                <h1>Do you want to work somewhere</h1>
            </div>
        </div>
            <div className="centerText largeMarginTop">
                <h1 id="warmer" onClick={warm = true}>warmer</h1>
                <h1 id="cooler">cooler</h1>
            </div>
        </div>

        <div id="q3" className="row generalMargin hide">
            <div className="centerText">
                <h1>Warmer</h1>
                <h1>Colder</h1>
            </div>
        </div>

        <div id="q4" className="row generalMargin hide">
            <div className="centerText">
                <h1>Warmer</h1>
                <h1>Colder</h1>
            </div>
        </div>
    </div>
)

export default recommend;