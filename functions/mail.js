const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // using SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'yann@yineo.fr',
    from: 'yann.boisselier@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  return sgMail.send(msg);
};