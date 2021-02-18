const express = require('express')
const bodyPareser = require('body-parser')
const send = require('./module/sendEmail')
const fileUpload = require('express-fileupload')

const app = express()

app.use(bodyPareser.json())
app.use(fileUpload())

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile('index')
})

app.post('/send',async (req,res)=>{

    const { email, title, text } = req.body
        
    let mailOptions = {
        from: 'sendfiletokindle@gmail.com',
        to: email,
        subject: title,
        text: text
    }
    
    await send(mailOptions, cb)

    function cb(error, info){
        console.log(error, info)
        if(error === null){
          res.json({ status: 'ok' })    
        }else{
            res.json({ status: 'error',  error})
        }
    }
})

app.post('/upload', (req,res)=>{

    let uploadPath;
    let file;

    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No file were uploaded.')
    }

    file = req.files.fileUpload

    uploadPath = __dirname + '/uploadPath/' + file.name

    file.mv(uploadPath, (err)=>{
        if(err){
            return res.status(500).send(err)
        }else{
            res.send('File uploaded')
        }
    })

})

app.listen(3000, ()=>{
    console.log('Server on running')
})