import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import './index.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;