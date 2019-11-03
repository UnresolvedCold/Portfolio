const nodemailer = require('nodemailer');

var maillist = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com'
  ];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: '***@gmail.com',
            pass: '***apppassword***'
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