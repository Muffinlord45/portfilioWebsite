document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.getElementById("sun").classList.toggle('visually-hidden')
    document.getElementById("moon").classList.toggle('visually-hidden')
})