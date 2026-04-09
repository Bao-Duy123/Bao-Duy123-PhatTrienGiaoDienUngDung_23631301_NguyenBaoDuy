import { useEffect, useMemo, useState } from 'react';
import Navbar from '../component/Navbar';
import LoginButton from '../component/LoginButton';
import DiscoverPopup from '../component/DiscoverPopup';
import { chefifyImages, introSlides } from '../data/chefifyAssets';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/45"
        aria-label="Close login"
      />

      <article className="relative z-10 flex w-full max-w-[860px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="relative hidden w-1/2 md:block">
          <img src={chefifyImages.loginCoverImage} alt="Cooking plate" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-cyan-500/25" />
          <p className="absolute left-8 top-14 max-w-[290px] text-4xl font-bold leading-tight text-white drop-shadow-lg">
            "Embrace the art of cooking, where flavors come alive!"
          </p>
        </div>

        <div className="relative w-full p-7 md:w-1/2">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-5 text-3xl leading-none text-zinc-400 transition hover:text-zinc-700"
            aria-label="Close login"
          >
            &times;
          </button>

          <h3 className="text-5xl font-black text-zinc-900">Login</h3>
          <p className="mt-4 text-zinc-600">Enter your email to log in.</p>

          <form className="mt-5" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
            >
              Continue
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

const SignupModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/45"
        aria-label="Close signup"
      />

      <article className="relative z-10 flex w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 z-20 text-3xl leading-none text-zinc-200 transition hover:text-white md:text-zinc-400 md:hover:text-zinc-700"
          aria-label="Close signup"
        >
          &times;
        </button>

        <div className="w-full p-7 sm:p-10 md:w-1/2">
          <h3 className="text-4xl font-black text-zinc-900">Create an account</h3>

          <form className="mt-7 space-y-4" onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-pink-300 bg-zinc-50 px-4 py-3 text-sm outline-none ring-2 ring-pink-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-500 py-3 text-base font-semibold text-white transition hover:bg-pink-600"
            >
              Sign up
            </button>
          </form>

          <p className="mt-7 text-center text-zinc-500">Or sign in with</p>

          <div className="mx-auto mt-4 flex max-w-[260px] items-center justify-center gap-3">
            <button type="button" className="h-10 w-20 rounded-full bg-rose-50 text-lg font-bold text-red-500">G</button>
            <button type="button" className="h-10 w-20 rounded-full bg-slate-100 text-sm font-bold text-blue-600">f</button>
            <button type="button" className="h-10 w-20 rounded-full bg-zinc-100 text-lg text-zinc-700"></button>
          </div>
        </div>

        <div className="relative hidden w-1/2 bg-pink-500 md:block">
          <div className="absolute left-8 top-10 h-48 w-48 rounded-full border-2 border-pink-200/70" />
          <div className="absolute bottom-10 right-8 h-64 w-64 rounded-full border-2 border-pink-200/70" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400" />
          <div className="absolute left-1/2 top-[42%] h-14 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-yellow-300" />
          <p className="absolute bottom-10 left-10 right-10 text-center text-2xl font-bold text-white">
            Join Chefify today
          </p>
        </div>
      </article>
    </div>
  );
};

const SiteFooter = () => {
  return (
    <footer className="mt-8 bg-slate-900 text-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-10 md:grid-cols-[1.8fr,1fr,1fr]">
        <div>
          <h4 className="text-sm font-semibold">About Us</h4>
          <p className="mt-3 max-w-[380px] text-sm text-slate-300">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="mt-4 flex max-w-[360px] items-center gap-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-md border border-slate-600 bg-slate-800 px-3 text-sm text-white outline-none"
            />
            <button type="button" className="h-10 rounded-md bg-pink-500 px-4 text-sm font-semibold text-white">
              Send
            </button>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <h4 className="font-semibold text-white">Learn More</h4>
          <ul className="mt-3 space-y-2">
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="text-sm text-slate-300">
          <h4 className="font-semibold text-white">Recipes</h4>
          <ul className="mt-3 space-y-2">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between border-t border-slate-800 px-6 py-4 text-xs text-slate-300">
        <img src={chefifyImages.footerLogo} alt="Chefify" className="h-7 w-auto" />
        <span>2023 Chefify Company</span>
        <span>Terms of Service | Privacy Policy</span>
      </div>
    </footer>
  );
};

const Home = () => {
  const [showDiscoverPopup, setShowDiscoverPopup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
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
        <Navbar
          onLoginClick={() => setShowLoginModal(true)}
          onSubscribeClick={() => setShowSignupModal(true)}
        />

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
              <LoginButton variant="solid" size="sm" onClick={() => setShowLoginModal(true)}>
                Login
              </LoginButton>
            </div>
          </div>
        </div>

        <SiteFooter />
      </div>

      <DiscoverPopup
        open={showDiscoverPopup}
        slides={introSlides}
        currentSlide={currentSlide}
        onSelectSlide={setCurrentSlide}
        onNext={handleNextSlide}
        onClose={closeDiscoverPopup}
      />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
    </section>
  );
};

export default Home;