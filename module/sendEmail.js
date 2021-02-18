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

        // if(error){
        //     return response(error)
        // }else{
        //     return response(info.response)
        // }
    })
    
}

module.exports = send