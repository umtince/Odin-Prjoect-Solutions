import createHomePage from './homepage.js';
import createContactUsPage from './contactus.js';
import './style.css';

window.onload = function(){
    loadCleanPage.execute();
    createHomePage();
}

const divContent = document.getElementById('content');


const changePage = (function(){

    function loadHomePage(){
        loadCleanPage.execute();
        createHomePage();
    }

    function loadMenuPage(){
        console.log("menupage!");
    }

    function loadContactUsPage(){
        loadCleanPage.execute();
        createContactUsPage();
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

