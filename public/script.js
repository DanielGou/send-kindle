const form = document.getElementById('form')
form.addEventListener('submit', sendFormEmail)

async function sendFormEmail(e){
    e.preventDefault()

    const email = document.getElementById('email').value
    const title = document.getElementById('title').value
    const text = document.getElementById('text').value

    const result = await fetch('/send',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email,
            title,
            text,
        })
    }).then(res => res.json())

    if(result.status === 'ok'){
        alert('Success')
    }else{
        alert(result.error)
    }
}