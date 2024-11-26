import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-2">Register</h1>
      <p className="text-gray-400 mb-8">Sign in your account, used login and password.</p>

      <div className="w-full max-w-md bg-[#1a1a1a] rounded-lg p-8">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showRetypePassword ? "text" : "password"}
              placeholder="Retype Password"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowRetypePassword(!showRetypePassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showRetypePassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div>
            <img 
              src="/captcha-placeholder.png" 
              alt="CAPTCHA" 
              className="mx-auto mb-2"
            />
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white rounded-full py-3 font-medium hover:bg-orange-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}