const nodemailer = require("nodemailer");
const {SMTP_ADDRESS, SMTP_MAIL, SMTP_PASSWORD, SMTP_PORT } = process.env
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
      service: "gmail",
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASSWORD,
      },
    });
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },

  contact: async (subject,body, mail) => {
    let mailOptions = {
      from: `"Contact page" <${mail}>`,
      to: "nico.daddabbo7100@gmail.com",
      subject: `${subject}`,
      text: `${body}`,
      html: `<b>mail : ${mail} </b><br>${body}`,
    }

    let transporter = nodemailer.createTransport({
      host: SMTP_ADDRESS,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASSWORD,
      },
    })
    let info = await transporter.sendMail(mailOptions)
    return info
  }
};

module.exports = { main };
