if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
    switch_to_dark();
}
else{
    localStorage.setItem('theme', 'light');
    switch_to_light();
}


function switch_to_dark(){
       if(window.location.href == "https://violettides.github.io/"){
       document.getElementById("meLight").classList.add('visually-hidden');
       document.getElementById("meDark").classList.remove('visually-hidden');
       }
    
    document.body.classList.add('dark');
    document.body.classList.remove('light');
}

function switch_to_light(){
    if(window.location.href == "https://violettides.github.io/"){
       document.getElementById("meLight").classList.remove('visually-hidden');
       document.getElementById("meDark").classList.add('visually-hidden'); 
    }
       
    
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}

$(window).load(function() {
  // When the page has loaded
  $("body").fadeIn(1000);
});