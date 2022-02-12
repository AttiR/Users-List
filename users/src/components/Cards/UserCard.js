import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkButton from '../buttons/LinkButton';
import useStyles from './cardStyles';

const UserCard = ({ user }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <Grid key={user.id} item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <Avatar style={{ width: '100px', height: '100px' }}>
              <Typography variant="h3">{user.name[0]}</Typography>
            </Avatar>

            <CardContent className={classes.CardContent}>
              <Box style={{ marginBottom: '20px' }}>
                <Typography variant="h6" align="center">
                  {user.name}
                </Typography>
                <Typography align="center" color="textSecondary">
                  @{user?.username}
                </Typography>
              </Box>

              <Typography align="center">
                {' '}
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </Typography>
            </CardContent>
            <CardActions>
              <LinkButton
                title="View Details"
                color="secondary"
                buttonClick={(e) => {
                  navigate(`/${user.id}`);
                }}
              />
            </CardActions>
          </Card>
        </Grid>
      ) : null}
    </>
  );
};

export default UserCard;
