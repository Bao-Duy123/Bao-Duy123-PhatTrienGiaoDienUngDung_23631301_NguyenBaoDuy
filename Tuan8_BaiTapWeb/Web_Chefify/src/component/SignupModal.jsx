import { useEffect, useState } from 'react';

const SignupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Use & Privacy Policy');
      return;
    }
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/45"
        aria-label="Close signup"
      />

      <article className="relative z-10 w-full max-w-[480px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 z-10 text-3xl leading-none text-zinc-400 transition hover:text-zinc-700"
          aria-label="Close signup"
        >
          &times;
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-black text-zinc-900">Sign up</h3>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded-lg bg-zinc-100 px-4 py-3 text-sm placeholder-zinc-400 outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded-lg bg-zinc-100 px-4 py-3 text-sm placeholder-zinc-400 outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="example.email@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm placeholder-zinc-400 outline-none focus:ring-2 focus:ring-pink-300"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter at least 8+ characters"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm placeholder-zinc-400 outline-none focus:ring-2 focus:ring-pink-300"
            />

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 cursor-pointer rounded border-pink-300 focus:ring-pink-500"
              />
              <label htmlFor="agreeTerms" className="text-xs text-zinc-700">
                By signing up, I agree with the{' '}
                <a href="#" className="font-semibold text-pink-500 hover:underline">
                  Terms of Use
                </a>
                {' & '}
                <a href="#" className="font-semibold text-pink-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-zinc-600">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-pink-500 hover:underline">
              Log in
            </a>
          </p>

          <div className="my-5 flex items-center gap-3 text-xs text-zinc-400">
            <div className="h-px flex-1 bg-zinc-200" />
            Or
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-lg font-bold text-white hover:bg-red-700"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white hover:bg-blue-700"
            >
              f
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-lg font-bold text-white hover:bg-zinc-800"
            >
              🍎
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SignupModal;
