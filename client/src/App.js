import React from "react";
import './App.css';
import {Container, Col, Row} from 'reactstrap';
import Header from './components/Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Container>
        <Row>
            <Header />
        </Row>
      </Container>
      <Outlet />
    </div>
  );
}

export default App;
