if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle('dark')
}

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){   
        localStorage.setItem('theme', 'dark');
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }
    else{
        localStorage.setItem('theme', 'light');
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }
    console.log(localStorage);
    document.getElementById("sun").classList.toggle('visually-hidden')
    document.getElementById("moon").classList.toggle('visually-hidden')
    
    document.getElementById("meDark").classList.toggle('visually-hidden')
    document.getElementById("meLight").classList.toggle('visually-hidden')
    
})


