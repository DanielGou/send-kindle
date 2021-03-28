const path = require('path')


const extTypeRequire = [
    '.doc',
    '.docx',
    '.rtf',
    '.htm',
    '.html',
    '.txt',
    '.jpg',
    '.gif',
    '.bmp',
    '.png',
    '.pdf',
    '.mobi',
    '.rtf',
    '.prc',
    '.psz',
    '.azw'
]

async function verifyTypeFile(uploadPath, cb){

    let ext = path.extname(uploadPath).toLowerCase()

    const result =  extTypeRequire.find( function (element) {
        return element == ext
    })

    if(result){
        return cb(null, true)
    }else{
        cb('Error: No file supported!')
    }
}

module.exports = verifyTypeFile