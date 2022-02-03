import myMenu from './images/menu3.png';

const divContent = document.getElementById('content');

export default function createMenuPage(){
    createMenuContainer();
}

function createMenuContainer(){

    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.setAttribute('id','menu-container');

    const myMenuImg = new Image();
    myMenuImg.src = myMenu;
    myMenuImg.alt = "menu";
    myMenuImg.setAttribute('id','menu-img');

    menuContainerDiv.appendChild(myMenuImg);

    divContent.appendChild(menuContainerDiv);
}