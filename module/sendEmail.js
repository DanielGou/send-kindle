const nodemailer = require('nodemailer')

var mail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'SendFileToKindle@gmail.com',
        pass: 'ip18150290'
    }
})

function send(mailOptions, cb){

    mail.sendMail(mailOptions, (error, info)=>{

        return cb(error, info)
    })
    
}

module.exports = send