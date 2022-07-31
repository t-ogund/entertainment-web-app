import './App.css';
import { Routes, Route } from "react-router-dom";
import TVMovies from './Components/TVMovies'
import Nav from './Components/Nav'
import Movies from './Components/Movies'
import TV from './Components/TV'


function App() {
  return (
    <div className="App">
       <Nav />
      <div className="Body">
              <Routes>
                <Route path="/" element={ <TVMovies /> } />
                <Route path="/AllMedia" element={ <TVMovies /> } />
                <Route path="/Movies" element={ <Movies />} />
                <Route path="/TV" element={ <TV /> } /> 
              </Routes>
      </div>
    </div>
  );
}

export default App;
