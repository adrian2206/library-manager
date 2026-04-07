const myLibrary = [];

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

Book.prototype.switchReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, genre, pages, read) {  
    myLibrary.push(new Book(title, author, genre, pages,read));
}

function displayBook(book) {
    const display = document.querySelector('#display');

    const newSection = document.createElement('section');
    newSection.classList.add('book');

    const title = document.createElement('p');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const genre = document.createElement('p');
    genre.textContent = book.genre;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const read = document.createElement('select');
    read.classList.add('update-read');
    const optYes = document.createElement('option');
    optYes.classList.add('update-read-option');
    optYes.value = 'true';
    optYes.textContent = 'Yes';
    const optNo = document.createElement('option');
    optNo.classList.add('update-read-option');
    optNo.value = 'false';
    optNo.textContent = 'No';
    read.append(optYes, optNo);   
    read.value = book.read ? 'true' : 'false';
    read.addEventListener('change', () => {
    book.read = read.value === 'true';
    });

    const remove = document.createElement('button');
    remove.classList.add('btn-remove');
    remove.textContent = 'X';

    remove.addEventListener('click', () => {
        const bookIndex = myLibrary.findIndex(b => b.id === book.id);
        myLibrary.splice(bookIndex, 1);
        newSection.remove();
    });

    newSection.append(title, author, genre, pages, read, remove);
    display.append(newSection);
}

const modal = document.querySelector(`#add-book-input`);
const showModal = document.querySelector(`#btn-add-book`);
const modalForm = modal.querySelector(`form`);
const closeModal = modal.querySelector(`#add-book-input-cancel`);
const submitModal = modal.querySelector(`#add-book-input-submit`);

showModal.addEventListener(`click`, () => {
    modal.showModal();
});

modal.addEventListener('close', () => {
    modalForm.reset();
    modal.close();
    submitModal.disabled = true;
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
    const read = modalForm.querySelector('#read-book').value === 'true';

    addBookToLibrary(title, author, genre, pages, read);
    displayBook(myLibrary[myLibrary.length - 1]);

    modalForm.reset();
    modal.close();
});
