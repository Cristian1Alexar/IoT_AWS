const WebSocket = require('ws');
var awsIot = require('aws-iot-device-sdk');
const wss = new WebSocket.Server({ port: 8080 });
const db = require('./db.js');
const Customer = db.customers;
const Sensor = db.sensors;
var counter = 200;
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: true }');
});

const device = awsIot.device({
    keyPath: './IoT-AWS/6a1d209608-private.pem.key',
    certPath: './IoT-AWS/6a1d209608-certificate.pem.crt',
    caPath: './IoT-AWS/AmazonRootCA1.pem',
    host: 'a3cmgvrmcjz3ua-ats.iot.us-east-2.amazonaws.com',
    clientId: 'ESP8266-hello-world',
    region: 'us-east-2',
});


device
    .on('connect', function () {
        device.subscribe('outTopic');
        device.subscribe('sensor');
        console.log('connect');
    });

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        device.publish('esp8266', message);
    });

    device
        .on('message', function (topic, payload) {
            console.log('topic ' + topic);
            const body = JSON.parse(payload.toString());
            if (counter > 0)
            {
                counter = counter - 1; 
            }
            if (topic == 'sensor') {
                if (counter > 0)
                {
                    counter = counter - 1; 
                }
                if (counter == 0)
                {
                    Sensor.create({
                        value: body.photocell
                    }).then(sensor => {
                        console.log(sensor)
    
                    }).catch(error => console.log(error));
                    counter = 200; 
                    console.log('Ya');
                    console.log(counter);
                }  
            }
            if (topic == 'outTopic') {
                Customer.create({
                    message: "message",
                    actuator: "door",
                }).then(customer => {
                    // Send created customer to client
                    console.log(customer)
                }).catch(error => console.log(error))
            }
            ws.send(payload.toString());
        });


});