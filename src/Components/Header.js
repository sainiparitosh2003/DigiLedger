import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';
import AuthModal from './Banner/Authentication/AuthModal';
import  UserSidebar  from "./Banner/Authentication/UserSidebar";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  }
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const darkTheme = useMemo(() => createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    }
  }), []);

  const { currency, setCurrency, user } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={handleClick} className={classes.title} variant='h6'>
              DigiLedger
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>

            {user ? <UserSidebar/>: <AuthModal/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
