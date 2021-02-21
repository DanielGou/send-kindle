
// async function sendFormEmail(e){
//     e.preventDefault()

//     const email = document.getElementById('email').value

//     const result = await fetch('/sendEmail',{
//         method:"POST",
//         headers:{
//             'Content-Type': "application/json"
//         },
//         body: JSON.stringify({
//             email
//         })
//     }).then(res => res.json())

//     if(result.status === 'ok'){
//         alert('Success')
//     }else{
//         alert(result.error)
//     }
// }
