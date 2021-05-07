import React, { useState } from "react";
import logo from "./logo.svg";
import ImageBoard from "./compoments/ImageBoard";
import Wrapper from "./compoments/Wrapper";
import MyAppBar from "./compoments/MyAppBar";

function App() {
  const [ytId, setYtId] = useState("AbCTlemwZ1k");

  const getYtIdFromUrl = (url: string) => {
    return "AbCTlemwZ1k";
  };
  return (
    <>
      <MyAppBar ytId={ytId} />
      <Wrapper ytId={ytId} />
    </>
  );
}

export default App;
