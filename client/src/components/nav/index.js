import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {
    Link
  } from "react-router-dom";

const pages = {'Main': '/', 'Students': '/students', 'Team' : '/', 'News': '/' }

const ResponsiveAppBar = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' } }}
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <img src="./images/logo_black.png" width="60px" />
          </IconButton>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <img src="./images/logo_black.png" width="60px" />
          </IconButton>
          <Drawer
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}
          >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {Object.entries(pages).map(([key, value], index) => (
                    <Link to={value} key={`menu_link${index}`}>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary={key} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    ))}
                </List>
            </Box>
          </Drawer>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {Object.entries(pages).map(([key, value], index) => (
                <Link to={value} key={`link${index}`}>
                  <Button
                    key={key}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {key}
                  </Button>
                </Link>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
