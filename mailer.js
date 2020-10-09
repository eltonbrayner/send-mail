const nodemailer = require("nodemailer");
require("dotenv/config")

const transporter = nodemailer.createTransport({
  host: process.env.host,
  port: parseInt(process.env.port),
  secure: false,
  auth: {
    user: process.env.user,
    pass: process.env.pass
  },
})

function sendMail(to, subject, text){
  const mailOptions = {
  from: process.env.user,
  to: to,
  subject: subject,
  text: text
  }

  return transporter.sendMail(mailOptions, (err, info) => { 
    if (err) {
      return console.log(err)
    }
    console.log(info)
  })
}

module.exports = sendMail