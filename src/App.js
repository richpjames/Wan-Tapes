import React from 'react';
import Container from "./Components/Container"
import RedRibbon from "./Components/RedRibbon"
import Background from "./Components/Background"
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <Container />
      <RedRibbon />
    </div>
  );
}

export default App;
