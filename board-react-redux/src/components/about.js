import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}></div>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        react redux react-router react-redux material-ui prettier date-fns
        redux-saga
      </Typography>
    </>
  );
};

export default About;
