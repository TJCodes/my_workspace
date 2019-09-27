import request from 'request';

const apiCall = () => {
    request.post(process.env.SPACETI_API_WEBSITE_LOGIN + process.env.SPACETI_API_EMAIL + "&password=" + process.env.SPACETI_API_PASSWORD, (error, response, body) => {
        if (error) {
            return console.log(error);
        } 
        else {
            let info = JSON.parse(body);
            console.log(info.token);
            let token = (Buffer.from('token:' + info.token).toString('base64'));
            console.log(token);

            let options = {
                url: process.env.SPACETI_API_SMART,
                headers: {
                    'Authorization' : 'Basic ' + token
                },
                // body: {
                //     'type:' : '4',
                //     'datetime' : '2019-09-16T14:00:00.244514Z'
                // }
            };
        
            // function callback(error, response, body) {
            //     if(error) {
            //         return console.dir(error);
            //     } 
            //     else {
            //         info = JSON.parse(body);
            //         console.dir(info[0]);
            //         // id = JSON.stringify(info);
            //         // console.log(info.coordinates);
        
            //         res.writeHead(200, {'Content-Type': 'application/json'});
            //         res.write(body);
            //         res.end();
        
            //     }
            // }

            // request.post(options, callback);
        }
    })
}

exports.apiCall = apiCall;