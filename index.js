const express = require('express')
const bodyPareser = require('body-parser')
const send = require('./module/sendEmail')
const fileUpload = require('express-fileupload')
const deleteFile = require('./module/deleteFile')
const verifyTypeFile = require('./module/verifyTypeFile')

const app = express()

app.use(bodyPareser.json())
app.use(fileUpload())

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile('index')
})


app.post('/sendEmail', async (req,res)=>{

    let uploadPath;
    let file;

    const email = req.body.email

    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No file were uploaded.')
    }

    file = req.files.fileUpload

    uploadPath = __dirname + '/uploadPath/' + file.name
    

    await verifyTypeFile(uploadPath, async (err)=>{
        if(err){
            return res.status(500).send(err)
        }else{

            let mailOptions = {
                from: 'sendfiletokindle@gmail.com',
                to: email,
                subject: file.name,
                text: file.name,
                attachments:[
                    {  
                        path: uploadPath
                    }
                ]
            }

            send(mailOptions, cb)
        }
    })


    await file.mv(uploadPath, (err)=>{
        if(err){
            return res.status(500).send(err)
        }
    })


    function cb(error, info){
        console.log(error, info)
        if(error === null){
            deleteFile(uploadPath)
            res.redirect('/success')  
        }else{
            deleteFile(uploadPath)
            res.json({ status: 'error',  error})
        }
    }

})

app.get('/success', (req,res)=>{
    res.sendFile('/success')
})

app.listen(3000, ()=>{
    console.log('Server on running')
})