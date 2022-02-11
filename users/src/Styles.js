import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // Top Nav
  title: {
    display: 'block',
  },

  // Intro
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(20, 0, 10),
  },

  // Card
  cardGrid: {
    padding: '20px 5px',
    margin: '50px auto',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 0, 3),
  },

  cardContent: {
    flexGrow: '1',
  },
  userDetailsButton: {
    marginTop: '5px',
  },
  // Footer
  footerWrap: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
  },
}));

export default useStyles;
