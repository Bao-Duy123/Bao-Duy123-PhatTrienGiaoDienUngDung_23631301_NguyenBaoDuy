import { Clock, ChefHat, Heart } from 'lucide-react';

const RecipeCard = ({ recipe }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:bg-pink-50"
        >
          <Heart className="h-5 w-5 text-pink-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
          {recipe.name}
        </h3>

        {/* Meta Info */}
        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{recipe.time} mins</span>
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${getDifficultyColor(
              recipe.difficulty,
            )}`}
          >
            <ChefHat className="h-3 w-3" />
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
