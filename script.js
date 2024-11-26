const myLibrary = [];

function book(name, author) {
  (this.name = name), (this.author = author);
}

function addBook() {
  let newBook = new book("Harry Potter- The prisoner of Azkaban", "J.K.Rowling");
  myLibrary.push(newBook);
}

console.log(addBook(), myLibrary);
// console.log(myLibrary);
