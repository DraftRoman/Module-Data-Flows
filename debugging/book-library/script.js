let myLibrary = [];

window.addEventListener("load", () => {
  preSet();
  render();
});

function preSet() {
  if (myLibrary.length == 0) {
    myLibrary.push(
      new Book("Robison Crusoe", "Daniel Defoe", "252", true),
      new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    ));
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (isFormValid()) {
    let book = new Book(title.value, author.value, Number(pages.value), check.checked);
    myLibrary.unshift(book);
    cleanForm()
    render();
  } else {
    alert("Please fill all fields and make sure that pages is a positive number!");
  }
}
function cleanForm() {
  title.value = "";
  author.value = ""; 
  pages.value = "";
  check.checked = false;
}
function isFormValid() {
  return !(
    title.value == null ||
    title.value == "" ||
    author.value == null ||
    author.value == "" ||
    isNaN(pages.value) == null ||
    pages.value <= 0 ||
    pages.value == ""
  );
}

class Book {
constructor(title, author, pages, wasRead ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead  = wasRead;
  }
}

function render() {
  let table = document.getElementById("display");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  myLibrary.forEach((book, index) => {
    const row = table.insertRow(-1);
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;
    const statusCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);
    const statusBtn = document.createElement("button");
    statusBtn.className = "btn btn-success";
    statusBtn.innerText = book.wasRead ? "Yes" : "No";
    statusBtn.addEventListener("click", () => {
      book.wasRead = !book.wasRead;
      render();
    });
    statusCell.appendChild(statusBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      render();
    });
    deleteCell.appendChild(deleteBtn);
  });
}