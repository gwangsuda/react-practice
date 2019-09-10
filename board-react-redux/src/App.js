import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Menu from 'components/menu';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from 'components/home';
import About from 'components/about';
import SampleBookList from 'containers/bookList';
import SampleBookAddEdit from 'containers/bookAddEdit';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Menu />
      <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/book/:isbn" component={SampleBookAddEdit} />
        <Route path="/books" component={SampleBookList} />
      </main>
    </div>
  );
}

export default App;
