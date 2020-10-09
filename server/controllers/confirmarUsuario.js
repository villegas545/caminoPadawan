import models from '../models';
var nodemailer = require('nodemailer');

const enviarEmail = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caminopadawan2020@gmail.com',
      pass: 'Caminillo123'
    }
  });
  var codigo = `El mensaje es ${Math.random()
    .toString(36)
    .slice(2)}${Math.random()
    .toString(36)
    .slice(2)}${Math.random()
    .toString(36)
    .slice(2)} `;
  var mailOptions = {
    from: 'villegas545@gmail.com',
    to: req.params.valor,
    subject:
      'Verificar dirección de correo electrónico para el club de programación',
    text: `¡Gracias por registrarte en el club de programación! Antes de que empecemos, tenemos que confirmar que eres realmente tú. Haz clic en el siguiente enlace para verificar tu correo electrónico: http://localhost:5000/verificacion/${codigo}`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(req.params.valor);
};

const validarcorreo = async (req, res) => {
  try {
    await models.User.findOne({
      where: { token: req.params.valor }
    }).then(function(datos) {
      if (!datos) {
        models.update(
          { estatus: 'clubProgramacion' },
          {
            where: {
              token: datos.token
            }
          }
        );
      } else {
        res.send('No encontrado');
      }
    });
    res.send('enviado');
  } catch (error) {
    res.status(500).send(error);
  }
};
export { enviarEmail, validarcorreo };
