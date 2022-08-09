const togBut = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('links')[0]

togBut.addEventListener('click', () => {
    nav.classList.toggle('active')
})
