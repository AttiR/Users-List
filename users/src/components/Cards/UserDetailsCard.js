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
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <LinkButton title="Go Back" color="secondary" component={Link} to="/" />

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

export default UserDetailsCard;
