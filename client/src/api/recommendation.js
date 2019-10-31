import request from 'request';
import { sensors, beringarArray, spacetiArray } from '../storage/sensors';
import { historical } from '../storage/historical';
let chosenOne = [];
let sensorSpaceti = [];
let sensorBeringar;
let currentTemp;
let currentNoise;
let suggestions = [];
export let locationSuggestions = [];
let workspace;
let rec;
let rooms;
let checkSensor;
export let mode;

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
    rec = workspace.toLowerCase();
    rooms = document.getElementById('workspace').options;
    // for (let i = 0; i < rooms.length; i++) {
    //     if 
    // }
}

export const checkWorking = () => {
    let token;

    return new Promise((resolve, reject) => {

        return new Promise((resolve, reject) => {
            let options = {
                url: 'https://fcc.spaceti.net/login/password?email=' + process.env.REACT_APP_SPACETI_API_EMAIL + '&password=' + process.env.REACT_APP_SPACETI_API_PASSWORD
            }

            let callback = (error, response, body) => {
                if (error) {
                    console.log(error);
                } else {
                    document.getElementById('spinner').hidden = false;
                    setTimeout(() => {
                        document.getElementById('spinner').style.opacity = 1;
                    }, 100);

                    let info = JSON.parse(body);
                    resolve(token = (Buffer.from('token:' + info.token).toString('base64')));
                }
            }

            request.post(options, callback);
        }).then(() => {
            return new Promise((resolve, reject) => {
                let currentDate = new Date();

                currentDate = currentDate.toISOString();
                currentDate = currentDate.substring(0, currentDate.length - 1);

                let options = {
                    url: process.env.REACT_APP_SPACETI_API_SMART + currentDate + '000Z',
                    headers: {
                        'Authorization': 'Basic ' + token
                    }
                }

                let callback = (error, response, body) => {
                    if (error) {
                        console.log(error);
                    } else {
                        let info = JSON.parse(body);

                        for (let i = 0; i < spacetiArray.length; i++) {
                            for (let l = 0; l < info.length; l++) {
                                if (info[l].stone_id === spacetiArray[i].sensor_id) {
                                    spacetiArray[i].working = true;
                                    console.log(spacetiArray[i].sensor_id + ' is working');
                                }
                            }
                            if (i === spacetiArray.length - 1) {
                                resolve(console.log('resolved'));
                            }
                        }
                    }
                }

                request.post(options, callback);

            }).then(() => {

                let entries = Object.entries(sensors.Spaceti.Smart_Stone);
                switch (true) {
                    case (document.getElementById('workspace').value === 'Basement'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        }, 500);
                        break;
                    case (document.getElementById('workspace').value === 'LG1'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        }, 500);
                        break;
                    case (document.getElementById('workspace').value === 'LG2'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[1][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[1][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'LG3'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[2][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[2][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'LG4'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[3][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[3][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'Cafe'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        }, 500);
                        break;
                    case (document.getElementById('workspace').value === 'LM'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        }, 500);
                        break;
                    case (document.getElementById('workspace').value === 'UM'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[4][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[4][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'UM1'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[5][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[5][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'UM2'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[6][1])[0].working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[6][1])[0].working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'SecondFloor.Sekforde'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[7][1])[0].Sekforde.s136.working === false &&
                            Object.values(entries[7][1])[0].Sekforde.s137.working === false &&
                            Object.values(entries[7][1])[0].Sekforde.s138.working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[7][1])[0].Sekforde.s136.working === true ||
                            Object.values(entries[7][1])[0].Sekforde.s137.working === true ||
                            Object.values(entries[7][1])[0].Sekforde.s138.working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'SecondFloor.Middle'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[7][1])[0].Middle.s142.working === false &&
                            Object.values(entries[7][1])[0].Middle.s143.working === false &&
                            Object.values(entries[7][1])[0].Middle.s139.working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[7][1])[0].Middle.s142.working === true ||
                            Object.values(entries[7][1])[0].Middle.s143.working === true ||
                            Object.values(entries[7][1])[0].Middle.s139.working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === 'SecondFloor.StJames'):
                        document.getElementById('spinner').hidden = false;
                        document.getElementById('spinner').style.opacity = 1;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                            document.getElementById('spinner').style.opacity = 0;
                        }, 500);
                        if (Object.values(entries[7][1])[0].StJames.s141.working === false) {
                            document.getElementById('notWorking').innerHTML = 'Sorry, not all of the sensors here are not currently responding, however, we can use historical data to recommend you a workspace!';
                            document.getElementById('notWorkingDiv').hidden = false;
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorking').style.opacity = 1 }, 100);
                        } else if (Object.values(entries[7][1])[0].StJames.s141.working === true) {
                            document.getElementById('notWorking').style.opacity = 0;
                            setTimeout(() => { document.getElementById('notWorkingDiv').hidden = true; document.getElementById('notWorking').innerHTML = ''; }, 500);
                        }
                        break;
                    case (document.getElementById('workspace').value === '2fw'):
                        break;
                }
            });
        });

    });
}

