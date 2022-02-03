import contactImg from './images/sebastian-coman-photography-eBmyH7oO5wY-unsplash2.jpg';
import './contactus.css';

const divContent = document.getElementById('content');

export default function createContactUsPage(){
    createContactContainer();
}

function createContactContainer(){
    const contactContainerDiv = document.createElement('div');

    const myContactImg = new Image();

    myContactImg.src = contactImg;
    myContactImg.alt = "contact page image";
    myContactImg.id = 'contact-img';

    contactContainerDiv.appendChild(myContactImg);

    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.setAttribute('id','contact-info');

    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id','location');
    const telephoneDiv = document.createElement('div');
    telephoneDiv.setAttribute('id','telephone');


    const lh2 = document.createElement('h2');
    lh2.innerText = 'Location';
    lh2.setAttribute('class','contact-h2');
    locationDiv.appendChild(lh2);
    const lh3 = document.createElement('h3');
    lh3.setAttribute('class','contact-h3');
    lh3.innerText = '1735 Shinn Street New York';
    locationDiv.appendChild(lh3);

    const th2 = document.createElement('h2');
    th2.innerText = 'Telephone';
    th2.setAttribute('class','contact-h2');
    telephoneDiv.appendChild(th2);
    const th3 = document.createElement('h3');
    th3.setAttribute('class','contact-h3');
    th3.innerText = '219-999-999';
    telephoneDiv.appendChild(th3);

    contactInfoDiv.appendChild(locationDiv);
    contactInfoDiv.appendChild(telephoneDiv);

    contactContainerDiv.appendChild(contactInfoDiv);

    divContent.appendChild(contactContainerDiv);
}