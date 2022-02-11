import React from 'react';
import useStyles from '../../Styles';
import { Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerWrap}>
      <Typography variant="h6" align="center" gutterBottom>
      &copy; Users List App 2022
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="textSecondary"
        gutterBottom
      >
        Pre Assignment Task
      </Typography>
    </footer>
  );
};

export default Footer;
