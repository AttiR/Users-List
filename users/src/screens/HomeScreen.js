import React from 'react';
import Intro from '../components/header/Intro';
import UsersCard from '../components/UsersList';
import { CssBaseline } from '@material-ui/core';

const HomeScreen = () => {
  return (
    <>
    <CssBaseline/>
      <Intro />
      <UsersCard/>
    </>
  );
};

export default HomeScreen;
