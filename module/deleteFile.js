const fs = require('fs')

function deleteFile(uploadPath){
    fs.unlink(uploadPath, (err)=>{
        if(err){
            console.log('erro delete')
            console.log(err)
        }
    })
}

module.exports = deleteFile;

