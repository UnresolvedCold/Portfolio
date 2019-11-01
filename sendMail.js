const nodemailer = require('nodemailer');
var CONFIG = require('./config.json');

var maillist = [
    'unresolved.shubham@gmail.com',
    'coldboy1998@gmail.com',
    'f20170712@goa.bits-pilani.ac.in',
  ];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'cold.schwifty@gmail.com',
            pass: 'imkvxtxwymfbjbqk'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
});



 const SendMail=(name,email,subject,message,cb) =>
 {
    const mailOptions = {
        from: `${email} <Portfolio>`, // sender address
        to: maillist, // list of receivers
        subject: `${name} wants to contact you`, // Subject line
        html: `<p>${name} contacted you through your portfolio</p>
        <p>Subject: ${subject}</p>
        <p>Email: ${email}</p>
        <p> ${message}</p>
        `// plain text body
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if(err)
          cb(error,null);
        else
          cb(null,data)
     });
 }

 module.exports = SendMail;