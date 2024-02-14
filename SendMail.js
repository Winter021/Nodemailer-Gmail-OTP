const nodemailer = require('nodemailer');
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER, // sender gmail and password
      pass: process.env.APP_PASSWORD,
    },
  });

const mailOptions = {
    from :{
        name : "Winter",
        address:process.env.USER
    },
    to: ["cantfindmailadress@gmail.com"],
    subject :"Email Using nodemailer and gmail",
    text:"Hello world",
    html:"<b>This is HTML<b/>",
    attachments  :[
        {
            filename:'test.pdf',
            path:path.join(__dirname,'test.pdf'),
            contentType:'application/pdf'
        },
        {
            filename:'sample.jpg',
            path:path.join(__dirname,'test.pdf'),
            contentType:'image/jpg'
        }

    ]
}

const sendMail=async(transporter, mailOptions) =>{
    try{
        const transpresp  = await transporter.sendMail(mailOptions);
        console.log("EMAIL SENT SUCCESS : ", transpresp);
    }
    catch(err)
    {
        console.log("Sendmail.js /Send mail fucntion err", err)
    }
}

sendMail(transporter,mailOptions);
