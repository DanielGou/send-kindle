const express = require('express')
const send = require('./module/sendEmail')

const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.sendFile('index')
})

app.get('/send',async (req,res)=>{
    var response = await send()

    res.send(response)
})

app.listen(3000, ()=>{
    console.log('Server on running')
})