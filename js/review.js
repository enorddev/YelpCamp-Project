let textArea = document.getElementById('textAreaExample');
let commentBtn = document.querySelector('.btn');

commentBtn.addEventListener('click', e => {
    if(textArea.value === '' || textArea.value === null) {
        alert('Please enter a campground review!')
        e.preventDefault()
    } else {
        alert('Your review has been successfully posted!')
    }
    
}) 