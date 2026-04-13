import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import FilterSidebar from '../component/FilterSidebar';
import NoResults from '../component/NoResults';
import LoginModal from '../component/LoginModal';
import SignupModal from '../component/SignupModal';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [filters, setFilters] = useState({
    types: [],
    timeMin: 0,
    timeMax: 120,
    rating: null,
  });

  // Simulated recipe data - in production this would come from an API
  const mockRecipes = [
    {
      id: 1,
      name: 'Caesar Salad',
      type: 'Salad',
      time: 15,
      rating: 4.5,
      image: 'https://via.placeholder.com/200x150?text=Caesar+Salad',
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      type: 'Full meal',
      time: 25,
      rating: 4.8,
      image: 'https://via.placeholder.com/200x150?text=Carbonara',
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      type: 'Dessert',
      time: 45,
      rating: 5,
      image: 'https://via.placeholder.com/200x150?text=Chocolate+Cake',
    },
    {
      id: 4,
      name: 'Garlic Bread',
      type: 'Side dish',
      time: 10,
      rating: 4.2,
      image: 'https://via.placeholder.com/200x150?text=Garlic+Bread',
    },
  ];

  // Filter recipes based on query and filters
  const filteredRecipes = mockRecipes.filter((recipe) => {
    // If query is "cakescascsa" or other non-matching terms
    if (query.toLowerCase() !== recipe.name.toLowerCase() && 
        !recipe.name.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }

    if (filters.types.length > 0 && !filters.types.includes(recipe.type)) {
      return false;
    }

    if (recipe.time > filters.timeMax) {
      return false;
    }

    if (filters.rating && recipe.rating < filters.rating) {
      return false;
    }

    return true;
  });

  const hasResults = filteredRecipes.length > 0;

  return (
    <section className="min-h-screen bg-zinc-50">
      <Header />

      <div className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6">
        {/* Search Info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-zinc-900">
            Search results for: <span className="text-pink-500">"{query}"</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            {hasResults ? `Found ${filteredRecipes.length} recipe(s)` : 'No recipes found'}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <FilterSidebar onFilterChange={setFilters} />

          {/* Results */}
          <div>
            {hasResults ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRecipes.map((recipe) => (
                  <article
                    key={recipe.id}
                    className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-zinc-900">{recipe.name}</h3>
                      <div className="mt-2 flex items-center justify-between text-xs text-zinc-600">
                        <span className="rounded-full bg-pink-50 px-2 py-1 text-pink-600">
                          {recipe.type}
                        </span>
                        <span>⏱️ {recipe.time} min</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <span className="text-sm font-semibold text-zinc-900">
                          {recipe.rating}
                        </span>
                        <span className="text-xs">⭐ (24 reviews)</span>
                      </div>
                      <button
                        type="button"
                        className="mt-4 w-full rounded-lg bg-pink-500 py-2 text-xs font-semibold text-white transition hover:bg-pink-600"
                      >
                        View Recipe
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <NoResults
                query={query}
                onClear={() => window.location.href = '/search'}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </section>
  );
};

export default SearchResults;
