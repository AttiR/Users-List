import { Box } from '@material-ui/core';

import React from 'react';
import UserDetailsCard from '../components/Cards/UserDetailsCard';
import useStyles from '../Styles'

const UserDetailsScreen = () => {
  const classes = useStyles()
  return (
    <Box className={classes.section}>
      <UserDetailsCard />
    </Box>
  );
};

export default UserDetailsScreen;
