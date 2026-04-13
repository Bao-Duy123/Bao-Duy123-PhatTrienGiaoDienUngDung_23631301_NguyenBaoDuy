import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import { chefifyImages } from '../data/chefifyAssets';

const Navbar = ({ onLoginClick, onSubscribeClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  return (
    <header className="relative z-20 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-4 py-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={chefifyImages.brandLogo} alt="Chefify logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden flex-1 px-3 md:block lg:px-6">
          <form onSubmit={handleSearch} className="flex h-11 w-full items-center rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-zinc-500">
            <span className="mr-2 text-sm">🔎</span>
            <input
              type="text"
              placeholder="What would you like to cook?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
            />
          </form>
        </div>

        <div className="hidden items-center gap-5 text-sm text-zinc-600 lg:flex">
          <a href="#" className="transition hover:text-pink-600">What to cook</a>
          <a href="#" className="transition hover:text-pink-600">Recipes</a>
          <a href="#" className="transition hover:text-pink-600">Ingredients</a>
          <a href="#" className="transition hover:text-pink-600">Occasions</a>
          <a href="#" className="transition hover:text-pink-600">About Us</a>
        </div>

        <div className="flex items-center gap-2">
          <LoginButton variant="outline" size="sm" onClick={onLoginClick}>
            Login
          </LoginButton>
          <button
            type="button"
            onClick={onSubscribeClick}
            className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            Subscribe
          </button>
          <img
            src={chefifyImages.userAvatar}
            alt="User avatar"
            className="hidden h-9 w-9 rounded-full object-cover md:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;