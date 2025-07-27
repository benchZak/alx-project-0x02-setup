// pages/posts.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
  error?: string;
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return {
      props: {
        posts: data.slice(0, 12) // Limit to 12 posts for demo
      },
      revalidate: 60 // Regenerate page every 60 seconds
    };
  } catch (err) {
    return {
      props: {
        posts: [],
        error: err instanceof Error ? err.message : 'An unknown error occurred'
      }
    };
  }
}

export default function PostsPage({ posts, error }: PostsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Latest Posts
        </h1>

        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
