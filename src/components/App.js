import React from "react";
import "./App.css";
import Joke from "./Joke";
import JokeState from "../context/JokeState";

function App() {
  return (
    <JokeState>
      <div className="App">
        <Joke />
      </div>
    </JokeState>
  );
}

export default App;
