import request from 'request';
import { sensors } from '../storage/sensors';
import { beringarArray } from '../storage/sensors';
let sensorSpaceti;
let sensorBeringar;
let currentTemp;
let currentNoise;
let suggestions = [];
let locationSuggestions = [];
let workspace;

export let conditions = {
    Warmer: Boolean,
    Cooler: Boolean,
    Louder: Boolean,
    Quieter: Boolean,
    Natural: Boolean,
    Artificial: Boolean
}

export const storeRoom = () => {
    workspace = document.getElementById('workspace').value;
    console.log(workspace);
    console.log(Object.values(sensors.Spaceti.Smart_Stone.UM2)[0].sensor_id);
}

export const storageCallBeringar = () => {

}

export const storageCallSpaceti = () => {
    let workspace = document.getElementById('workspace').value;

    switch (true) {
        case (workspace === 'LG2'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.LG2)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'LG3'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.LG3)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'LG4'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.LG4)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'UM'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.UM)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'UM1'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.UM1)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'UM2'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.UM2)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'SecondFloor.Left'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Left)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'SecondFloor.Middle'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Middle)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
        case (workspace === 'SecondFloor.Right'):
            sensorSpaceti = Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Right)[0];
            console.log(sensorSpaceti.sensor_id);
            break;
    }
}

export const checkTemp = () => {
    let comp = workspace.toLowerCase();
    request.post(process.env.REACT_APP_SPACETI_API_WEBSITE_LOGIN + process.env.REACT_APP_SPACETI_API_EMAIL + "&password=" + process.env.REACT_APP_SPACETI_API_PASSWORD, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        else {
            let info = JSON.parse(body);
            let i;
            let token = (Buffer.from('token:' + info.token).toString('base64'));
            let currentDate = new Date();

            currentDate = currentDate.toISOString();
            currentDate = currentDate.substring(0, currentDate.length - 1);

            console.log('current date is');
            console.log(currentDate);

            let options = {
                url: process.env.REACT_APP_SPACETI_API_SMART + currentDate + '000Z',
                headers: {
                    'Authorization': 'Basic ' + token
                }
            };

            let callback = (error, response, body) => {
                let chosenOne = [];

                if (error) {
                    return console.dir(error);
                }
                else {
                    info = JSON.parse(body);
                    let i;
                    for (i = 0; i < info.length; i++) {
                        if (info[i].stone_id === sensorSpaceti.sensor_id) {
                            chosenOne.push(info[i]);
                        }
                    }

                    currentTemp = chosenOne[0].temp;

                    for (i = 0; i < info.length; i++) {
                        if (conditions.Warmer === true && conditions.Cooler === false) {
                            if (info[i].temp > currentTemp) {
                                suggestions.push(info[i].stone_id);
                            }
                        } else if (conditions.Warmer === false && conditions.Cooler === true) {
                            if (info[i].temp < currentTemp) {
                                suggestions.push(info[i].stone_id)
                            }
                        }
                    }

                    let entries = Object.entries(sensors.Spaceti.Smart_Stone);

                    for (i = 1; i < entries.length; i++) {
                        if (i !== 7) { // ADD && comp !== Object.values(entries[i][1])[0].location to the if condition (ONLY AFTER ALL SENSORS ARE FIXED)
                            if (suggestions.includes(Object.values(entries[i][1])[0].sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].sensor_id + ' is a match')
                                locationSuggestions.push(Object.values(entries[i][1])[0].location);
                            }
                            else {
                                console.log(Object.values(entries[i][1])[0].sensor_id + ' is not a match');
                            }
                        } else {     //FINISH THIS ELSE LOOP, TO CHECK THROUGH SECOND FLOOR ROOMS.
                            // MAY NEED TO CREATE SWITCH STATEMENT OR FIND A CLEANER WAY OF DOING IT
                            if (suggestions.includes(Object.values(entries[i][1])[0].Left.s141.sensor_id)) {
                                console.log('match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Left.s141.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Left.s141.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Left.s141.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Left.s141.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s142.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Middle.s142.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s142.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s143.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Middle.s143.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s143.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s139.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Middle.s139.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s139.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Right.s136.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Right.s136.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Right.s136.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Right.s137.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Right.s137.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Right.s137.location);
                            }
                            if (suggestions.includes(Object.values(entries[i][1])[0].Right.s138.sensor_id)) {
                                console.log(Object.values(entries[i][1])[0].Right.s138.sensor_id + 'is a match');
                                locationSuggestions.push(Object.values(entries[i][1])[0].Right.s138.location);
                            }
                        }

                        console.log(i);
                    }

                    if (locationSuggestions.length > 0) {
                        console.log('suggested locations are: ' + locationSuggestions);
                        console.log('check here');
                        console.log(Object.values(locationSuggestions));
                    } else {
                        console.log('no suggested rooms atm');
                    }
                }
            }

            request.post(options, callback);
        }
    });
}

