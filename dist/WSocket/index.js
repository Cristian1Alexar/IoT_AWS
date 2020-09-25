const WebSocket = require('ws');
var awsIot = require('aws-iot-device-sdk');

const wss = new WebSocket.Server({ port: 8080 });

const device = awsIot.device({
    keyPath: './IoT-AWS/6a1d209608-private.pem.key', //dirección al archivo .pem.key 
    certPath: './IoT-AWS/6a1d209608-certificate.pem.crt', //dirección al archivo .pem.crt 
    caPath: './IoT-AWS/AmazonRootCA1.pem', //dirección al archivo .pem
    host: 'a3cmgvrmcjz3ua-ats.iot.us-east-2.amazonaws.com', 
    clientId: 'ESP8266-hello-world',
    region: 'us-east-2',
  });

  
  device
  .on('connect', function () {
      device.subscribe('outTopic');
      console.log('connect');
  });  

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        device.publish('esp8266', message);
    });

    device
        .on('message', function (topic, payload) {
            console.log('message', topic, payload.toString());
            ws.send(payload.toString());
        });


});