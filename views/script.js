const nameInputArea = document.getElementById('nameInputArea')
const file = document.getElementById('File')
const inputArea = document.getElementById('inputArea')

function changeNameFile() {     
    nameInputArea.innerHTML = file.files.item(0).name
}


inputArea.ondragover = function () { inputArea.style.borderColor ='#0c0 '; return false };
inputArea.ondragleave = function () { inputArea.style.borderColor = 'rgba(0, 0, 0, 0.213)'; return false };
inputArea.ondrop = function(e){
    e.preventDefault()
    
    inputArea.style.borderColor = 'rgba(0, 0, 0, 0.213)';

    file.files = e.dataTransfer.files

    changeNameFile()
}