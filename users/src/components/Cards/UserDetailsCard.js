import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CssBaseline,
  Typography,
  Card,
  Grid,
  Container,
  CardContent,
} from '@material-ui/core';
import useStyles from './cardStyles';
import { Link } from 'react-router-dom';
import { getUsersData } from '../networking/HttpRequests';
import LinkButton from '../buttons/LinkButton';

const UserDetailsCard = () => {
  const classes = useStyles();

  const params = useParams();
  const id = params.id;
  const [user, setUser] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    const fetchingUser = async () => {
      setUser(await getUsersData(url));
    };
    fetchingUser();
  }, [url]);

  return (
    <>
      {user ? (
        <Container maxWidth="md">
          <CssBaseline />
          <LinkButton
            title="Go Back"
            color="secondary"
            component={Link}
            to="/"
          />
          <Container className={classes.cardGrid} maxWidth="xs">
            <Grid
              container
              spacing={6}
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Grid item className={classes.Cardwrap}>
                <Card className={classes.detailsCard}>
                  <CardContent className={classes.CardContent}>
                    <Typography gutterBottom>
                      <strong>Name: </strong>
                      {user.name}
                    </Typography>

                    <Typography gutterBottom>
                      <strong>User Name:</strong> {user.username}
                    </Typography>
                    <Typography gutterBottom>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                    </Typography>
                    <Typography gutterBottom>
                      <strong>Phone:</strong> {user.phone}
                    </Typography>
                    <Typography gutterBottom>
                      <strong>Website:</strong>{' '}
                      <a href={`http://${user.website}`}>
                        {' '}
                        {`http://${user.website}`}
                      </a>
                    </Typography>
                    {user.company ? (
                      <Typography gutterBottom>
                        <strong>Company:</strong> {user.company.name}
                        <ul style={{ margin: '0 auto' }}>
                          <li> Business: {user.company.bs}</li>
                        </ul>
                      </Typography>
                    ) : null}

                    {user.address ? (
                      <Typography gutterBottom>
                        <strong>Address:</strong>{' '}
                        <ul style={{ margin: '0 auto' }}>
                          <li> Street: {user.address.street}</li>
                          <li> Suite: {user.address.suite}</li>
                          <li> City: {user.address.city}</li>
                          <li> Zip code: {user.address.zipcode}</li>
                        </ul>
                      </Typography>
                    ) : null}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      ) : null}
    </>
  );
};

export default UserDetailsCard;
