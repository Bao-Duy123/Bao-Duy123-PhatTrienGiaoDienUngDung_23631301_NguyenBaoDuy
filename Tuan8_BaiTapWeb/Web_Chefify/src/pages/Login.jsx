import { useNavigate } from 'react-router-dom';
import LoginButton from '../component/LoginButton';
import { chefifyImages } from '../data/chefifyAssets';
import { useState } from 'react';
import { loginByEmail } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  setError('');
  setLoading(true);
  try {
    const user = await loginByEmail(email);
    sessionStorage.setItem('chefify-user', JSON.stringify(user)); // persistent simple
    setLoading(false);
    navigate('/dashboard');
  } catch (err) {
    setError(err.message || 'Đăng nhập thất bại');
    setLoading(false);
  }
};


  return (
    <section className="relative min-h-screen bg-zinc-100 px-4 py-6 sm:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${chefifyImages.heroBackground})` }}
      >
        <div className="absolute inset-0 bg-zinc-950/55" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-[1120px] items-center justify-center">
        <article className="relative z-10 flex w-full max-w-[860px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="relative hidden w-1/2 md:block">
            <img src={chefifyImages.loginCoverImage} alt="Cooking dish" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-cyan-600/30" />
            <h2 className="absolute left-8 top-14 max-w-[280px] text-4xl font-bold leading-tight text-white drop-shadow-lg">
              "Embrace the art of cooking, where flavors come alive!"
            </h2>
          </div>

          <div className="relative w-full px-8 py-9 md:w-1/2">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="absolute right-6 top-5 text-3xl leading-none text-zinc-400 transition hover:text-zinc-700"
              aria-label="Close"
            >
              &times;
            </button>

            <h1 className="text-5xl font-black text-zinc-900">Login</h1>
            <p className="mt-4 text-zinc-600">Enter your email to log in.</p>

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
  <input
    type="email"
    required
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-300"
  />
  {error && <div className="text-sm text-red-500">{error}</div>}
  <LoginButton
    type="submit"
    label={loading ? 'Please wait…' : 'Continue'}
    size="lg"
    bgColor="#ec4899"
    textColor="#ffffff"
    className="w-full rounded-lg py-3"
    disabled={loading}
    onChange={(e) => setEmail(e.target.value)}
  />
</form>

            <div className="my-5 flex items-center gap-3 text-xs text-zinc-400">
              <div className="h-px flex-1 bg-zinc-200" />
              OR
              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <p className="text-center text-[11px] leading-relaxed text-zinc-500">
              By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
            </p>

            <div className="mt-5 space-y-3">
              <LoginButton
                label="Continue with Google"
                icon={<span className="text-red-500">G</span>}
                bgColor="#f1f5f9"
                textColor="#475569"
                className="w-full rounded-lg py-2.5"
              />
              <LoginButton
                label="Continue with Facebook"
                icon={<span className="text-blue-600">f</span>}
                bgColor="#f1f5f9"
                textColor="#475569"
                className="w-full rounded-lg py-2.5"
              />
              <LoginButton
                label="Continue with Apple"
                icon={<span className="text-zinc-900">A</span>}
                bgColor="#f1f5f9"
                textColor="#475569"
                className="w-full rounded-lg py-2.5"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Login;