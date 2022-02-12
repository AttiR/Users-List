import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

  // Details Card
  detailsCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

    padding: theme.spacing(3, 0, 3),
  },

  Cardwrap: {
    width: '100%',
  },
}));

export default useStyles;
