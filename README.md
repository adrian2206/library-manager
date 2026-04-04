# library-manager
A simple yet functional web application to track your reading list. This project focuses on object-oriented programming basics, DOM manipulation, and maintaining a clean separation between data logic and UI display.

**FeaturesBook**

  Constructor & Objects: Every book is an object created using a constructor, stored within a central myLibrary array.
  Unique Identifiers: Each book is assigned a stable, unique ID using crypto.randomUUID() for reliable tracking.
  Dynamic Display: A dedicated function loops through the library and renders books as interactive "cards" on the page.
  Interactive Form: A "New Book" button triggers a form (utilizing the <dialog> element) to collect title, author, pages, and read status.
  State Management:
    Remove Books: Delete entries directly from the UI and the underlying data array.
    Toggle Read Status: Each book card has a button to switch between "Read" and "Not Read" using a prototype function.
  Data Attributes: DOM elements are linked to JS objects via data-attribute matching their unique IDs.

**Technical Highlights**

  Separation of Concerns: The logic for storing book data is kept distinct from the logic for rendering elements to the DOM.
  Event Handling: Implements event.preventDefault() to handle form submissions without page reloads.
  Prototypes: Uses prototype inheritance to share the toggleRead method across all book instances efficiently.

**How to Use**

  Add a Book: Click the "New Book" button and fill in the details.
  Track Progress: Use the toggle button on each card to update whether you've finished the book.
  Manage Library: Remove books you no longer wish to track using the "Remove" button.

**Note:** This project does not currently use persistent storage (localStorage or Databases); refreshing the page will reset the library to its initial state.