export const storageCallSpaceti = () => {
    let workspace = document.getElementById('workspace').value;

    switch (true) {
        case (workspace === 'LG2'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.LG2)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'LG3'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.LG3)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'LG4'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.LG4)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'UM'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.UM)[0]);
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.UM)[1]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'UM1'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.UM1)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'UM2'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.UM2)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'SecondFloor.StJames'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.StJames)[0]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'SecondFloor.Middle'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Middle)[0]);
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Middle)[1]);
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Middle)[2]);
            console.log(sensorSpaceti);
            break;
        case (workspace === 'SecondFloor.Sekforde'):
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Sekforde)[0]);
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Sekforde)[1]);
            sensorSpaceti.push(Object.values(sensors.Spaceti.Smart_Stone.SecondFloor.Office.Sekforde)[2]);
            console.log(sensorSpaceti);
            break;
    }
}

export const calculateRec = () => {
    let occurances = {};
    let curValue;

    for (let i = 0; i < locationSuggestions.length; i++) {
        if (rec === 'secondfloor.stjames' || rec === 'secondfloor.middle' || rec === 'secondfloor.sekforde') {
            rec = '2fo';
            if (locationSuggestions[i].substring(0, 3) !== rec) {
                mode = locationSuggestions[i];
                console.log('initial mode is ' + mode);
                break;
            }
        } else if (locationSuggestions[i] !== rec && locationSuggestions[i].substring(0, 3) !== rec.substring(0, 3)) {
            mode = locationSuggestions[i];
            console.log('initial mode is ' + mode);
            console.log(rec.substring(0, 3));
            break;
        }
    }

    for (let i = 0; i < locationSuggestions.length; i++) {
        curValue = locationSuggestions[i];

        if (occurances[curValue] !== undefined) {
            occurances[curValue]++;
        } else {
            occurances[curValue] = 1;
        }

        if (occurances[curValue] > occurances[mode] && curValue !== rec) {
            if (rec === '2fo' && curValue.substring(0, 3) === rec) {

            } else {
                mode = curValue;
            }
        }
    }

    if (mode) {
        switch (true) {
            case (mode === '2fo-l'):
                document.getElementById('recommendedRoom').innerHTML = "Your recommended room is the Second Floor Office. <i>The St. James Street side of the room particularly meets your needs!</i>";
                break;
            case (mode === '2fo-r'):
                document.getElementById('recommendedRoom').innerHTML = "Your recommended room is the Second Floor Office. <i>The Sekforde Street side particularly meets your needs!</i>";
                break;
            case (mode === '2fo-m'):
                document.getElementById('recommendedRoom').innerHTML = "Your recommended room is the Second Floor Office. <i>The middle of the room particularly meets your needs!</i>";
                break;
            default:
                document.getElementById('recommendedRoom').innerHTML = "Your recommended room is " + mode;
        }
    } else {
        document.getElementById('recommendedRoom').innerHTML = "Sorry! We could not find a room to suit your needs";
    }
}

export const getCurrentConditions = () => {
    let token;
    let currentDate = new Date();
    currentDate = currentDate.toISOString();
    currentDate = currentDate.substring(0, currentDate.length - 1);

    const getCurrentTemp = new Promise((resolve, reject) => {
        let options = {
            url: process.env.REACT_APP_SPACETI_API_WEBSITE_LOGIN + process.env.REACT_APP_SPACETI_API_EMAIL + "&password=" + process.env.REACT_APP_SPACETI_API_PASSWORD,
        };

        let callback = (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                let info = JSON.parse(body);
                let token = (Buffer.from('token:' + info.token).toString('base64'));

                resolve(token = (Buffer.from('token:' + info.token).toString('base64')));
            }
        }

        request.post(options, callback);
    });

    getCurrentTemp.then(() => {
        let options = {
            url: process.env.REACT_APP_SPACETI_API_SMART + currentDate + '000Z',
            headers: {
                'Authorization': 'Basic ' + token
            }
        };

        let callback = (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                let info = JSON.parse(body);

                for (let i = 0; i < info.length; i++) {
                    for (let l = 0; l < sensorSpaceti.length; l++) {
                        if (info[i].stone_id === sensorSpaceti[l].sensor_id) {
                            chosenOne.push(info[i]);
                        }
                    }
                }

                if (chosenOne[0]) {
                    currentTemp = chosenOne[0].temp;
                } // FINISH THIS - ADD ELSE STATEMENT TO SET THE CURRENT TEMP TO HISTORICAL TEMPERATURE
            }
        }

        request,post(options, callback);
    });

    const getCurrentNoise = new Promise((resolve, reject) => {

    });
}

