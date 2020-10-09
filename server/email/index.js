var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'caminopadawan@gmail.com',
    pass: 'Caminillo123'
  }
});

const enviarEmail = async (valor) => {  
  var mailOptions = {
    from: 'villegas545@gmail.com',
    to: valor,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export { enviarEmail };
