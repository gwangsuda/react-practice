import {
  ADD_BOOK,
  EDIT_BOOK,
  READ_BOOK,
  DELETE_BOOKS,
} from 'actions/bookActions';

const defaultState = {
  selectedBook: {},
  books: [
    {
      id: '1568075760365',
      title: '천년의 질문',
      author: '조정래',
      isbn10: '8965746825',
      isbn13: '9788965746829',
      publicationDate: '2019-06-11',
      regDate: '2019-09-08 09:01:02',
    },
    {
      id: '1568075793700',
      title: '사피엔스',
      author: '유발 하라리',
      isbn10: '8934972467',
      isbn13: '9788934972464',
      publicationDate: '2015-11-23',
      regDate: '2019-09-09 09:01:02',
    },
  ],
};

function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((item, index) => {
          if (item.id !== action.payload.id) {
            return item;
          }

          return {
            ...item,
            ...action.payload,
          };
        }),
      };
    case READ_BOOK:
      return {
        ...state,
        selectedBook: state.books.find(book => book.id === action.payload),
      };
    case DELETE_BOOKS:
      return {
        ...state,
        books: state.books.filter(
          (item, index) => !action.payload.includes(item.id),
        ),
      };
    default:
      return state;
  }
}

export default bookReducer;
