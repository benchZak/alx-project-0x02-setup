// pages/about.tsx
import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About | ALX Next.js Project</title>
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          About Page
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Button Showcase</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button 
                  size="small"
                  shape="rounded-sm"
                  onClick={() => handleClick('Small button clicked!')}
                >
                  Small Button
                </Button>
                <Button 
                  size="medium"
                  shape="rounded-sm"
                  onClick={() => handleClick('Medium button clicked!')}
                >
                  Medium Button
                </Button>
                <Button 
                  size="large"
                  shape="rounded-sm"
                  onClick={() => handleClick('Large button clicked!')}
                >
                  Large Button
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  size="medium"
                  shape="rounded-sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Rounded Small
                </Button>
                <Button 
                  size="medium"
                  shape="rounded-md"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Rounded Medium
                </Button>
                <Button 
                  size="medium"
                  shape="rounded-full"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Rounded Full
                </Button>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  size="small"
                  shape="rounded-full"
                  className="bg-yellow-600 hover:bg-yellow-700"
                >
                  Small Pill
                </Button>
                <Button 
                  size="large"
                  shape="rounded-full"
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  Large Pill
                </Button>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Button Usage</h2>
            <p className="mb-4">These are reusable buttons with different sizes and shapes.</p>
	    <Button 
              size="large"
              shape="rounded-md"
              className="w-full justify-center"
              onClick={() => handleClick('Primary action clicked!')}
            >
              Primary Action
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
}
