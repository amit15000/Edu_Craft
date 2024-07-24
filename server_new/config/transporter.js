const nodemailer = require("nodemailer");
require("dotenv").config();
exports.transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  // port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
