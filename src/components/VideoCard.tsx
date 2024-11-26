import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Heart, MessageCircle } from 'lucide-react';

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  creator: string;
  views: number;
  likes: number;
  comments: number;
  duration: string;
}

export default function VideoCard({
  id,
  thumbnail,
  title,
  creator,
  views,
  likes,
  comments,
  duration,
}: VideoCardProps) {
  return (
    <Link to={`/video/${id}`} className="group">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-600">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{creator}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Play className="h-4 w-4 mr-1" />
            {views.toLocaleString()} views
          </div>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            {likes.toLocaleString()}
          </div>
          <div className="flex items-center">
            <MessageCircle className="h-4 w-4 mr-1" />
            {comments.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}