// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(books, bookName) {
    return [...books, bookName];
}

function remove(books, bookName) {
    let list = [...books];
    const book_index = list.indexOf(bookName);

    if (book_index >= 0) {
        list.splice(book_index, 1);
        return list;
    }
}