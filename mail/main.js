const nodemailer = require("nodemailer");
const main = {
  sendMail: async (mail, name) => {
    let mailOptions = {
      from: '"Recipe food Team" <nico.daddabbo7100@gmail.com>',
      to: `${mail}`,
      subject: "Password reset",
      text: "Hey there, your password has been reset",
      html: `<b> hey ${name}</b><br>You can reset your password here http://127.0.0.1:5173/user/resetpassword`,
    };

    let transporter = nodemailer.createTransport({
      //   host: "sandbox.smtp.mailtrap.io",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: 'efdf737ec42784', // generated ethereal user
      //     pass: '4691c0273f5c83', // generated ethereal password
      //   },
      service: "gmail",
      auth: {
        user: "nico.daddabbo7100@gmail.com",
        pass: "miuckyponpruumqn",
      },
    });
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },

  contact: async (subject,body, mail) => {
    console.log(subject, body, mail);

    let mailOptions = {
      from: "Recipe food team contact page",
      to: "nico.daddabbo7100@gmail.com",
      subject: `${subject}`,
      text: `${body}`,
      html: `<b>mail : ${mail} </b><br>${body}`,
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nico.daddabbo7100@gmail.com",
        pass: "miuckyponpruumqn",
      },
    })
    let info = await transporter.sendMail(mailOptions)
    return info
  }
};

module.exports = { main };
