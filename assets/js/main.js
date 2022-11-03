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
       document.getElementById("meLight").classList.add('hidden');
       document.getElementById("meDark").classList.remove('hidden');
       }
    
    document.body.classList.add('dark');
    document.body.classList.remove('light');
}

function switch_to_light(){
    if(window.location.href == "https://violettides.github.io/"){
       document.getElementById("meLight").classList.remove('hidden');
       document.getElementById("meDark").classList.add('hidden'); 
    }

    document.body.classList.remove('dark');
    document.body.classList.add('light');
}

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-light navbar-expand-md d-flex nav-border" style="padding-right: 12px;padding-left: 12px;margin-right: 40px;margin-left: 40px;padding-top: 8px;padding-bottom: 8px;">
    <div class="container-fluid"><a class="navbar-brand" href="#"><span style="color: var(--text-color);">RA</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-3"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" style="width: 30px;height: 30px;color: var(--text-color);">
                <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor"></path>
                <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor"></path>
                <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor"></path>
            </svg><span class="visually-hidden">Toggle navigation</span></button>
        <div class="collapse navbar-collapse" id="navcol-3">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/portfolioDirectory">Portfolio Directory</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            </ul><a class="btn btn-primary" role="button" href="/contact">Contact Me!</a>
        </div>
    </div>
</nav>`
    }
}

customElements.define('my-header', MyHeader)