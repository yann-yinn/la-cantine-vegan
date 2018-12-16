// npm install twilio
// const twilio = require('twilio');
/*
const headers = {
  "Access-Control-Allow-Origin": process.env.FRONT_BASE_URL,
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = (event, context, callback) => {
  const payload = JSON.parse(event.body)
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Your Account Sid and Auth Token from twilio.com/console
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
      body: payload.message,
      from: process.env.TWILIO_AUTH_TEL_NUMBER,
      to: payload.to
    })
    .then(response => callback(null, {
      statusCode: 200,
      headers,
      body: response
    })).catch(e => {
      callback(e)
    })
    .done();
};
*/
