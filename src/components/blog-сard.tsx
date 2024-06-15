// src/components/BlogCard.js
import React from 'react';

const BlogCard = ({ date, author, title, description }) => {
  return (
    <div className="max-w-xs w-full h-64 bg-white rounded-xl shadow-md overflow-hidden mx-auto my-4">
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{date}</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</h1>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
        <div className="mt-4">
          <span className="text-gray-700">Author: {author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
