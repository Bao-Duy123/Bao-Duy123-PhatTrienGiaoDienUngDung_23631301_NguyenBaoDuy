const NoResults = ({ query, onClear }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-pink-50">
        <svg
          className="h-12 w-12 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-zinc-900">
        Sorry, no results were found for "<span className="text-pink-500">{query}</span>"
      </h2>

      <p className="mt-2 text-center text-sm text-zinc-600">
        We couldn't find any ingredients or recipes covered.
      </p>

      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        <button
          onClick={onClear}
          className="rounded-full bg-pink-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
        >
          Clear Filter
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="rounded-full border border-pink-300 bg-pink-50 px-6 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-100"
        >
          Back to Home
        </button>
        <button
          onClick={() => (document.querySelector('input[type="search"]').value = '')}
          className="rounded-full border border-zinc-300 bg-zinc-50 px-6 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
        >
          New Search
        </button>
      </div>
    </div>
  );
};

export default NoResults;
