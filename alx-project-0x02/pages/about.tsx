// pages/about.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            This is a Next.js project demonstrating reusable components and routing.
          </p>
          <Button 
            size="medium" 
            shape="rounded-md"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
}
