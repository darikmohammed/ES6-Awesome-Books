export default class Books {
  constructor() {
    this.bookList = [];
  }
  #SetBooksList = (books) => {
    localStorage.setItem("Books", JSON.stringify(books));
  };

  #getBooksList = () => {
    const books = JSON.parse(localStorage.getItem("Books"));
    if (books) {
      return books;
    }
    return [];
  };
  newBook = (bookValues) => {
    this.booksList = this.#getBooksList();
    this.booksList.push(bookValues);
    this.#SetBooksList(this.booksList);
    document.querySelector("#add-new-book").style.display = "none";
    document.querySelector("#show-books").style.display = "flex";
  };

  deleteBook = (bookIndex) => {
    if (bookIndex !== null) {
      const books = this.#getBooksList();

      const bookRemoved = books.filter((item, key) => {
        if (key !== bookIndex) {
          return true;
        }
        return null;
      });
      this.#SetBooksList(bookRemoved);
      this.showBooks();
    }
  };
  showBooks = () => {
    const books = this.#getBooksList();
    const htmlbooks = document.querySelector(".books");
    htmlbooks.innerHTML = "";
    for (let i = 0; i < books.length; i += 1) {
      htmlbooks.innerHTML += `
          <div class="book">
          <h3>"${books[i].title}"</h3>
          <p><span class="by-span"> By </span> ${books[i].autor}</p>
          <button type="button" onClick= "remove(${i})" class='removebtn'>Remove</button>
          `;
    }
  };
}