export const checkTempPromise = () => {
    return new Promise((resolve, reject) => {
        document.getElementById('spinner').hidden = false;
        setTimeout(() => {
            document.getElementById('spinner').style.opacity = 1;
        }, 100);

        request.post(process.env.REACT_APP_SPACETI_API_WEBSITE_LOGIN + process.env.REACT_APP_SPACETI_API_EMAIL + "&password=" + process.env.REACT_APP_SPACETI_API_PASSWORD, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            else {
                let info = JSON.parse(body);
                let token = (Buffer.from('token:' + info.token).toString('base64'));
                let currentDate = new Date();

                currentDate = currentDate.toISOString();
                currentDate = currentDate.substring(0, currentDate.length - 1);

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
                        for (let i = 0; i < info.length; i++) {
                            for (let l = 0; l < sensorSpaceti.length; l++) {
                                if (info[i].stone_id === sensorSpaceti[l].sensor_id) {
                                    chosenOne.push(info[i]);
                                }
                            }
                        }

                        if (chosenOne[0]) {
                            currentTemp = chosenOne[0].temp;
                        } else {
                            let wrapper = document.getElementById('wrapper-recommend');
                            wrapper.childNodes[0].hidden = true;
                            wrapper.childNodes[1].hidden = true;
                            wrapper.childNodes[2].hidden = true;
                            wrapper.childNodes[3].hidden = true;
                            wrapper.childNodes[4].hidden = false;

                            document.getElementById('recommendedRoom').innerHTML = "We are sorry, the sensors in this location are not currently working";
                        }

                        for (let i = 0; i < info.length; i++) {
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

                        for (let i = 1; i < entries.length; i++) {
                            if (i !== 7 && suggestions.includes(Object.values(entries[i][1])[0].sensor_id)) {
                                locationSuggestions.push(Object.values(entries[i][1])[0].location);
                            } else if (i === 7) {
                                if (suggestions.includes(Object.values(entries[i][1])[0].StJames.s141.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].StJames.s141.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].StJames.s141.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].StJames.s141.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s142.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s142.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s143.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s143.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Middle.s139.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].Middle.s139.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Sekforde.s136.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].SekForde.s136.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Sekforde.s137.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].Sekforde.s137.location);
                                }
                                if (suggestions.includes(Object.values(entries[i][1])[0].Sekforde.s138.sensor_id)) {
                                    locationSuggestions.push(Object.values(entries[i][1])[0].Sekforde.s138.location);
                                }
                            }
                        }

                        if (locationSuggestions.length > 0) {
                            resolve(console.log('suggested locations are: '));
                            console.log(Object.values(locationSuggestions));
                            document.getElementById('spinner').style.opacity = 0;
                            setTimeout(() => {
                                document.getElementById('spinner').hidden = true;
                            }, 500)
                        } else {
                            resolve(console.log('no suggested rooms atm'));
                            document.getElementById('spinner').style.opacity = 0;
                            setTimeout(() => {
                                document.getElementById('spinner').hidden = true;
                            }, 500)
                        }
                    }
                }

                request.post(options, callback);
            }
        });
    });
}

