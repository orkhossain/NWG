import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import CharacterDetails from './pages/CharacterDetails';
import Navbar from './components/Navbar'
import CharacterForm from './pages/CharacterForm';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/details/:id" 
              element={<CharacterDetails  />}
            />
            <Route 
              path="/create" 
              element={<CharacterForm  />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

