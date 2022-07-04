import './App.css';

function App() {
  return (
    <div id="page-container">
      <img id="background" href="data:image/jpeg;base64,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" />
      <div id="content-container">
        <div id="title-slogan-container">
          <div id="retune-title" className="pacifico">
            Replay
          </div>
          <div id="retune-slogan" className="montserrat">
            Music Discovery Reimagined
          </div>
        </div>
        <div id="email-box-container">
          <div id="stay-in-tune" className="pacifico">
            Stay in Tune.
          </div>
          <div id="explanation" className="montserrat">
            Be the first to tune in to the latest news about Retune, our musical expression and genre exploration platform!
          </div>
          <div id="email-box">
            <div>
              <input id="email-input" type="text"></input>
              <button id="email-button">Tune in!</button>
              <img id="background" href="data:image/jpeg;base64,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" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
