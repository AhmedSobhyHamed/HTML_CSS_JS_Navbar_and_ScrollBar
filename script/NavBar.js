class NavBar {
    #navMenuList = null;
    #navMenuButton = null;
    #navMenuContent = null;
    constructor(id){
        this.#navMenuList = document.querySelectorAll(`${id}.nav .nav-menu .menu-content > *`);
        this.#navMenuButton = document.querySelector(`${id}.nav .nav-menu .menu-btn`);
        this.#navMenuContent = document.querySelector(`${id}.nav .nav-menu .menu-content`);
        this.#toggleMenu();
        this.#viewWidthEvent();
        // set the margin to start position
        this.#show();
        window.innerWidth <= 768 ? this.#hide() : null;
    }
    // public methods
    // enable active on hover
    enableHoverActive = (_=>{
        this.#navMenuList.forEach(e=>e.addEventListener('mouseover',_=>e.classList.add('active')));
        this.#navMenuList.forEach(e=>e.addEventListener('mouseout',_=>e.classList.remove('active')));
    });
    // enable active on click
    enableClickActive = (_=>{
        this.#navMenuList.forEach(e=>e.addEventListener('click',_=>{
            this.#navMenuList.forEach(e=>e.classList.remove('active'));
            e.classList.add('active');
        }));
    });
    
    // private methods
    // toggle menu button
    #toggleMenu = (_=>{
        this.#navMenuButton.addEventListener('click',_=>{
            if(this.#navMenuContent.style.marginTop === '0px'){
                console.log(this.#navMenuContent.offsetHeight);
                this.#navMenuContent.style.marginTop = -1 * this.#navMenuContent.offsetHeight + 'px';
                setTimeout(_=>{this.#navMenuContent.classList.remove('view')},300);
            }
            else {
                this.#navMenuContent.classList.add('view');
                setTimeout(_=>{this.#navMenuContent.style.marginTop = 0},300);
            }
        });

    });
    // add view on large screen
    #viewWidthEvent = (_=>{
        window.innerWidth > 768 ? this.#navMenuContent.classList.add('view'):this.#navMenuContent.classList.remove('view');
        window.addEventListener('resize',_=>{
            window.innerWidth > 768 ? this.#show() : this.#hide();
        });
    });
    // scroll up with hide 
    #hide =(_=>{
        this.#navMenuContent.style.marginTop = -1 * this.#navMenuContent.offsetHeight + 'px';
        this.#navMenuContent.classList.remove('view');
    });
    // scroll down with show
    #show = (_=>{
        this.#navMenuContent.classList.add('view');
        this.#navMenuContent.style.marginTop = 0;
    });
}

export default NavBar;