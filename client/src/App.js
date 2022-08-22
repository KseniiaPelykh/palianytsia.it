import * as React from 'react';
import PageLayout from './components/page'
import MainPage from './components/main'
import Students from './components/students'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      <Router>
        <PageLayout>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/students" element={<Students />}></Route>
            </Routes>
        </PageLayout>

      </Router>
    
  )
}

export default App;
