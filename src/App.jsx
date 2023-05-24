import { useState } from "react";
import viteLogo from "./picture/logo.png";
import "./App.css";

function App() {

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="feedback" />
        </a>
      </div>
      <h1>Please leave feedback</h1>
      <div className="card">
        <button>GOOD</button>
        <button>NEUTRAL</button>
        <button>BAD</button>
      </div>
      <h2>S T A T I S T I C</h2>
      <p className="read-the-docs">good:</p>
      <p className="read-the-docs">neutral:</p>
      <p className="read-the-docs">bad:</p>
    </>
  );
}

export default App;
