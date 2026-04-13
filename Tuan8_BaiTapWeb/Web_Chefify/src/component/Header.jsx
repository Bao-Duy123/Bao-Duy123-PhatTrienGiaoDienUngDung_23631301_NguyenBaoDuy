import { useNavigate } from 'react-router-dom';
import { LogOut, BookMarked } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { chefifyImages } from '../data/chefifyAssets';

const Header = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleRecipeBox = () => {
    navigate('/home/recipe-box');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          <img src={chefifyImages.brandLogo} alt="Chefify" className="h-8 w-auto" />
        </button>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden flex-1 px-4 md:block lg:px-8">
          <input
            type="search"
            placeholder="What would you like to cook?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm placeholder:text-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
          />
        </div>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden items-center gap-6 text-sm text-gray-600 lg:flex">
          <a href="#" className="transition hover:text-pink-600">
            What to cook
          </a>
          <a href="#" className="transition hover:text-pink-600">
            Recipes
          </a>
          <a href="#" className="transition hover:text-pink-600">
            Ingredients
          </a>
          <a href="#" className="transition hover:text-pink-600">
            Occasions
          </a>
          <a href="#" className="transition hover:text-pink-600">
            About Us
          </a>
        </div>

        {/* Right Side - Auth */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              {/* Your Recipe Box Button */}
              <button
                type="button"
                onClick={handleRecipeBox}
                className="flex items-center gap-2 rounded-lg border border-pink-300 bg-pink-50 px-3 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-100"
              >
                <BookMarked className="h-4 w-4" />
                <span className="hidden sm:inline">Your Recipe Box</span>
              </button>

              {/* User Avatar */}
              <img
                src={user?.avatar}
                alt={user?.name}
                className="h-9 w-9 rounded-full object-cover"
              />

              {/* Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              {/* Login Button */}
              <button
                type="button"
                onClick={handleLoginClick}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
