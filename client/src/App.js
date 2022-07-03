import React from "react";
import './App.css';
import {Container, Col, Row} from 'reactstrap';
// import Header from './components/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <p>Site is under construction. We will be back with something amazing!</p>
      <Container>
        <Row>
            {/* <Header /> */}
        </Row>
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
