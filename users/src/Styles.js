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
