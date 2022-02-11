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
  Avatar
} from '@material-ui/core';
import useStyles from '../../Styles';

import { useNavigate } from 'react-router-dom';
import { useAxiosGet } from '../Hooks/HttpRequests';

const UsersCard = () => {
  const clases = useStyles();
  const navigate = useNavigate();

  const url = 'https://jsonplaceholder.typicode.com/users';

  // from Hooks components
  let users = useAxiosGet(url);

  return (
    <>
      <CssBaseline />
      <Container className={clases.cardGrid} maxWidth="md">
        <Grid container spacing={6}>
          {users.map((user) => {
            return (
              <Grid key={user.id} item xs={12} sm={6} md={4}>
                <Card className={clases.card}>
                  <CardContent className={clases.CardContent}>
                  <Avatar style={{width:'100px', height:'100px'}} >{user.name[0]}</Avatar>
                    <Typography
                      variant="h6"
                      gutterBottom
                      
                      align='center'
                    >
                      {user.name}
                      
                    </Typography>

                    <Typography>
                      {user.email}
                    </Typography>
                    <Typography>
                       {user.phone}
                    </Typography>
                 
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      color="primary"
                      onClick={(e) => {
                        navigate(`/${user.id}`);
                      }}
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
