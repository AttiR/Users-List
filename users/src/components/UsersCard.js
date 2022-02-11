import React from 'react';

import {
  CssBaseline,
  Typography,
  Card,
  Grid,
  Container,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Box,
} from '@material-ui/core';
import useStyles from '../Styles';
import { useNavigate } from 'react-router-dom';
import { useGetUsers } from './hooks/HttpRequests';


const UsersCard = () => {
  const clases = useStyles();
  const navigate = useNavigate();

  const url = 'https://jsonplaceholder.typicode.com/users';

  // from Hooks components
  let users = useGetUsers(url);

  return (
    <>
      <CssBaseline />
      <Container className={clases.cardGrid} maxWidth="md">
        <Grid container spacing={6}>
          {users.map((user) => {
            return (
              <Grid key={user.id} item xs={12} sm={6} md={4}>
                <Card className={clases.card}>
                  <Avatar style={{ width: '100px', height: '100px' }}>
                    <Typography variant="h3">{user.name[0]}</Typography>
                  </Avatar>

                  <CardContent className={clases.CardContent}>

                  <Box style={{marginBottom:'20px'}}>
                  <Typography variant="h6" align="center">
                      {user.name}
                    </Typography>
                    <Typography align='center' color='textSecondary'>@{user?.username}</Typography>
                  </Box>
                 

                    <Typography align="center">
                      {' '}
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </Typography>
                 
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      borderRadius="10"
                      variant="contained"
                      color="secondary"
                      onClick={(e) => {
                        navigate(`/${user.id}`);
                      }}
                      className={clases.userDetailsButton}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default UsersCard;
