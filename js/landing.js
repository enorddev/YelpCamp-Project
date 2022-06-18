let loader = document.getElementById('loader');
let navigation = document.querySelector('.navigation');
let container = document.querySelector('.container-content');
let footer = document.querySelector('.footer');
let btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    container.style.opacity = '0.2';
    container.style.transition = '1.2s'
    container.style.position = 'relative'
    loader.style.position = 'absolute'
    loader.style.display = 'block'

   setTimeout(() =>{
    window.location.href = "loggedin.html";
    console.log('timeout executed...');
   },3000 );
    
})

    