export const checkLoud = () => {
    let username = process.env.REACT_APP_BERINGAR_API_USERNAME + ':' + process.env.REACT_APP_BERINGAR_API_PASSWORD;
    let encoded = (Buffer.from(username).toString('base64'));
    let i;
    let x = 0;
    let arr;
    let url;
    let options;
    let callback;
    
    switch (true) {
        case (workspace === 'LG2'):
            sensorBeringar = Object.values(sensors.Beringar.LG2)[0].sensor_id;
            break;
        case (workspace === 'LG3'):
            sensorBeringar = Object.values(sensors.Beringar.LG2)[0].sensor_id;
            break;
        case (workspace === 'LG4'):
            
            sensorBeringar = Object.values(sensors.Beringar.LG2)[0].sensor_id;
            break;
        case (workspace === 'UM'):
            sensorBeringar = Object.values(sensors.Beringar.UM)[0].sensor_id;
            break;
        case (workspace === 'UM1'):
            sensorBeringar = Object.values(sensors.Beringar.UM1)[0].sensor_id;
            break;
        case (workspace === 'UM2'):
            sensorBeringar = Object.values(sensors.Beringar.UM2)[0].sensor_id;
            break;
        case (workspace === 'SecondFloor.Left'):
            sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[0].sensor_id;
            break;
        case (workspace === 'SecondFloor.Middle'):
            sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[5].sensor_id;
            break;
        case (workspace === 'SecondFloor.Right'):
            sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[10].sensor_id;
            break;
    }

        callback = (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                let info = JSON.parse(body);
                currentNoise = info[0].noise;
                console.log(currentNoise);
            }
        }
    

    options = {
        url: 'https://console.beringar.co.uk/api/beta/sensorreading/sensorlocation/01084590-a5ed-49da-8050-068415355dae/last/1', //sensor ID needs to be changed fit room picked. Did not use it because LG2 sensor is not returning any values
        headers: {
            'Authorization': 'Basic ' + encoded
        }
    };

    request.get(options, callback);

    for (i = 0; i < beringarArray.length; i++) {
        url = 'https://console.beringar.co.uk/api/beta/sensorreading/sensorlocation/' + beringarArray[i].sensor_id + '/last/1';
        
        options = {
            url: url,
            headers: {
                'Authorization': 'Basic ' + encoded
            }
        };

        callback = (error, response, body) => {
            if (error) {
                console.log(error)
            } else {
                let info = JSON.parse(body);
                if (info.length !== 0 && info[0].noise) {
                    if (info[0].noise < currentNoise) {
                        console.log('less');
                        console.log(info[0].noise - currentNoise);
                        if (conditions.Louder === false) {
                            locationSuggestions.push(info[0].id);
                        }
                    } else if (info[0].noise > currentNoise) {
                        console.log('more');
                        console.log(info[0].noise - currentNoise);
                        if (conditions.Louder === true) {
                            let l;
                            beringarArray.forEach((element) => {
                                if (info[0].sensorlocationcurrent == element.sensor_id) {
                                    locationSuggestions.push(element.location);
                                }
                            });
                        }
                    }
                }
                console.log(locationSuggestions);
            }
            

            // if (info[i].noise > currentNoise) {
            //     locationSuggestions.push(info[i].noise);
            // } else {
                // console.log(info[i])
            // }
            // console.log(locationSuggestions);
        }

        request.get(options, callback);
    }

}
