const inputArea = document.getElementById('inputArea')
const file = document.getElementById('File')

function changeFile() {     
    inputArea.innerHTML = file.files.item(0).name
}