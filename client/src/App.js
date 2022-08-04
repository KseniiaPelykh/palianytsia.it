import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Students from './Students';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    funclick();
  };


  const funclick = function (){
  const baseUrl = window.location.origin;
  const tabs = document.querySelector('.MuiTabs-flexContainer'); 
  const state = history.state;
  tabs.addEventListener('click', tab => 
    {
      if (tab.target) 
      {
        const links = tab.target.getAttribute('link');
        const newUrl = new URL(links, baseUrl);
        history.pushState(state,'',newUrl);
        
      }
    }
  )
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" {...a11yProps(0)} link = '/'  />
          <Tab label="Students" {...a11yProps(1)} link = '/students'  />
        </Tabs>
      </Box>
      <Box m={5}>
        <div
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
        >
          {value === 0 && (
            <Typography>
              Work in progress
            </Typography>
          )}
        </div>
        <div
          role="tabpanel"
          hidden={value !== 1}
          id={`simple-tabpanel-${1}`}
          aria-labelledby={`simple-tab-${1}`}
        >
        {value === 1 && (
          <Students />
        )}
        </div>
      </Box>
    </Box>)
}

export default App;
