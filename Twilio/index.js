require('dotenv').config();
const twilio = require("./twilio.env");

const accountSid = twilio.env.TWILIO_SID;
const authToken = twilio.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '************',
        from: '***********',
        body: 'Aprendi essa com o Carlos Francelino!',
    })
    .then(message => console.log(message))
    .catch(err => console.error(err));