export const checkLoudPromise = () => {
    return new Promise((resolve, reject) => {
        let username = process.env.REACT_APP_BERINGAR_API_USERNAME + ':' + process.env.REACT_APP_BERINGAR_API_PASSWORD;
        let encoded = (Buffer.from(username).toString('base64'));
        let x = 0;
        let arr;
        let url;
        let options;
        let callback;

        document.getElementById('spinner').hidden = false;
        setTimeout(() => {
            document.getElementById('spinner').style.opacity = 1;
        }, 100)

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
            case (workspace === 'SecondFloor.StJames'):
                sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[0].sensor_id;
                break;
            case (workspace === 'SecondFloor.Middle'):
                sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[5].sensor_id;
                break;
            case (workspace === 'SecondFloor.Sekforde'):
                sensorBeringar = Object.values(sensors.Beringar.SecondFloor.Office)[10].sensor_id;
                break;
        }

        callback = (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                let info = JSON.parse(body);
                currentNoise = info[0].noise;
            }
        }


        options = {
            url: 'https://console.beringar.co.uk/api/beta/sensorreading/sensorlocation/01084590-a5ed-49da-8050-068415355dae/last/1', //sensor ID needs to be changed fit room picked. Did not use it because LG2 sensor is not returning any values
            headers: {
                'Authorization': 'Basic ' + encoded
            },
            timeout: 7000
        };

        request.get(options, callback);

        for (let i = 0; i < beringarArray.length; i++) {
            if (i === beringarArray.length - 1) {
                url = 'https://console.beringar.co.uk/api/beta/sensorreading/sensorlocation/' + beringarArray[i].sensor_id + '/last/1';

                options = {
                    url: url,
                    headers: {
                        'Authorization': 'Basic ' + encoded
                    },
                    timeout: 7000
                };

                callback = (error, response, body) => {
                    if (error) {
                        console.log(error)
                    } else {
                        let info = JSON.parse(body);
                        if (info.length !== 0 && info[0].noise) {
                            if (info[0].noise < currentNoise) {
                                if (conditions.Louder === false) {
                                    beringarArray.forEach((element) => {
                                        if (info[0].sensorlocationcurrent == element.sensor_id) {
                                            if (!locationSuggestions.includes('2fo') && element.location === '2fo') {
                                                locationSuggestions.push(element.location);
                                            } else if (element.location !== '2fo') {
                                                locationSuggestions.push(element.location);
                                            }
                                        }
                                    });
                                }
                            } else if (info[0].noise > currentNoise) {
                                if (conditions.Louder === true) {
                                    beringarArray.forEach((element) => {
                                        if (info[0].sensorlocationcurrent == element.sensor_id) {
                                            if (!locationSuggestions.includes('2fo') && element.location === '2fo') {
                                                locationSuggestions.push(element.location);
                                            } else if (element.location !== '2fo') {
                                                locationSuggestions.push(element.location);
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        resolve(console.log(locationSuggestions));
                        document.getElementById('spinner').style.opacity = 0;
                        setTimeout(() => {
                            document.getElementById('spinner').hidden = true;
                        }, 500);
                    }
                }

                request.get(options, callback);
            } else {
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
                                if (conditions.Louder === false) {
                                    beringarArray.forEach((element) => {
                                        if (info[0].sensorlocationcurrent == element.sensor_id) {
                                            if (!locationSuggestions.includes('2fo') && element.location === '2fo') {
                                                locationSuggestions.push(element.location);
                                            } else if (element.location !== '2fo') {
                                                locationSuggestions.push(element.location);
                                            }
                                        }
                                    });
                                }
                            } else if (info[0].noise > currentNoise) {
                                if (conditions.Louder === true) {
                                    beringarArray.forEach((element) => {
                                        if (info[0].sensorlocationcurrent == element.sensor_id) {
                                            if (!locationSuggestions.includes('2fo') && element.location === '2fo') {
                                                locationSuggestions.push(element.location);
                                            } else if (element.location !== '2fo') {
                                                locationSuggestions.push(element.location);
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        console.log(locationSuggestions);
                    }
                }

                request.get(options, callback);
            }
        }
        setTimeout(() => {
            resolve(console.log('timeout resolved'));
            document.getElementById('spinner').style.opacity = 0;
            setTimeout(() => {
                document.getElementById('spinner').hidden = true;
            }, 500);
        }, 7000)
    });
}

export const checkNaturalPromise = () => {
    return new Promise((resolve, reject) => {
        switch (true) {
            case (conditions.Natural === true && conditions.Artificial === false):
                if (rec === '2fo') {
                    resolve(locationSuggestions.push('cafe', 'um', 'um1', '2fw'));
                } else {
                    resolve(locationSuggestions.push('2fo-l', '2fo-r', 'cafe', 'um', 'um1', '2fw'));
                }
                console.log(locationSuggestions);
                break;
            case (conditions.Natural === false && conditions.Artificial === true):
                if (rec === '2fo') {
                    resolve(locationSuggestions.push('basement', 'um2', 'lg1', 'lg2', 'lg3', 'lg4'));
                } else {
                    resolve(locationSuggestions.push('2fo-m', 'basement', 'um2', 'lg1', 'lg2', 'lg3', 'lg4'));
                }
                console.log(locationSuggestions);
                break;
        }
    });
}