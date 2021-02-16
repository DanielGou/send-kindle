const nodemailer = require('nodemailer')

var mail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'SendFileToKindle@gmail.com',
        pass: 'ip18150290'
    }
})

var mailOptions = {
    from: 'sendfiletokindle@gmail.com',
    to: 'danielpraiadorosa@gmail.com',
    subject: 'Sending fur server',
    text: 'That is worked'
}

function send(){

    mail.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Email send: ' + info.response)
        }
    })
    
}

module.exports = send