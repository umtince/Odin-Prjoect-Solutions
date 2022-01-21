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

class Book{
    constructor(name, author, pageNumber, isRead){
        this.name = name;
        this.author = author;
        this.pageNumber = pageNumber;
        this.isRead = isRead;
    }

    get IsRead(){
        return this.isRead;
    }

    set IsRead(newIsRead){
        this.isRead = newIsRead;
    }
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
    displayMyLibraryOnPage();
    hideAddBookDiv();
    clearInputFields();
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

    bookCardsDiv.innerHTML = ""; //clears the div after new book is submitted in form element

    for(let bookObj of myLibrary)
    {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class","card");

        let bookCardUnorderedList = document.createElement("ul");

        for(let prop in bookObj)
        {
            if(Object.prototype.hasOwnProperty.call(bookObj,prop) && prop !== "isRead") //to avoid prototype functions of objects ending up in list
            {
                let li = document.createElement("li");
                li.textContent = bookObj[prop];
                bookCardUnorderedList.appendChild(li);
            }
        }
        
        let deleteBookButton = document.createElement("button");
        deleteBookButton.textContent = "Delete Book";
        deleteBookButton.setAttribute("type","button");
        deleteBookButton.setAttribute("class","delete-book-button");
        deleteBookButton.addEventListener("click",()=>{
            let pos = myLibrary.findIndex((x)=>{
                return JSON.stringify(x) === JSON.stringify(bookObj);
            });

            bookCard.remove();
            myLibrary.splice(pos,1);
        });
    
        let toggleIsReadButton = document.createElement("button");
        toggleIsReadButton.textContent = isReadToString(bookObj);
        changeIsReadButtonColor(toggleIsReadButton,bookObj.IsRead);
        toggleIsReadButton.setAttribute("type","button");
        toggleIsReadButton.setAttribute("class","toggle-is-read-button");
        toggleIsReadButton.addEventListener("click",()=>{
            bookObj.IsRead = (!bookObj.IsRead);
            toggleIsReadButton.textContent = isReadToString(bookObj);
            changeIsReadButtonColor(toggleIsReadButton,bookObj.IsRead);
        });

        bookCard.appendChild(bookCardUnorderedList);
        bookCard.appendChild(toggleIsReadButton);
        bookCard.appendChild(deleteBookButton);
        bookCardsDiv.appendChild(bookCard);
    }
}

function clearInputFields(){
    titleInput.value="";
    authorInput.value="";
    pageNumberInput.value="";
    isReadInput.checked = false;
}

function isReadToString(obj){
    return (obj.IsRead) ? "Read" : "Not read";
}

function changeIsReadButtonColor(referenceToButton,isReadStatus){
    if(isReadStatus)
    {
        referenceToButton.style.backgroundColor = "#0E9F6E";
    }
    else
    {
        referenceToButton.style.backgroundColor = "#E01E37";
    }
}