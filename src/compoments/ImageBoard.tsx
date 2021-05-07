import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextPrimary from "./TextPrimary";

const Board = styled.div`
  position: relative;
  background: url("https://images.unsplash.com/photo-1527597295040-dabe52ba22ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-size: cover;

  width: 500px;
  height: 350px;
  background-color: red;
  margin: auto;
`;
interface Props {}

const ImageBoard = (props: Props) => {
  return (
    <>
      <Board>
        <TextPrimary />
      </Board>
    </>
  );
};

export default ImageBoard;
