import { Router } from "express";
import nodeMailer from 'nodemailer';

const router = Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.post('/', (req, res) => {
    const subject = 'Serviciu';
    const message = `Utilizatorul ${req.body.username} cu email: ${req.body.email} si numarul de telefon ${req.body.phone}.<br> Subiectul: ${subject}.<br> Mesaj: ${req.body.message}`

    let transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'dumitruwebdev@gmail.com',
        pass: 'vvtz fqwp nsbk fraw'
      }
    });
    
    let mailOptions = {
      from: 'dumitruwebdev@gmail.com',
      to: 'dumitruwebdev@gmail.com',
      subject: subject,
      html: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({message: 'Sent email'});
});

export default router;