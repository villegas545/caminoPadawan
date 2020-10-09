var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'caminopadawan2020@gmail.com',
    pass: 'Caminillo123'
  }
});

var mailOptions = async (req){
  from: 'caminopadawan@gmail.com',
  to: 'villegas545@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, funcionError);

function funcionError(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}
export default transporter;
