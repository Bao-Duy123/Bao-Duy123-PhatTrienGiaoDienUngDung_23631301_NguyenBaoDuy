import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Header from '../component/Header';
import RecipeCard from '../component/RecipeCard';
import recipesData from '../data/recipes.json';

const RecipeBoxPage = () => {
  const { isLoggedIn, user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setRecipes(recipesData.recipes);
      setLoading(false);
    }, 500);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
          <p className="mt-2 text-gray-600">Please login to view your recipe box.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {user?.name}'s Recipe Box
          </h1>
          <p className="mt-2 text-gray-600">
            Manage and discover your favorite recipes
          </p>
        </div>

        {/* User Info */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-6">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user?.name}
              </h2>
              <p className="text-sm text-gray-600">{user?.email}</p>
              <div className="mt-3 flex gap-3">
                <button
                  type="button"
                  className="rounded-lg border border-pink-300 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-100"
                >
                  ❤️ Subscribers
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  📤 Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex gap-6">
            <button
              type="button"
              className="border-b-2 border-pink-500 py-2 text-sm font-semibold text-pink-600"
            >
              Saved Recipes
            </button>
            <button
              type="button"
              className="py-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
            >
              Folders
            </button>
            <button
              type="button"
              className="py-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"
            >
              Recipes by Cuisine
            </button>
          </div>
        </div>

        {/* Recipes Grid */}
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="mb-4 h-48 rounded-lg bg-gray-200" />
                <div className="h-4 bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing {recipes.length} recipes
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled
                className="rounded px-3 py-2 text-sm text-gray-600 disabled:opacity-50"
              >
                ←
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`h-9 min-w-[36px] rounded text-sm font-semibold transition ${
                    page === 1
                      ? 'bg-pink-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                →
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default RecipeBoxPage;
