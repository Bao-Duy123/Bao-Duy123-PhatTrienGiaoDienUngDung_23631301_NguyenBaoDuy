const DiscoverPopup = ({
  open,
  slides,
  currentSlide,
  onSelectSlide,
  onNext,
  onClose,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        className="absolute inset-0 bg-zinc-950/45"
        onClick={onClose}
        aria-label="Close discover popup"
      />

      <article className="relative z-10 w-full max-w-[860px] rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
        <button
          type="button"
          className="absolute right-5 top-4 text-4xl leading-none text-zinc-500 transition hover:text-zinc-800"
          onClick={onClose}
          aria-label="Close discover popup"
        >
          &times;
        </button>

        <h2 className="mt-2 text-center text-4xl font-black tracking-tight text-pink-500 sm:text-5xl">
          {slides[currentSlide].title}
        </h2>
        <p className="mt-3 text-center text-sm text-zinc-600">{slides[currentSlide].description}</p>

        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="mt-5 h-[230px] w-full rounded-xl border border-indigo-200 object-cover sm:h-[360px]"
        />

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => onSelectSlide(index)}
              className={`h-3 w-3 rounded-full transition ${currentSlide === index ? 'bg-pink-500' : 'bg-zinc-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mx-auto mt-6 w-full max-w-[360px]">
          <button
            type="button"
            onClick={onNext}
            className="w-full rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
          >
            {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full text-sm font-medium text-pink-400 transition hover:text-pink-600"
          >
            Skip
          </button>
        </div>
      </article>
    </div>
  );
};

export default DiscoverPopup;