const myLibrary = [{
    title: "The Lord of the Rings",  
    author: "George R.R.Martin",
    pages: 740,
    readOrNot: false
} ]

loopThroughLibrary()
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
    myLibrary.push(newBook)
}


function loopThroughLibrary(){
    //creates table
    const table = document.createElement("table")
    table.border = "1"

    //creates header
    const tHead = table.createTHead()
    const headerRow = tHead.insertRow()
    
    headerRow.insertCell(0).textContent = "Title"
    headerRow.insertCell(1).textContent = "Author"
    headerRow.insertCell(2).textContent = "Number of Pages"
    headerRow.insertCell(3).textContent = "Read Previously?"


    //creates body
    const tBody = table.createTBody()

    //add data to body 
    myLibrary.forEach(function(book){
        const row = tBody.insertRow()
        row.insertCell(0).textContent = book.title
        row.insertCell(1).textContent = book.author
        row.insertCell(2).textContent = book.pages
        let rON = "";
        if(book.readOrNot === true){
            rON = "Yes"
        }else{
            rON = "No"
        }
        row.insertCell(3).textContent = rON
        
    })
    document.getElementById("bookList").appendChild(table)
}

//new book modal logic
const newBookModal = document.getElementById("newBookModal")
const newBookButton = document.getElementById("newBook")
const modalCloseButton = document.getElementById("modalCloseButton")
newBookModal.style.display = "none"

newBookButton.addEventListener("click", function(){
    newBookModal.style.display = "block"
})

modalCloseButton.addEventListener("click", function(){
    newBookModal.style.display = "none"
})


