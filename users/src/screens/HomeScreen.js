import React from 'react';
import Intro from '../components/intro/Intro';
import UsersCard from '../components/Cards/UsersCard';


const HomeScreen = () => {
  return (
    <>
      <Intro  primaryText='Users List App' secondaryText=' The App Shows  the All Users Details such as Name, username, email, phone, address and business etc.' />
      <UsersCard />
    </>
  );
};

export default HomeScreen;
