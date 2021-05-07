import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Text = styled.div`
  position: absolute;
  bottom: 50px;
  left: 30px;
  background: blue;
  color: white;
`;
interface Props {}

const TextPrimary = (props: Props) => {
  return (
    <>
      <Text>To jest napis na grafice</Text>
    </>
  );
};

export default TextPrimary;
