import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
      <p className="text-gray-400 mb-8">Sign in your account, used login and password.</p>

      <div className="w-full max-w-md bg-[#1a1a1a] rounded-lg p-8">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-gray-400 hover:text-orange-500 text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white rounded-full py-3 font-medium hover:bg-orange-600 transition-colors"
          >
            Login
          </button>

          <div className="text-center text-gray-400 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-orange-500 hover:text-orange-400">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}