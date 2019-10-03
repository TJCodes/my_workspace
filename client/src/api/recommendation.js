import request from 'request';
import { sensors } from '../storage/sensors';

export const storageCall = () => {
    let workspace = document.getElementById('workspace').value;
    let sensor;

    switch (true) {
        case (workspace === 'LG2'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.LG2)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'LG3'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.LG3)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'LG4'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.LG4)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'UM'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.UM)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'UM1'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.UM1)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'UM2'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.UM2)[0];
            console.log(sensor.sensor_id);
            break;
        case (workspace === 'SecondFloor'):
            console.log(workspace);
            sensor = Object.values(sensors.Spaceti.Smart_Stone.SecondFloor)[0];
            console.log(sensor.sensor_id);
            break;
    }

    let i;

    for (i = 0; i < test.length; i++){
      if (test[i].sensor_id === 1558) {
        console.log('sensor found');
        break;
      }
      else if (i === test.length - 1 && test[i].sensor_id !== 1558) {
        console.log('not found bro');
      }
    }
}

export const apiCall = (value) => {
    request.post(process.env.REACT_APP_SPACETI_API_WEBSITE_LOGIN + process.env.REACT_APP_SPACETI_API_EMAIL + "&password=" + process.env.REACT_APP_SPACETI_API_PASSWORD, (error, response, body) => {
        if (error) {
            return console.log(error);
        }
        else {
            let info = JSON.parse(body);
            // console.log(info.token);
            let token = (Buffer.from('token:' + info.token).toString('base64'));
            // console.log(token);
            let currentDate = new Date();
            // console.log(currentDate.toISOString());

            let options_spaceti = {
                url: process.env.REACT_APP_SPACETI_API_SMART
                    + currentDate,
                headers: {
                    'Authorization': 'Basic ' + token
                }
            };

            function callback(error, response, body) {
                if (error) {
                    return console.dir(error);
                }
                else {
                    info = JSON.parse(body);
                    let i;
                    for (i = 0; i < info.length; i++) {
                        if (info[i].stone_id === 159) {
                            let chosenOne = info[i];
                            console.log(chosenOne);
                        }
                    }

                    //TODO - GRAB THE SENSOR FROM CURRENT ROOM THEY ARE IN

                    //TODO - CHANGE STATE DEPENDING ON ANSWERS FROM 3 QUESTIONS

                    //TODO - API CALL, GET RESULTS FOR RECOMMENDED ROOMS DEPENDING ON ANSWERS, RECOMMEND WORKSPACES BASED ON LOCATION OF SENSORS IN MDB DATABASE

                    console.log('onto the rest');
                    console.log(info);
                    // id = JSON.stringify(info);
                    // console.log(info.coordinates);

                    // res.writeHead(200, {'Content-Type': 'application/json'});
                    // res.write(body);
                    // res.end();

                }
            }

            request.post(options_spaceti, callback);
        }
    });
}


// module.exports = {
//     apiCall: apiCall
// }

