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
      <Container maxWidth="md">
        <CssBaseline />
        <LinkButton title="Go Back" color="secondary" component={Link} to="/" />
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
                    <strong>User Name:</strong> {user?.username}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${user?.email}`}>{user?.email}</a>
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Phone:</strong> {user?.phone}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Website:</strong>{' '}
                    <a href={`http://${user?.website}`}>
                      {' '}
                      {`http://${user?.website}`}
                    </a>
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Company:</strong>{' '}
                    {user && user.company ? user.company.name : null}
                    <ul style={{ margin: '0 auto'}}>
                      <li>
                        {' '}
                        Business:{' '}
                        {user && user.company ? user.company.bs : null}
                      </li>
                    </ul>
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Address:</strong>{' '}
                    <ul style={{ margin: '0 auto'}}>
                      <li> Street:  {user && user.address ? user.address.street : null}</li>
                      <li> Suite:  {user && user.address ? user.address.suite : null}</li>
                      <li> City:  {user && user.address ? user.address.city : null}</li>
                      <li> Zip code:  {user && user.address ? user.address.zipcode : null}</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default UserDetailsCard;
