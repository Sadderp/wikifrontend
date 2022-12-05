import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/login.jsx';
import StartPage from './pages/StartPage.js';
import AddWiki from './pages/addwiki.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes className="loginform">
          <Route path="/" element = {<Login />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/start" element = {<StartPage />} />
          <Route path="/Add" element = {<AddWiki />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;