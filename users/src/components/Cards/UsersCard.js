import React, { useEffect, useState } from 'react';

import { CssBaseline, Grid, Container } from '@material-ui/core';
import useStyles from './cardStyles';

import { getUsersData } from '../networking/HttpRequests';
import UserCard from './UserCard';

const UsersCard = () => {
  const clases = useStyles();

  const [users, setUsers] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchingUsers = async () => {
      setUsers(await getUsersData(url));
      
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
