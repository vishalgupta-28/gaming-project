import React from 'react';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black z-0"></div>
        <div className="absolute inset-0">
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Video Sharing Platform
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Your videos are stored the safest fastest and earn real money.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary w-full sm:w-auto">
                Get start
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                Premium plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Fast Upload</h3>
            <p className="text-gray-400">Upload your videos with lightning speed and start sharing instantly.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Secure Storage</h3>
            <p className="text-gray-400">Your content is protected with enterprise-grade security measures.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Earn Money</h3>
            <p className="text-gray-400">Monetize your content and earn from your passionate audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}