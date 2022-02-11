import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  CssBaseline,
  Typography,
  Card,
  Grid,
  Container,
  CardContent,
 
  Button,
} from '@material-ui/core';
import useStyles from '../Styles';
import { Link } from 'react-router-dom';
import {  getUsersData } from '../components/networking/HttpRequests';

const UserDetailsScreen = () => {
  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState([])
  const classes = useStyles();


  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect (() => {
    const fetchingUsers = async()=>{
     setUser(await getUsersData(url));
    
   }

   fetchingUsers()
  
 }, [url]);
  

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Button color="primary" component={Link} to="/">
          Go Back
        </Button>

        <Grid
          container
          spacing={6}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent}>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: 'orange' }}
                >
                  {user.name}
                </Typography>

                <Typography>
                  <strong>type:</strong> {user.username}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserDetailsScreen;
