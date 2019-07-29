import React from "react";
import { Router } from "@reach/router";
import HomePage from "./Components/home/HomePage";
import HotTapHome from "./Components/hot-tap/HotTapHome";
import RedRibbon from "./Components/RedRibbon";
import Background from "./Components/Background";
import Container from "./Components/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container />
      <Router>
        <HomePage path="/" />
        <HotTapHome path="/releases/hot-tap" />
      </Router>
      <Background />
      <RedRibbon />
    </div>
  );
}

export default App;
