import React from "react";
import { Router } from "@reach/router";
import HomePage from "./Components/home/HomePage";
import "./App.css";
import ReleasesHome from "./Components/releases-page/ReleasesHome";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <ReleasesHome path="/releases" />
      </Router>
    </div>
  );
}

export default App;
