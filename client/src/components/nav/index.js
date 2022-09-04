import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslate } from 'react-polyglot';
import ButtonGroup from '@mui/material/ButtonGroup';

import {
    Link
  } from "react-router-dom";

const pages = {main: '/', students: '/students', /* team : '/', news: '/' */}

const ResponsiveAppBar = (props) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const menuOnClick = (e) =>{
    const {ChangeLangOnClick} = props;
    const lang = e.target.dataset["lang"];
    ChangeLangOnClick(lang);
  }

  const t = useTranslate();

  return (
    <AppBar position="fixed" id="appbar">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' } }}
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit">
              <img src="./images/logo_black.png" width="60px" />
          </IconButton>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}
              size="large"
              aria-label=""
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit">
              <img src="./images/logo_black.png" width="60px" />
          </IconButton>
          <Typography size="large">
            Palianytsia IT
          </Typography>
          <Drawer
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}>
                {/* <ButtonGroup variant="text" aria-label="Choose language" id="language-select-mobile" onClick={menuOnClick}>
                  <Button data-lang="en">EN</Button>
                  <Button data-lang="ua">UA</Button>
                </ButtonGroup> */}
                <List>
                    {Object.entries(pages).map(([key, value], index) => (
                    <Link to={value} key={`menu_link${index}`}>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary={t('menu.'+key)} />
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
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    {t('menu.'+key)}
                  </Button>
                </Link>
            ))}
            {/* <ButtonGroup variant="text" aria-label="Choose language" id="language-select" onClick={menuOnClick}>
              <Button data-lang="en">EN</Button>
              <Button data-lang="ua">UA</Button>
            </ButtonGroup> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
