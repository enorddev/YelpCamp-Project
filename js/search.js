function myFunction(){

let search = document.getElementById('search');
let filter = input.value.toUpperCase();
let value = document.getElementsByTagName('h2');

search.addEventListener('input', filter)

for(i = 0 ; i < value.length; i++) {
    m = value[i].querySelector('.card-title')[0];
    txtValue = m.textContent || m.innerText;
    if(txtValue.toUpperCase(indexOf(filter)) > 1){
        search.style.display = '';
    } else {
        search.style.display = 'none';
    }
    
}
}