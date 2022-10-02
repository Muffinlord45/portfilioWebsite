if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    switch_to_dark();
}
else{
    switch_to_light();
}


function switch_to_dark(){
    localStorage.setItem('theme', 'dark');
     console.log("dark");
       if(window.location.href == "https://violettides.github.io/"){

       document.getElementById("meLight").classList.add('visually-hidden');
       document.getElementById("meDark").classList.remove('visually-hidden');
       }
    
    document.body.classList.add('dark');
    document.body.classList.remove('light');
}

function switch_to_light(){
    localStorage.setItem('theme', 'light');
    console.log("light");
    if(window.location.href == "https://violettides.github.io/"){

       document.getElementById("meLight").classList.remove('visually-hidden');
       document.getElementById("meDark").classList.add('visually-hidden'); 
    }
       
    
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}


