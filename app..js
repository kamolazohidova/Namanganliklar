let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let orangeBtn = document.querySelector('.orange-button')


orangeBtn.addEventListener('click', function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})
overlay.addEventListener('click', function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
document.addEventListener('keydown', function(e) {
    console.log(e);
    
})