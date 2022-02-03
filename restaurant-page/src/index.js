import './style.css';
import './contactus.css';
import './menu.css';
import ghImg from './images/GitHub-Mark-32px.png';

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
    
        const githubImg = new Image();
        githubImg.src = ghImg;
        githubImg.setAttribute('id','github-img');
        const anchor = document.createElement('a');
        anchor.href = "https://github.com/umtince/Odin-Project-Solutions/tree/main/restaurant-page";
        anchor.appendChild(githubImg);
        ul.appendChild(anchor);

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

