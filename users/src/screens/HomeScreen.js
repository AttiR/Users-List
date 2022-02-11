import React from 'react';
import Intro from '../components/header/Intro';
import UsersCard from '../components/UsersCard';
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
