import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Header from './component/Header';
import LoginPage from './pages/LoginPage';
import RecipeBoxPage from './pages/RecipeBoxPage';
import SearchResults from './pages/SearchResults';
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <main>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/search" element={<SearchResults />} />
            
            {/* Protected routes */}
            <Route path="/home/recipe-box" element={<RecipeBoxPage />} />
          </Routes>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;