import { useEffect, useState } from 'react';
import LoginButton from './LoginButton';

const LoginModal = ({ onClose }) => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { mockApi } = await import('../services/mockApi');
        const img = await mockApi.getBrandingImages();
        setImages(img);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, []);

  if (!images) return null;

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
          <img src={images.loginCoverImage} alt="Cooking plate" className="h-full w-full object-cover" />
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

          <form className="mt-5 space-y-4" onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
            />
            <LoginButton
              label="Continue"
              size="lg"
              bgColor="#ec4899"
              textColor="#ffffff"
              className="w-full rounded-lg py-3"
            />
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-zinc-400">
            <div className="h-px flex-1 bg-zinc-200" />
            OR
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-rose-50 py-3 text-sm font-semibold text-red-500 transition hover:bg-rose-100"
            >
              <span className="text-lg">G</span>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
            >
              <span className="text-lg">f</span>
              Continue with Facebook
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-100 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              <span className="text-lg">🍎</span>
              Continue with Apple
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] leading-relaxed text-zinc-500">
            By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
          </p>
        </div>
      </article>
    </div>
  );
};

export default LoginModal;
