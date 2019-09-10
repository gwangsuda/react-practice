import { readBook, deleteBooks } from 'actions/bookActions';
import BookList from 'components/bookList';
import { connect } from 'react-redux';

export const getBookList = store => store.bookReducer.books;

export const getBookListAsc = store =>
  getBookList(store)
    ? getBookList(store).sort((a, b) => (a.id > b.id ? 1 : -1))
    : [];

export const getBookListDesc = store =>
  getBookList(store)
    ? getBookList(store).sort((a, b) => (a.id < b.id ? 1 : -1))
    : [];

const mapStateToProps = state => {
  return {
    books: getBookListDesc(state),
  };
};

const mapDispatchToProps = { readBook, deleteBooks };

const SampleBookList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);

export default SampleBookList;
