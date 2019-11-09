const mailer = require('nodemailer');
require('dotenv').config();

const {tokenForRefreshPassword} = require('../helpers');

module.exports = async (user_mail) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS   //16 symbols application pass, can get in google account
        }
    });

    const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: user_mail,
        subject: 'Change password',
        html: buildTemplate(user_mail)
    });
    return info.response;
};

function buildTemplate(user) {
    let refreshToken = tokenForRefreshPassword({user});
    const html =
        `<h1> Password change </h1>
         <br>
         Someone wants to change password on localhost:3000.
         <br>
         If its you please click 
         <form action="http://localhost:3000/user/password/${refreshToken}" method="post">
         <input type="submit" value="here"> 
         `;
    return html;
}
