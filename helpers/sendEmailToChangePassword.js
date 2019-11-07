const mailer = require('nodemailer');
require('dotenv').config();

const {tokenForRefreshPassword} = require('../helpers');

module.exports = async (user) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: process.env.EMAIL,
        to: `${user.email}`,
        subject: 'Change password',
        html: buildTemplate(user)
    });
    return info.response;
};

function buildTemplate(user) {
    let token = tokenForRefreshPassword({user});
    const html =
        `<h1> Password change </h1>
         <br>
         Someone wants to change password on localhost:3000.
         <br>
         If its you please click 
         <form action="http://localhost:3000/user/password?t=${token}&password=666&passwordCopy=666" method="post">
         <input type="submit" value="here"> 
         `;
    return html;
}
