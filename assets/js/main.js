if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
     console.log("dark")
       document.getElementById("sun").classList.add('visually-hidden');
       document.getElementById("moon").classList.remove('visually-hidden');
       document.getElementById("meLight").classList.add('visually-hidden');
       document.getElementById("meDark").classList.remove('visually-hidden');
    
    document.body.classList.add('dark');
    document.body.classList.remove('light');
}
else{
    localStorage.setItem('theme', 'light');
    console.log("light")
       document.getElementById("sun").classList.remove('visually-hidden');
       document.getElementById("moon").classList.add('visually-hidden');
       document.getElementById("meLight").classList.remove('visually-hidden');
       document.getElementById("meDark").classList.add('visually-hidden');
    
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}


