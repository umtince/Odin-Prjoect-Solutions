const addBookBtn = document.querySelector("#add-book-button");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pageNumberInput = document.querySelector("#page-number-input");
const isReadInput = document.querySelector("#is-read-input");
const form = document.querySelector(".input");

let myLibrary = [];

function Book(name, author, pageNumber, isRead){
    this.name = name;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isRead = isRead;
}


form.onsubmit = function(e){
    e.preventDefault();
    
    addBookToLibrary();
    console.log(myLibrary);
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
