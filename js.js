const myLibrary = [
    { id: "a3f9b2c1-1234-4d56-8901-abcdef123456", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 310, read: 'Yes' },
    { id: "c1e3f5a7-9012-4b34-5678-123456abcdef", title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", pages: 412, read: 'No' },
];

function Book(title, author, genre, pages,read) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, genre, pages,read) {  
    myLibrary.push(new Book(title, author, genre, pages,read));
}

function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++ ) {
        const display = document.querySelector('#display');

        const newSection = document.createElement('section');
        newSection.classList.add('book');

        const title = document.createElement('p');
        title.textContent = `${myLibrary[i].title}`;

        const author = document.createElement('p');
        author.textContent = `${myLibrary[i].author}`;

        const genre = document.createElement('p');
        genre.textContent = `${myLibrary[i].genre}`;

        const pages = document.createElement('p');
        pages.textContent = `${myLibrary[i].pages}`;

        const read = document.createElement('p');
        read.textContent = `${myLibrary[i].read}`;

        newSection.append(title, author, genre, pages, read);
        display.append(newSection);
    }
}