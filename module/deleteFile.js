const fs = require('fs')

function deleteFile(Path){
    fs.unlink(Path, (err)=>{
        if(err){
            console.log('erro delete')
            console.log(err)
        }
    })
}

module.exports = deleteFile;

