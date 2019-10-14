import React from 'react';
import { apiCall, checkTemp, checkLoud, storageCallSpaceti, storageCallBeringar, conditions, storeRoom, storeTemp } from '../api/recommendation';
import Fade from 'react-fade-opacity';

//FINISH OFF FADE

export const recommend = (props) => (
    <div id="wrapper-recommend" className="show">
        <div id="q1" className="row generalMargin">
            <div className="centerText">
                <h1>Where are you currently working?</h1>
                <select id="workspace" name="workspace" className="mediumMarginTop">
                    <option value="LG2">LG2</option>
                    <option value="LG3">LG3</option>
                    <option value="LG4">LG4</option>
                    <option value="UM">Upper Mezz</option>
                    <option value="UM1">UM1</option>
                    <option value="UM2">UM2</option>
                    <option value="SecondFloor.Left">2F Office Space - Left side</option>
                    <option value="SecondFloor.Middle">2F Office Space - Middle</option>
                    <option value="SecondFloor.Right">2F Office Space - Right side</option>
                </select>
                <br />
                <button type="submit" className="btn btn-primary smallMarginTop" onClick={() => { storeRoom(); props.next() }}>submit</button>
            </div>
        </div>

        <div id="q2" className="row generalMargin" hidden>
            <div className="row">
                <div className="centerText">
                    <h1>Do you want to work somewhere</h1>
                </div>
            </div>

            <div className="centerText largeMarginTop">
                <h1 id="warmer" onClick={() => { props.next(); conditions.Warmer = true; conditions.Cooler = false; storageCallSpaceti(); checkTemp(); }}>warmer</h1>
                <h1 id="cooler" onClick={() => { props.next(); conditions.Warmer = false; conditions.Cooler = true; storageCallSpaceti(); checkTemp(); }}>cooler</h1>
            </div>
        </div>

        <div id="q3" className="row generalMargin" hidden>
            <div className="row">
                <div className="centerText">
                    <h1>Do you want to work somewhere</h1>
                </div>
            </div>

            <div className="centerText largeMarginTop">
                <h1 id="louder" onClick={() => { props.next(); conditions.Louder = true; conditions.Quieter = false; checkLoud(); }}>louder</h1>
                <h1 id="quieter" onClick={() => { props.next(); conditions.Louder = false; conditions.Quieter = true; checkLoud(); }}>quieter</h1>
            </div>
        </div>

        <div id="q4" className="row generalMargin" hidden>
            <div className="row">
                <div className="centerText">
                    <h1>Do you want to work somewhere with light that is</h1>
                </div>
            </div>

            <div className="centerText largeMarginTop">
                <h1 id="natural" onClick={() => { props.next(); conditions.Natural = true; conditions.Artificial = false; }}>natural</h1>
                <h1 id="artificial" onClick={() => { props.next(); conditions.Natural = false; conditions.Artificial = true; }}>artificial</h1>
            </div>
        </div>

        <div id="rec" className="row generalMargin" hidden>
            <div className="row">
                <div className="centerText">
                    <h1>Your recommended room is -</h1>
                </div>
            </div>
        </div>
    </div>
)

export default recommend;