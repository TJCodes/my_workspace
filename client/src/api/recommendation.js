import request from 'request';

export const apiCall = () => {
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

                    //TODO - GO THROUGH MDB DATABASE AND ADD ID FIELD

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

            request.get('https://cloud.mongodb.com/v2/5d83872879358e6f2a1dd462#metrics/replicaSet/5d8388e08598c61924fac778/explorer/test/sensors/')
            .on('response', function(response) {
                console.log(response.statusCode); // 200
                console.log(response.headers['content-type']) // 'image/png'
  })

            let workspace = document.getElementById('workspace').value;

            let options_mdb = {
                url: process.env.REACT_APP_SPACETI_API_SMART
                    + currentDate,
                headers: {
                    'Authorization': 'Basic ' + token
                }
            };
        }
    });
}


// module.exports = {
//     apiCall: apiCall
// }

