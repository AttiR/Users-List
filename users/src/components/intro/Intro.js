import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import useStyles from './introStyles';

const Intro = () => {
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
          Users List App
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          The App will help to manage the All Users Details
        </Typography>
      </Container>
    </div>
  );
};

export default Intro;
