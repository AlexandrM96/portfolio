import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import AboutMe from "./Components/About_me/AboutMe.js";
import ContactInformation from "./Components/Contact_information/ContactInformation.js";
import ExamplesOfWorks from "./Components/Examples_of_works/ExamplesOfWorks.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="Navigation">
          <Link className="Navigation__Link" to="/">
            <p className="Navigation__Title">Резюме</p>
          </Link>
          <div>
            <ul className="Navigation__Ul">
              <Link className="Navigation__Link" to="/aboutMe">
                <li className="Navigation__List">
                  About Me
                </li>
              </Link>
              <Link className="Navigation__Link" to="/examplesOfWorks">
                <li className="Navigation__List">
                  Examples Of Works
                </li>
              </Link>
              <Link className="Navigation__Link" to="/contactInformation">
                <li className="Navigation__List">
                  Contact Information
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/start"/>
          <Route path="/aboutMe" element={<AboutMe />}/>
          <Route path="/contactInformation" element={<ContactInformation />}/>
          <Route path="/examplesOfWorks" element={<ExamplesOfWorks />}/>
        </Routes>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
