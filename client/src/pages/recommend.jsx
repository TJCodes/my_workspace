import React from 'react';
import {apiCall, comparison} from '../api/recommendation';

const recommend = (props) => (
    <div id="wrapper-recommend" className="show">
        <div className="row generalMargin">
            <div className="centerText">
                <form action="../api/getRecommendation">
                    <h1>Where are you currently working?</h1>
                    <select name="workspaces" className="mediumMarginTop">
                        <option value="lower ground">Lower ground</option>
                        <option value="upper mezz">Upper Mezz</option>
                        <option value="um1">UM1</option>
                        <option value="um2">UM2</option>
                        <option value="2f office space">2F Office Space</option>
                    </select>
                    <br />
                    <button type="submit" className="btn btn-primary smallMarginTop" onClick={apiCall()}>submit</button>
                </form>
            </div>
        </div>
    </div>
)

export default recommend;