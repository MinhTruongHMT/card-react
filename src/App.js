import "./App.css";
import styled from "styled-components";
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';

import { Button } from "components/Button";
import Card from "components/Card";
import plusIcon from "assets/plus.svg";
import rightArrow from "assets/right-arrow.svg";
const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .App-header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
const StyleDiv = styled.div`
  width: 20%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
 
  
`;
function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <StyleDiv>
          <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          <Card title={"Revenue"} content="+14.2" percent={-5.1}></Card>
          <Card title={"Revenue"} amount="2.00" percent={12.3}></Card>
          <Card title={"Revenue"} amount="7.00" percent={12.3}></Card>
        </StyleDiv>
      </header>
    </AppWrapper>
  );
}

export default App;
