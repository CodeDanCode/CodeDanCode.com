const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.APP_SERVER_PORT || 3001;
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/api/test',(req,res)=>{
    res.send(
        req.body.templateParams
    )
});

app.post('/api/auth', (req,res)=>{
    
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        }
    });

    let mailOptions = {
        from: `${req.body.templateParams.from_name} <${req.body.templateParams.email}>`,
        to: process.env.GMAIL_USERNAME,
        subject: req.body.templateParams.subject,
        text: `Name: ${req.body.templateParams.from_name},      Email Address: ${req.body.templateParams.email}

        ${req.body.templateParams.message}`,
    }

    transporter.sendMail(mailOptions, (error, result)=>{
        if(error){
            console.log("error "+ error);
        }else{
            console.log("Email sent successfully ", result);
            
        }
    })

    res.send("Message Sent");

})

app.listen(port,()=>{
    console.log(`server is listening at localhost:${port}`);
});