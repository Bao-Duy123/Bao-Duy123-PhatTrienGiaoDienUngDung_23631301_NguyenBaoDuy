import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../component/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/home/recipe-box');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow">
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Login to Chefify</h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your recipe collection
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-400 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Default: user@example.com
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password123"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-400 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Default: password123
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-pink-500 py-2 text-sm font-semibold text-white transition hover:bg-pink-600 disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h3 className="text-sm font-semibold text-blue-900">Demo Credentials</h3>
            <div className="mt-2 space-y-1 text-xs text-blue-800">
              <p>📧 Email: <code className="font-mono">user@example.com</code></p>
              <p>🔑 Password: <code className="font-mono">password123</code></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
