import Navigation from "../../Modules/Navigation.js";
import Books from "../../Modules/Books.js";

const awesomeBooks = new Books();
const form = document.querySelector("#add-book");
const navMenu = document.querySelectorAll(".navBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector("#title");
  const bookAutor = document.querySelector("#autor");

  if (bookTitle.value.trim() !== "" && bookAutor.value.trim() !== "") {
    const bookValues = {
      autor: bookAutor.value,
      title: bookTitle.value,
    };
    awesomeBooks.newBook(bookValues);
    awesomeBooks.showBooks();
    bookTitle.value = "";
    bookAutor.value = "";
  }
});

const remove = (index) => {
  awesomeBooks.deleteBook(index);
};
remove(-1);
awesomeBooks.showBooks();

navMenu.forEach((nav) => {
  nav.addEventListener("click", () => {
    Navigation(nav.getAttribute("id"));
  });

  //   Navigation(nav.getAttribute("id"));
});
