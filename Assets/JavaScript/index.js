import Navigation from "../../Modules/Navigation.js";
import Books from "../../Modules/Books.js";
import { DateTime } from "../../Modules/luxon.js";

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

navMenu.forEach((nav) => {
  nav.addEventListener("click", () => {
    Navigation(nav.getAttribute("id"));
  });
});

remove(-1);
awesomeBooks.showBooks();

const removeButton = document.querySelectorAll("button.removebtn");

removeButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    remove(btn.dataset.index);
  });
});
const twoDigits = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};

setInterval(() => {
  const now = DateTime.now();
  const showDate = `${now.toLocaleString(DateTime.DATE_FULL)} ${
    now.hour
  }:${twoDigits(now.minute)}:${twoDigits(now.second)} hrs.`;
  document.querySelector(".showDate").innerHTML = showDate;
}, 1000);
