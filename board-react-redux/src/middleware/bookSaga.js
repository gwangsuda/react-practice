import { takeEvery, put, all } from 'redux-saga/effects';
import { getTime, format } from 'date-fns';

function appendData(book) {
  const curDate = new Date();
  const id = getTime(curDate);
  const regDate = format(curDate, 'yyyy-MM-dd HH:mm:ss');

  book.id = id;
  book.regDate = regDate;
  book.publicationDate = format(book.publicationDate, 'yyyy-MM-dd');

  return book;
}

function* addBookWrapper(action) {
  yield put({
    type: 'ADD_BOOK',
    payload: appendData(action.payload),
  });
}

export function* watchAddBook() {
  yield takeEvery('ADD_BOOK_ASYNC', addBookWrapper);
}

function modifyRegDate(book) {
  book.publicationDate = format(book.publicationDate, 'yyyy-MM-dd');
  return book;
}

function* editBookWrapper(action) {
  yield put({
    type: 'EDIT_BOOK',
    payload: modifyRegDate(action.payload),
  });
}

export function* watchEditBook() {
  yield takeEvery('EDIT_BOOK_ASYNC', editBookWrapper);
}

export default function* bookSaga() {
  yield all([watchAddBook(), watchEditBook()]);
}
