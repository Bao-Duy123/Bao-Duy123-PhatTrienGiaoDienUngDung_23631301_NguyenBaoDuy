import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Search, X } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [filters, setFilters] = useState({
    types: [],
    timeMin: 0,
    timeMax: 120,
    ratings: [],
  });

  const [results, setResults] = useState([]);

  const recipeTypes = ['Salad', 'Dessert', 'Tea break', 'Sea food'];
  const ratingOptions = [1, 2, 3, 4, 5];

  // Mock recipe data
  const allRecipes = [
    { id: 1, name: 'Caprese Salad', type: 'Salad', time: 15, rating: 5 },
    { id: 2, name: 'Chocolate Cake', type: 'Dessert', time: 45, rating: 4.5 },
    { id: 3, name: 'Caesar Salad', type: 'Salad', time: 20, rating: 4 },
    { id: 4, name: 'Green Tea Ice Cream', type: 'Dessert', time: 30, rating: 5 },
    { id: 5, name: 'Seafood Pasta', type: 'Sea food', time: 35, rating: 4.5 },
  ];

  useEffect(() => {
    // Filter recipes based on query and active filters
    let filtered = allRecipes.filter((recipe) => {
      const matchesQuery = recipe.name.toLowerCase().includes(query.toLowerCase());

      const matchesType =
        filters.types.length === 0 || filters.types.includes(recipe.type);

      const matchesTime =
        recipe.time >= filters.timeMin && recipe.time <= filters.timeMax;

      const matchesRating =
        filters.ratings.length === 0 ||
        filters.ratings.some((r) => recipe.rating >= r);

      return matchesQuery && matchesType && matchesTime && matchesRating;
    });

    setResults(filtered);
  }, [query, filters]);

  const toggleType = (type) => {
    setFilters((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  const toggleRating = (rating) => {
    setFilters((prev) => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating],
    }));
  };

  const handleApplyFilters = () => {
    // Filters are already applied via useEffect
    console.log('Filters applied:', filters);
  };

  const handleReset = () => {
    setFilters({
      types: [],
      timeMin: 0,
      timeMax: 120,
      ratings: [],
    });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-zinc-50">
        <div className="mx-auto max-w-[1240px] px-6 py-10">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-64 flex-shrink-0">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-zinc-900">FILTERS</h3>

                {/* Type Filter */}
                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <h4 className="font-semibold text-zinc-800">Type</h4>
                  <div className="mt-3 space-y-2">
                    {recipeTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.types.includes(type)}
                          onChange={() => toggleType(type)}
                          className="h-4 w-4 rounded border-pink-300 text-pink-500 focus:ring-pink-500"
                        />
                        <span className="text-sm text-zinc-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Time Filter */}
                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <h4 className="font-semibold text-zinc-800">Time</h4>
                  <div className="mt-4 space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="120"
                      value={filters.timeMin}
                      onChange={(e) =>
                        setFilters({ ...filters, timeMin: parseInt(e.target.value) })
                      }
                      className="w-full accent-pink-500"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={filters.timeMin}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            timeMin: Math.min(parseInt(e.target.value) || 0, filters.timeMax),
                          })
                        }
                        className="w-12 rounded border border-zinc-200 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-pink-300"
                      />
                      <span className="self-center text-xs text-zinc-500">-</span>
                      <input
                        type="number"
                        value={filters.timeMax}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            timeMax: Math.max(parseInt(e.target.value) || 120, filters.timeMin),
                          })
                        }
                        className="w-12 rounded border border-zinc-200 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-pink-300"
                      />
                      <span className="self-center text-xs text-zinc-500">min</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <h4 className="font-semibold text-zinc-800">Rating</h4>
                  <div className="mt-3 space-y-2">
                    {ratingOptions.map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.ratings.includes(rating)}
                          onChange={() => toggleRating(rating)}
                          className="h-4 w-4 rounded border-pink-300 text-pink-500 focus:ring-pink-500"
                        />
                        <div className="flex">
                          {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-sm text-yellow-400">
                              ★
                            </span>
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <span key={i} className="text-sm text-zinc-300">
                              ★
                            </span>
                          ))}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApplyFilters}
                  className="mt-8 w-full rounded-lg bg-pink-500 py-2 font-semibold text-white transition hover:bg-pink-600"
                >
                  APPLY
                </button>

                {/* Reset Button */}
                {(filters.types.length > 0 ||
                  filters.timeMin > 0 ||
                  filters.timeMax < 120 ||
                  filters.ratings.length > 0) && (
                  <button
                    onClick={handleReset}
                    className="mt-3 w-full rounded-lg border border-zinc-200 py-2 font-semibold text-zinc-700 transition hover:bg-zinc-50"
                  >
                    RESET
                  </button>
                )}
              </div>
            </aside>

            {/* Results Content */}
            <main className="flex-1">
              {results.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative mb-6">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-pink-500 bg-pink-50">
                      <Search className="h-20 w-20 text-pink-500" />
                    </div>
                    <X className="absolute right-0 top-0 h-8 w-8 rounded-full bg-pink-500 p-1 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-zinc-900">
                    Sorry, no results were found for "{query}"
                  </h2>
                  <p className="mt-3 text-center text-sm text-zinc-600">
                    We checked all your independent-day specific coverage
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button className="rounded-lg bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-500 hover:bg-pink-200">
                      Show More
                    </button>
                    <button className="rounded-lg bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-500 hover:bg-pink-200">
                      Popular Recipe
                    </button>
                    <button className="rounded-lg bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-500 hover:bg-pink-200">
                      Just For You
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-zinc-900">
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {results.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                      >
                        <div className="h-48 bg-gradient-to-br from-pink-300 to-pink-500" />
                        <div className="p-4">
                          <h3 className="font-bold text-zinc-900">{recipe.name}</h3>
                          <p className="mt-1 text-sm text-zinc-600">{recipe.type}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs text-zinc-500">{recipe.time} min</span>
                            <span className="text-sm text-yellow-400">
                              {'★'.repeat(Math.floor(recipe.rating))}
                              {'☆'.repeat(5 - Math.floor(recipe.rating))}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchResults;
