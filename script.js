const myLibrary = [];

const bookContainer = document.getElementById("book-container");

function book(name, author) {
  (this.name = name), (this.author = author);
}

function addBook(title, author) {
  let newBook = new book(title, author);
  myLibrary.push(newBook);
}
addBook("Harry Potter and the philosophers stone", "J.K.Rowling");
addBook("Harry Potter Prisoner of Azkaban", "J.K.Rowling");

myLibrary.map((book) => {
  const newBook = document.createElement("li");
  newBook.textContent = `${book.name} ${book.author}`;
  newBook.setAttribute("id", `${book.name}`);
  bookContainer.appendChild(newBook);
  console.log(newBook);
});

// console.log(myLibrary);
