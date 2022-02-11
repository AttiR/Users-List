import React, { useEffect, useState } from 'react';

import { CssBaseline, Grid, Container } from '@material-ui/core';
import useStyles from '../Styles';

import { getUsersData } from './networking/HttpRequests';
import UserCard from './userCards/UserCard';

const UsersCard = () => {
  const clases = useStyles();

  const [users, setUsers] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchingUsers = async () => {
      setUsers(await getUsersData(url));
      console.log(getUsersData(url));
    };

    fetchingUsers();
  }, [url]);

  return (
    <>
      <CssBaseline />
      <Container className={clases.cardGrid} maxWidth="md">
        <Grid container spacing={6}>
          {users.map((user) => {
            return <UserCard user={user} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default UsersCard;
