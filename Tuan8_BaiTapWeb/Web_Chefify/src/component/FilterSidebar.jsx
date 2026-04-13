import { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    types: [],
    timeMin: 0,
    timeMax: 120,
    rating: null,
  });

  const recipeTypes = ['Salad', 'Full meal', 'Dessert', 'Side dish', 'Beverage'];

  const handleTypeChange = (type) => {
    const updatedTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    
    const newFilters = { ...filters, types: updatedTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTimeChange = (e) => {
    const newFilters = { ...filters, timeMax: parseInt(e.target.value) };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating) => {
    const newFilters = { ...filters, rating: filters.rating === rating ? null : rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const defaultFilters = {
      types: [],
      timeMin: 0,
      timeMax: 120,
      rating: null,
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <aside className="sticky top-20 h-fit w-full rounded-lg border border-zinc-200 bg-white p-5 md:max-w-[200px]">
      <button
        type="button"
        onClick={handleReset}
        className="mb-6 w-full rounded-lg border border-pink-300 bg-pink-50 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-100"
      >
        Reset
      </button>

      {/* Type Filter */}
      <div className="border-b border-zinc-200 pb-5">
        <h3 className="flex items-center justify-between text-sm font-bold text-zinc-900">
          Type
          <span className="text-lg text-pink-500">−</span>
        </h3>
        <div className="mt-3 space-y-2">
          {recipeTypes.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
              />
              <span className="text-xs text-zinc-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Filter */}
      <div className="border-b border-zinc-200 py-5">
        <h3 className="flex items-center justify-between text-sm font-bold text-zinc-900">
          Time
          <span className="text-lg text-pink-500">−</span>
        </h3>
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="120"
            value={filters.timeMax}
            onChange={handleTimeChange}
            className="w-full cursor-pointer accent-pink-500"
          />
          <p className="mt-2 text-xs text-zinc-600">Up to {filters.timeMax} minutes</p>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="py-5">
        <h3 className="flex items-center justify-between text-sm font-bold text-zinc-900">
          Rating
          <span className="text-lg text-pink-500">−</span>
        </h3>
        <div className="mt-3 space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className={`flex w-full items-center gap-2 rounded px-2 py-1 text-sm transition ${
                filters.rating === rating
                  ? 'bg-pink-50 text-pink-600'
                  : 'text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ⭐
                  </span>
                ))}
              </div>
              <span className="text-xs">& up</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
