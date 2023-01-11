import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import StartPage from './pages/StartPage.js';
import AddWiki from './pages/addwiki.js';
import ShowWikis from './pages/ShowWikis';
import ShowWiki from './pages/ShowWiki';
import ShowEntry from './pages/ShowEntry';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes className="loginform">
          <Route path="/" element = {<Login />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/start" element = {<StartPage />} />
          <Route path="/Add" element = {<AddWiki />} />
          <Route path="/Show" element = {<ShowWikis />} />
          <Route path="/ShowWiki" element = {<ShowWiki />} />
          <Route path="/ShowEntry" element = {<ShowEntry />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;