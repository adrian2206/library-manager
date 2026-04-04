const myLibrary = [
    { id: "a3f9b2c1-1234-4d56-8901-abcdef123456", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", pages: 310, read: true },
    { id: "b7c2d4e5-5678-4f90-1234-fedcba654321", title: "1984", author: "George Orwell", genre: "Dystopian", pages: 328, read: true },
    { id: "c1e3f5a7-9012-4b34-5678-123456abcdef", title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", pages: 412, read: false },
    { id: "d4a6b8c0-3456-4c78-9012-abcdef789012", title: "The title of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", pages: 662, read: true },
    { id: "e2f8d1b3-7890-4e12-3456-654321fedcba", title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", pages: 311, read: false },
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