export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const READ_BOOK = 'READ_BOOK';
export const DELETE_BOOKS = 'DELETE_BOOKS';
export const ADD_BOOK_ASYNC = 'ADD_BOOK_ASYNC';
export const EDIT_BOOK_ASYNC = 'EDIT_BOOK_ASYNC';

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = book => ({
  type: EDIT_BOOK,
  payload: book,
});

export const readBook = id => ({
  type: READ_BOOK,
  payload: id,
});

export const deleteBooks = ids => ({
  type: DELETE_BOOKS,
  payload: ids,
});

export const addBookAsync = book => ({
  type: ADD_BOOK_ASYNC,
  payload: book,
});

export const editBookAsync = book => ({
  type: EDIT_BOOK_ASYNC,
  payload: book,
});
