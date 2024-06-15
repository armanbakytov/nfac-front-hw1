import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import data from '../data.json';

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {posts.map(post => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Page;