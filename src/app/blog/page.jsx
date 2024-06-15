
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-сard";

const prop = {
  "id": 1,
  "date": "2024-06-04",
  "author": "Baurma",
  "title": "How to Sneak Your Phone into Class Like a Pro",
  "description": "Tired of getting caught? Here are 10 ninja-level tips to keep your phone hidden and your texts flowing during boring lectures."
}
export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-50">Latest Blog Posts</h1>
        <div className="flex flex-wrap gap-4">  {/* Flex container with gap */}
          <BlogCard {...prop} />
          <BlogCard {...prop} />
          <BlogCard {...prop} />
          <BlogCard {...prop} />
        </div>
      </main>
    </div>
  );
}
