const addBookBtn = document.querySelector("#add-book-button");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pageNumberInput = document.querySelector("#page-number-input");
const isReadInput = document.querySelector("#is-read-input");
const form = document.querySelector(".input");
const newBookBtn = document.querySelector("#new-book-button");
const toggleFormDiv = document.querySelector("#toggle-form-div");
const bookCardsDiv = document.querySelector("#book-cards-div");

let myLibrary = [];

function Book(name, author, pageNumber, isRead){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}

function hideAddBookDiv(){
    toggleFormDiv.style.visibility = "hidden";
    newBookBtn.style.visibility = "visible";
}

function showAddBookDiv(){
    toggleFormDiv.style.visibility = "visible";
    newBookBtn.style.visibility = "hidden";
}

document.addEventListener("click",(event)=>{
    
    if(event.target === newBookBtn){
        showAddBookDiv();
    }
    else if(event.target === toggleFormDiv){
        hideAddBookDiv();
    }
});


form.onsubmit = function(e){
    e.preventDefault();
    
    addBookToLibrary();
    console.log(myLibrary);
    displayMyLibraryOnPage();
    hideAddBookDiv();
}


function addBookToLibrary(){
    let newlyInputtedBook = createNewBook();
    
    if(!isExistsInLibrary(newlyInputtedBook))
    {
        myLibrary.push(newlyInputtedBook);
    }
}

function createNewBook(){
    return new Book(titleInput.value, authorInput.value, pageNumberInput.value, isReadInput.checked);
}

function isExistsInLibrary(book){
    return myLibrary.some((element) => {
        return JSON.stringify(element) === JSON.stringify(book);
    });
}

function displayMyLibraryOnPage(){
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class","card");
    let bookCardUnorderedList = document.createElement("ul");

    for(let prop in myLibrary[myLibrary.length-1])
    {
        let li = document.createElement("li");
        li.textContent = myLibrary[myLibrary.length-1][prop];
        bookCardUnorderedList.appendChild(li);
    }

    let deleteBookButton = document.createElement("button");
    deleteBookButton.textContent = "Delete Book";
    deleteBookButton.setAttribute("type","button");
    deleteBookButton.setAttribute("class","delete-book-button");
    deleteBookButton.addEventListener("click",()=>{
        //do smth
        console.log("cliks")
    });

    /**
     * TOGGLE ISREAD BUTTON
     * 
    */

    bookCard.appendChild(bookCardUnorderedList);
    bookCard.appendChild(deleteBookButton);
    bookCardsDiv.appendChild(bookCard);
}