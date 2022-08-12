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

const anchors = ['Intro', 'How we help', 'Requirement to join', 'Join as a student']
const pages = {'Students': '/students', 'Team' : '/', 'News': '/' }

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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'flex', md: 'flex' } }}
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
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
                <List sx={{ display: { xs: 'flex', md: 'none', flexDirection: 'column' } }}>
                    {anchors.map((text, index) => (
                        <Link key={`menu_link_top${index}`} to={'/'}>
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider sx={{ display: { md: 'none' } }}></Divider>
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
            {anchors.map((anc, index) => (
            <Link to={'/'} key={`link${index}`}>
              <Button
                key={anc}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {anc}
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
