import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

const BookAddEdit = ({
  match,
  selectedBook,
  addBookAsync,
  editBookAsync,
  history,
}) => {
  const classes = useStyles();

  const initialBookState = {
    title: '',
    author: '',
    isbn10: '',
    isbn13: '',
    publicationDate: new Date(),
  };

  const [book, setBook] = useState(initialBookState);

  useEffect(() => {
    if (match.params.isbn !== 'add') {
      setBook(selectedBook);
      // this.setState(readBook(match.params.isbn));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = name => event => {
    setBook({ ...book, [name]: event.target.value });
  };

  function handleDateChange(date) {
    setBook({ ...book, publicationDate: date });
  }

  function handleAddEdit() {
    match.params.isbn === 'add' ? addBookAsync(book) : editBookAsync(book);

    history.push('/books');
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>
      <Divider variant="middle" />
      <form className={classes.container} autoComplete="off">
        <TextField
          required
          autoFocus
          id="title"
          name="title"
          label="Title"
          onChange={handleChange('title')}
          value={book.title}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="author"
          name="author"
          label="Author"
          onChange={handleChange('author')}
          value={book.author}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="isbn10"
          name="isbn10"
          label="ISBN10"
          onChange={handleChange('isbn10')}
          value={book.isbn10}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="isbn13"
          name="isbn13"
          label="ISBN13"
          onChange={handleChange('isbn13')}
          value={book.isbn13}
          className={classes.textField}
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="pubDate"
            label="Publication Date"
            format="yyyy-MM-dd"
            value={book.publicationDate}
            onChange={handleDateChange}
            className={classes.textField}
            KeyboardButtonProps={{
              'aria-label': 'publication date',
            }}
          />
        </MuiPickersUtilsProvider>
      </form>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleAddEdit}
        className={classes.button}
      >
        Save
        <SaveIcon className={classes.rightIcon} />
      </Button>
    </>
  );
};

export default BookAddEdit;
