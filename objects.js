function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

Book.prototype.getInfo = function(){
    console.log(`This book is ${this.title} by ${this.author}`)
}

let book1 = new Book("Grapes of Wrath", "John Steinbeck", 500)
let book2 = new Book("The Cyberiad", "Stanislaw Lem", 200)
let book3 = new Book("The Paper Menagerie", "Ken Liu", 180)

book3.getInfo()

let books = []

function addBook(book){
    books.push(book)
}

addBook(book1)
addBook(book2)
addBook(book3)

console.log(books)

function searchBookTitle(title){
    found = books.find(book => book.title === title)
    console.log(found.getInfo())
}

function searchBookAuthor(author){
    found = books.find(book => book.author === author)
    console.log(found.getInfo())
}

searchBookTitle("The Cyberiad")
searchBookAuthor("Ken Liu")

books2 = books.filter((book) => book.pages > 300);

console.log(books2)

books.map((book)=>{book.title=`Title: ${book.title}`});
books.map((book)=>{book.author=`Author: ${book.author}`});

console.log(books)

/*--------------------------------------------------------------------------*/

function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

Account.prototype.deposit = function(depAmt){
    this.balance += depAmt
    console.log(`New Balance is: ${this.balance}`)
}

Account.prototype.withdraw = function(witAmt){
    this.balance -= witAmt
    console.log(`New Balance is: ${this.balance}`)
}

let account1 = new Account(1, 100, "Dan")

account1.deposit(50)
account1.withdraw(50)

Account.prototype.compound = function(rate, time){
    compint = (this.balance) * Math.pow(Math.E, (rate * time))
    console.log(`Your compound interest is: ${compint.toFixed(2)}`)
}

account1.compound(.05,20)