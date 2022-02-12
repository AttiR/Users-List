import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import useStyles from './introStyles';

const Intro = ({primaryText, secondaryText}) => {
  const clases = useStyles();
  return (
    <div className={clases.container}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
        {primaryText}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
         {secondaryText}
        </Typography>
      </Container>
    </div>
  );
};

export default Intro;
