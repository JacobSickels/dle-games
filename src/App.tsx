import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wor<strong>dle</strong>
        </a>
        <a
          className="App-link"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Worl<strong>dle</strong>
        </a>
        <a
          className="App-link"
          href="https://www.heardle.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hear<strong>dle</strong>
        </a>
        <a
          className="App-link"
          href="https://nerdlegame.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ner<strong>dle</strong>
        </a>
        <a
          className="App-link"
          href="https://qntm.org/files/absurdle/absurdle.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Absur<strong>dle</strong>
        </a>
        <div>
          <a
            className="nsfw"
            href="https://www.lewdlegame.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lew<strong>dle</strong>
          </a>
          &nbsp;
          <span className="nsfw mention">nsfw</span>
        </div>
        <p className="mention">
          Special mention to&nbsp;
          <a
            className="App-link"
            href="https://semantle.novalis.org//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Semantle
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
