import './App.css';
import background from "./bg.png"
import { useEffect, useState } from 'react';
import axios from 'axios'
import Airtable from 'airtable'


function App() {

  const [email, setEmail] = useState("");
  const [emaiLCreated, setEmailCreated] = useState(false);
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers['Authorization'] = 'Bearer API_KEY';


  const sendEmail = async () => {
    console.log(process.env.REACT_APP_AIRTABLE)
    const base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE}).base('appgdBKpbthH8ffmP'); 
        base('Teams').create([
          {
            "fields": {
              "Name": email,
            }
          },
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          setEmailCreated(true);
        });
  }

  const uploadEmail = async (email) => {
   console.log(email);
   await sendEmail(email);
  };

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
              <input id="email-input" type="text" placeholder="Enter Email" className="montserrat" onChange={(v) => setEmail(v.target.value)} value={email} />
              <button id="email-button" className="montserrat" onClick={uploadEmail}>Tune in!</button>
            </div>
          </div>
          <div id="thank-you">
            {emaiLCreated && <span >Thank you! We will be in touch.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
