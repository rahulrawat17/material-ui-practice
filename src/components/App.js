import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header2 from "./ui/Header2";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header2 />
    </ThemeProvider>
  );
}

export default App;
