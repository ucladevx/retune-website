import './App.css';
import background from "./bg.png"

function App() {
  return (
    <div id="page-container">
      <img id="background" src={background} alt="gradient background with star drawings"/>
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
              <input id="email-input" type="text" placeholder="Enter Email" className="montserrat"></input>
              <button id="email-button" className="montserrat">Tune in!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
