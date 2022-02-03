import bgImg from './images/nagendra-ts-fLUD9E7-l20-unsplash5.jpg'

const divContent = document.getElementById('content');

export default function createHomePage(){
    createImgContainer();
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