const nodemailer = require("nodemailer");
const main =  {
    sendMail: async() => {
        let mailOptions = {
          from: '"Recipe food Team" <nico.daddabbo7100@gmail.com>',
          to: "nico.daddabbo7100@gmail.com",
          subject: "Confirm your account",
          text: "Hey there, please confirm your account to continue",
          html: `<b>Hey there! </b><br>Confirm account here http://127.0.0.1:5173/user/profil/48`,
        };
      
        let transporter = nodemailer.createTransport({
        //   host: "sandbox.smtp.mailtrap.io",
        //   port: 587,
        //   secure: false, // true for 465, false for other ports
        //   auth: {
        //     user: 'efdf737ec42784', // generated ethereal user
        //     pass: '4691c0273f5c83', // generated ethereal password
        //   },
        service: 'gmail',
        auth: {
          user: 'nico.daddabbo7100@gmail.com',
          pass: 'miuckyponpruumqn'
        }
        });
        let info = await transporter.sendMail(mailOptions);
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    }
}

module.exports = {main}
