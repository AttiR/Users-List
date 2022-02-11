import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // Top Nav
  title: {
    display: 'block',
  },

  // Intro 
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 8),
  },

  // Card
  cardGrid: {
    padding: '20px 5px',
    margin:'50px auto'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
   
    
    
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: '1',
  },

  // Footer
  footerWrap: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
  },
}));

export default useStyles;
