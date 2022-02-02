import './style.css'
import bgImg from './images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg'

const divContent = document.getElementById('content');

export default function createHomePage(){
    createHeader();
    createImgContainer();
}

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
        ul.appendChild(li);
    }

    nav.appendChild(h1);
    nav.appendChild(ul);

    divHeader.appendChild(nav);
    divContent.appendChild(divHeader);
}

function createImgContainer(){
    const divImgContainer = document.createElement('div');
    divImgContainer.setAttribute('id','img-container');

    const myBgImg = new Image();
    myBgImg.src = bgImg;
    myBgImg.alt = "background image";

    divImgContainer.appendChild(myBgImg);

    const divMottoContainer = document.createElement('div');
    divMottoContainer.setAttribute('id','motto-container');

    const h2 = document.createElement('h2');
    h2.setAttribute('id','motto');
    h2.innerText = "Extraordinary tastes at extraordinary prices";

    divMottoContainer.appendChild(h2);

    divImgContainer.appendChild(divMottoContainer);

    divContent.appendChild(divImgContainer);
}