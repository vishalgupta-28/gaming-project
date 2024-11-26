import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, MessageCircle, Share2, BookmarkPlus } from 'lucide-react';

export default function VideoPlayer() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Video player placeholder */}
              <div className="w-full h-full flex items-center justify-center text-white">
                Video Player ({id})
              </div>
            </div>
            
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Complete Web Development Guide 2024
              </h1>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Creator"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">TechMaster Pro</h3>
                    <p className="text-sm text-gray-500">1.2M subscribers</p>
                  </div>
                  <button className="ml-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                    Subscribe
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Heart className="h-5 w-5" />
                    <span>12.4K</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <BookmarkPlus className="h-5 w-5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">128K views • 2 days ago</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Learn web development from scratch with this comprehensive guide. 
                  We'll cover HTML, CSS, JavaScript, React, and more...
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Comments (856)</h3>
                <div className="flex space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Up Next</h3>
            {/* Related videos list */}
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex space-x-3">
                  <div className="flex-shrink-0 w-40 h-24 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + n}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold line-clamp-2">Related Video Title {n}</h4>
                    <p className="text-sm text-gray-500">Channel Name</p>
                    <p className="text-sm text-gray-500">50K views • 1 day ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}