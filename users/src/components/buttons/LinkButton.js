import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './buttonStyles';

const LinkButton = (props) => {
  const classes = useStyles();
  return (
    <>
      <Button
        size="large"
        borderRadius="10"
        variant="contained"
        color={props.color}
        className={classes.userDetailsButton}
        onClick={() => props.buttonClick()}
        component={props.component}
        to={props.to}
      >
        {props.title}
      </Button>
    </>
  );
};

export default LinkButton;
