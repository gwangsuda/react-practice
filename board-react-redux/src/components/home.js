import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}></div>
      <Typography variant="h3" gutterBottom>
        React Redux CRUD Samples
      </Typography>
      <Typography variant="body1" gutterBottom></Typography>
    </>
  );
};

export default Home;
