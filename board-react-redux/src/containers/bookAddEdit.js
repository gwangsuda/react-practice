import { addBookAsync, editBookAsync, readBook } from 'actions/bookActions';
import BookAddEdit from 'components/bookAddEdit';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    selectedBook: state.bookReducer.selectedBook,
  };
};

const mapDispatchToProps = { addBookAsync, editBookAsync, readBook };

const SampleBookAddEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookAddEdit);

export default SampleBookAddEdit;
