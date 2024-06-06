const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'YOUR_EMAIL@gmail.com', // replace with your email
            pass: 'YOUR_PASSWORD', // replace with your email password
        },
    });

    const mailOptions = {
        from: email,
        to: 'YOUR_EMAIL@gmail.com', // replace with the email to receive the messages
        subject: `Contact form submission from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ success: 'Message sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
