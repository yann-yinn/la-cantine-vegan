// npm install @sendgrid/mail
// npm install dotenv

require('dotenv').config()
import sgMail from '@sendgrid/mail'

const headers = {
  "Access-Control-Allow-Origin": process.env.FRONT_BASE_URL,
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = (event, context, callback) => {
  // using SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  const payload = JSON.parse(event.body)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'yann@yineo.fr',
    from: payload.email,
    subject: 'La cantine vegan - formulaire de contact',
    text: payload.message,
    html: payload.message,
  };
  sgMail.send(msg).then(r => {
    callback(null, {
      statusCode: 200,
      headers,
      body: 'OK'
    })
  }).catch(e => {
    callback(e)
  })
};