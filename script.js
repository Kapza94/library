const myLibrary = [];

const bookContainer = document.getElementById("book-container");
const modalCont = document.getElementById("modal-container");
const addBookBtn = document.getElementById("new-book");

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
  newBook.innerHTML = `<p class='book-name'>${book.name}</p><p class='book-author'>${book.author}</p>`;
  newBook.setAttribute("id", `${book.name}`);
  bookContainer.appendChild(newBook);
  //   console.log(newBook);
});

let inputBooksName = "";
let inputAuthorsName = "";

const addBookNameInput = document
  .getElementById("book-name")
  .addEventListener("change", (event) => {
    inputBooksName = event.target.value;
    // console.log(inputBooksName);
  });
const addBookAuthorInput = document
  .getElementById("book-author")
  .addEventListener("change", (event) => {
    inputAuthorsName = event.target.value;
    // console.log(inputAuthorsName);
  });

addBookBtn.addEventListener("click", () => {
  modalCont.classList.add("show");
});

const formBtn = document.getElementById("add-book").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(inputBooksName, inputAuthorsName);
  addBook(inputBooksName, inputAuthorsName);

  const newBook = document.createElement("li");
  newBook.innerHTML = `<p class='book-name book'>${inputBooksName}</p><p class='book-author'>${inputAuthorsName}</p>`;
  newBook.setAttribute("id", `${inputBooksName}`);
  bookContainer.appendChild(newBook);

  console.log(myLibrary);

  const closeModal = () => {
    modalCont.classList.add("hide");
  };

  setTimeout(closeModal(), 3000);
});
