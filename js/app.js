let username = document.getElementById('typeText');
let password = document.getElementById('typePassword');
let login = document.querySelector('.btn');
let form = document.getElementById('form')
let loader = document.getElementById('loader');
let navigation = document.querySelector('.navigation');
let container = document.querySelector('.container-content');
let testimonial = document.querySelector('.testimonial')
let footer = document.querySelector('.footer');

login.addEventListener('click', e => {
    if(username.value != 'johndoe' && password.value != 'johndoe' ){
        alert('Please enter correct username and password!')
        e.preventDefault()
    } else {
    testimonial.style.opacity = '0.2'
    testimonial.style.transition = '1.2'
    testimonial.style.position = 'relative'
    container.style.opacity = '0.2';
    container.style.transition = '1.2s'
    container.style.position = 'relative'
    loader.style.position = 'absolute'
    loader.style.display = 'block'

   setTimeout(() =>{
    window.location.href = "search.html";
    console.log('timeout executed...');
   },3000 );
    }
    
    
}) 





