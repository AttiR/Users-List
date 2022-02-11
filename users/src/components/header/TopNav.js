import { Link } from 'react-router-dom';
import { CssBaseline, Toolbar, Typography, AppBar } from '@material-ui/core';
import useStyles from '../../Styles';

const Header = () => {

    const classes = useStyles()
  return (
    <header>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: '#2E3B55' }} >
        <Toolbar>
          <Typography
          className={classes.title}
          variant="h6"
            component={Link}
            to="/"
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
              margin: '0 60px',
            }}
          >
            USERS LIST APP
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
