let username = document.getElementById('typeText');
let password = document.getElementById('typePassword');
let login = document.querySelector('.btn');
let form = document.getElementById('form')

login.addEventListener('click', e => {
    if(username.value != 'johndoe' && password.value != 'johndoe' ){
        alert('Please enter correct username and password!')
        e.preventDefault()
    } else {
        alert('Welcome to the site')
    }
    
    
}) 