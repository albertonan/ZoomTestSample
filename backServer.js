const express = require("express");
const app = express();
const https = require('https');
const cors = require('cors')
app.use(express.json())
app.use(cors());

var baseURL = 'https://localhost:8080'

app.post('/login', function (req, res) {

    

    var options = {
        host: `zoom.us`,
        path: `/oauth/token?grant_type=authorization_code&code=${req.body.code}&redirect_uri=${baseURL+req.body.redirectURL}`,
        method: 'POST',
        headers: { 'Authorization': req.headers.authorization }
    };

    https.get(options, (resp) => {
        let data = '';

        // a data chunk has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // complete response has been received.
        resp.on('end', () => {
            console.log(resp.headers)
            res.send(data);
        });

    })

});

app.get('/users/:userId/meetings', function (req, res) {
    var options = {
        host: `api.zoom.us`,
        path: `/v2/users/${req.params.userId}/meetings`,
        method: 'GET',
        headers: { Authorization: req.headers.authorization, 'Content-Type': "application/json" }
    };

    console.log(options)

    https.get(options, (resp) => {
        let data = '';
        // a data chunk has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // complete response has been received.
        resp.on('end', () => {
            res.send(data);
        });

    })

});


app.post('/users/:userId/meetings', function (req, res) {

    const data = JSON.stringify(req.body)

    var options = {
        host: `api.zoom.us`,
        path: `/v2/users/${req.params.userId}/meetings`,
        method: 'POST',
        headers: { Authorization: req.headers.authorization, 'Content-Type': "application/json", 'Content-Length': data.length },

    };

    var req = https.request(options, (resp) => {
        let data = '';
        // a data chunk has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // complete response has been received.
        resp.on('end', () => {
            res.send(data);
        });

    })

    req.write(data);
    req.end()

});

app.post('/signature', function (req, res) {

    const API_KEY = 'CIgtVGg3Tvu-9TNZM4R4Dg'
    const API_SECRET = "qixK0jiF2FPYFBvfni8OCSL8OsXQYo94rIRu"

    var data = req.body

    const crypto = require('crypto') // crypto comes with Node.js

    function generateSignature(apiKey, apiSecret, meetingNumber, role) {

        // Prevent time sync issue between client signature generation and zoom 
        const timestamp = new Date().getTime() - 30000
        const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
        const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
        const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

        return signature
    }

    // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
    res.send({signature: generateSignature(API_KEY, API_SECRET, data.meeting, data.role)})

});

app.get('/basicAuth', (req, res)=>{
    let appID = 'JFdAIYn_R8yQI2w9y2xgQ'
    let appSecret = 'oHOQSk59HHHp8nkJGKNyFehE4EGbUki0'
    let basicAppAuth = Buffer.from(appID + ':' + appSecret).toString('base64')
    res.send({basicAuth: basicAppAuth,
            appID: appID,
            baseURL: baseURL})
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});