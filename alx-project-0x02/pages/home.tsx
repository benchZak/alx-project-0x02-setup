// pages/home.tsx
import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { Post } from '../interfaces';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts(prev => [...prev, { ...newPost, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Home | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
              className="border-l-4 border-blue-500"
            />
          ))}
          
          <Card 
            title="Welcome to Our Project"
            content="This is a Next.js project created for learning purposes."
          />
          
          <Card 
            title="Features"
            content="Includes TypeScript, Tailwind CSS, and reusable components."
          />
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
}
