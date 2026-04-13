import { useEffect, useMemo, useState } from 'react';
import Header from '../component/Header';
import LoginButton from '../component/LoginButton';
import DiscoverPopup from '../component/DiscoverPopup';
import Footer from '../component/Footer';
import { chefifyImages, introSlides } from '../data/chefifyAssets';

const Home = () => {
  const [showDiscoverPopup, setShowDiscoverPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const dismissedIntro = sessionStorage.getItem('chefify-intro-dismissed');
    if (!dismissedIntro) {
      setShowDiscoverPopup(true);
    }
  }, []);

  const closeDiscoverPopup = () => {
    setShowDiscoverPopup(false);
    sessionStorage.setItem('chefify-intro-dismissed', '1');
  };

  const handleNextSlide = () => {
    if (currentSlide < introSlides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      return;
    }

    closeDiscoverPopup();
  };

  const heroClassName = useMemo(
    () =>
      'relative mx-auto h-[560px] w-full max-w-[1240px] overflow-hidden rounded-xl border border-zinc-200 bg-cover bg-center shadow-sm',
    [],
  );

  return (
    <section className="bg-zinc-50 pb-0">
      <div className="transition">
        <Header />

        <div className="px-4 py-6 sm:px-6">
          <div className={heroClassName} style={{ backgroundImage: `url(${chefifyImages.heroBackground})` }}>
            <div className="absolute inset-0 bg-zinc-950/40" />

            <div className="absolute left-6 top-20 z-10 hidden w-[330px] rounded-xl border border-indigo-200 bg-white/90 p-5 shadow-lg backdrop-blur-sm md:block">
              <span className="rounded-md bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-900">Recipe of the day</span>
              <h3 className="mt-3 text-3xl font-extrabold text-pink-500">Salad Caprese</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Classic Italian salad made with fresh mozzarella, herbs and olive oil to create a refreshing dish.
              </p>
              <button type="button" className="mt-4 rounded-lg bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
                View now
              </button>
            </div>

            <div className="absolute right-6 top-6 z-20 md:hidden">
              <LoginButton variant="solid" size="sm">
                Login
              </LoginButton>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <DiscoverPopup
        open={showDiscoverPopup}
        slides={introSlides}
        currentSlide={currentSlide}
        onSelectSlide={setCurrentSlide}
        onNext={handleNextSlide}
        onClose={closeDiscoverPopup}
      />
    </section>
  );
};

export default Home;
