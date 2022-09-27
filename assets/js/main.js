document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    
    if(localStorage.theme == 'light'){   
        localStorage.setItem('theme', 'dark');
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    }
    else if(localStorage.theme == 'dark'){
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
