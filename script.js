const myLibrary = [];

const bookContainer = document.getElementById("book-container");
const modalCont = document.getElementById("modal-container");
const addBookBtn = document.getElementById("new-book");
const closeModal = document.getElementById("close-btn");
const checkboxChecked = document.getElementById("read-status");

const form = document.getElementById("form");

function book(name, author, readStatus = false) {
  (this.name = name), (this.author = author), (this.readStatus = readStatus);
}

function addBook(title, author, readStatus = false) {
  let newBook = new book(title, author, readStatus);
  myLibrary.push(newBook);
}

addBook("Harry Potter and the philosophers stone", "J.K.Rowling");
addBook("Harry Potter Prisoner of Azkaban", "J.K.Rowling");

//Mapping the book
myLibrary.map((book) => {
  const newBook = document.createElement("li");
  newBook.innerHTML = `
  <p class='book-name'>${book.name}</p>
  <p class='book-author'>${book.author}</p>
  <label>
    <input type="checkbox" class="read-status" ${book.readStatus ? "checked" : ""}>
    Read
  </label>
  `;
  newBook.setAttribute("id", `${book.name}`);
  bookContainer.appendChild(newBook);

  newBook.querySelector(".read-status").addEventListener("change", (event) => {
    book.readStatus = event.target.checked;
  });
});
const readStatus = checkboxChecked.checked;

let inputBooksName = "";
let inputAuthorsName = "";

const addBookNameInput = document
  .getElementById("book-name")
  .addEventListener("change", (event) => {
    inputBooksName = event.target.value;
  });
const addBookAuthorInput = document
  .getElementById("book-author")
  .addEventListener("change", (event) => {
    inputAuthorsName = event.target.value;
  });

addBookBtn.addEventListener("click", () => {
  modalCont.classList.remove("hide");
  modalCont.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modalCont.classList.add("hide");
});

const formBtn = document.getElementById("add-book").addEventListener("click", (event) => {
  event.preventDefault();

  // Dynamically fetch the readStatus value from the checkbox
  const readStatus = checkboxChecked.checked;

  // Add the new book with the correct readStatus
  addBook(inputBooksName, inputAuthorsName, readStatus);

  // Create the new book element with the checkbox
  const newBook = document.createElement("li");
  newBook.innerHTML = `
    <p class='book-name book'>${inputBooksName}</p>
    <p class='book-author'>${inputAuthorsName}</p>
    <label>
      <input type="checkbox" class="read-status" ${readStatus ? "checked" : ""}>
      Read
    </label>
  `;
  newBook.setAttribute("id", `${crypto.randomUUID()}`);
  bookContainer.appendChild(newBook);

  // Add event listener to the new checkbox to update readStatus
  newBook.querySelector(".read-status").addEventListener("change", (event) => {
    const book = myLibrary.find((b) => b.name === inputBooksName);
    if (book) {
      book.readStatus = event.target.checked;
    }
  });

  console.log(myLibrary);

  // Close the modal and clear the form
  const closeModal = () => {
    modalCont.classList.add("hide");
  };

  const clearForm = () => {
    form.reset();
  };

  clearForm();
  setTimeout(closeModal(), 3000);
});
