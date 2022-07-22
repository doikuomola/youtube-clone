import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
`;
const Menu = styled.div`
  flex: 2;
  background-color: #999;
`;
const Main = styled.div`
  flex: 12;
`;

const App = () => {
  return (
    <Container className="App">
      <Menu>
        <Sidebar />{" "}
      </Menu>
      <Main>
        <Navbar />
        <Home />{" "}
      </Main>
    </Container>
  );
};

export default App;
