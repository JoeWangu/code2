var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alexjohn19son97@gmail.com',
        pass: 'HotPoint123#'
    }
});

var mailOptions = {
    from: 'alexjohn19son97@gmail.com',
    to: 'joewn@duck.com, william.elijah500@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    // html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); 