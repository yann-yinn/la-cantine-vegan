import sgMail from '@sendgrid/mail'

exports.handler = (event, context, callback) => {
  // using SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  console.log("DEBUG :" + process.env.SENDGRID_API_KEY)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'yann@yineo.fr',
    from: 'yann.boisselier@gmail.com',
    subject: 'Sending with SendGrid is Fun from localhost',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg).then(r => {
    callback(null, {
      statusCode: 200,
      body: 'OK'
    })
  }).catch(e => {
    callback(e)
  })
};