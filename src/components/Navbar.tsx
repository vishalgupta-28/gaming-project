import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Upload, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">STREAM<span className="text-orange-500">HB</span></span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 ml-10">
              <Link to="/earn" className="text-gray-300 hover:text-white transition-colors">Earn Money</Link>
              <Link to="/premium" className="text-gray-300 hover:text-white transition-colors">Premium</Link>
              <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Api Docs</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}