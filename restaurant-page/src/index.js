import './style.css';
import './contactus.css';
import './menu.css';

window.onload = function(){
    loadCleanPage.execute();
    
    import('./homepage.js')
        .then(module =>{
            module.default();
        })
}

const divContent = document.getElementById('content');


const changePage = (function(){

    function loadHomePage(){
        loadCleanPage.execute();

        import('./homepage.js')
        .then(module =>{
            module.default();
        })
    }

    function loadMenuPage(){
        loadCleanPage.execute();
        
        import('./menu.js')
        .then(module =>{
            module.default();
        })
    }

    function loadContactUsPage(){
        loadCleanPage.execute();
        
        import('./contactus.js')
        .then(module =>{
            module.default();
        })
    }

    return [loadHomePage,loadMenuPage,loadContactUsPage];
})();


const loadCleanPage = (function(){
    function createHeader(){
        const divHeader = document.createElement('div');
        divHeader.setAttribute('id','header');
    
        const h1 = document.createElement('h1');
        h1.innerText = 'Sonradan Gourmet';
    
        const nav = document.createElement('nav');
        nav.setAttribute('id','nav');
    
        const ul = document.createElement('ul');
    
        const navbarArray = ['Home','Menu','Contact Us'];
    
        for (let i=0; i<3; i++) {
            let li = document.createElement('li');
            li.innerText = navbarArray[i];
            li.addEventListener('click',changePage[i]);
            ul.appendChild(li);
        }
    
        nav.appendChild(h1);
        nav.appendChild(ul);
    
        divHeader.appendChild(nav);
        divContent.appendChild(divHeader);
    }
    
    function clearPage(){
        divContent.innerHTML = '';
    }

    function execute(){
        clearPage();
        createHeader();
    }

    return{
        execute
    }
})();

