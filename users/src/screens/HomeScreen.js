import React from 'react';
import Intro from '../components/headerComponents/Intro';
import UsersCard from '../components/bodyComponents/UsersCard';
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
