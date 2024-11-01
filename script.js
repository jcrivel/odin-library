const myLibrary = []

//object classes
//this contructor will create a new Book object for the library
function Book(title, author, pages, readOrNot){
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot
}






//functions

//this function will initialize a new book object with details provided by the user
function addBookToLibrary(title, author, pages, readOrNot){
    const newBook = new Book(title,author,pages,readOrNot)
}


function loopThroughLibrary(){
    
}