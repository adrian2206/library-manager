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

function addBookToLibrary(title, author, genre, pages, read) {  
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

const modal = document.querySelector(`#add-book-input`);
const showModal = document.querySelector(`#btn-add-book`);
const modalForm = modal.querySelector(`form`);
const closeModal = modal.querySelector(`#add-book-input-cancel`);
const submitModal = modal.querySelector(`#add-book-input-submit`);

showModal.addEventListener(`click`, () => {
    modal.showModal();
});

closeModal.addEventListener(`click`, () => {
    modalForm.reset();
    modal.close();
    submitModal.disabled = true;
});

modalForm.addEventListener(`input`, () => {
    if(modalForm.checkValidity()) {
        submitModal.disabled = false;
    } else {
        submitModal.disabled = true;
    }
} );

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = modalForm.querySelector('#title').value;
    const author = modalForm.querySelector('#author').value;
    const genre = modalForm.querySelector('#genre').value;
    const pages = modalForm.querySelector('#pages').value;
    const read = modalForm.querySelector('#read-book').value;

    addBookToLibrary(title, author, genre, pages, read);
    displayLibrary();

    modalForm.reset();
    modal.close();
});